"use server";

import { NextResponse } from "next/server";
import pool from "../../../../lib/db";

/**
 * Sucht die eindeutige ID eines Experten basierend auf dem Namen.
 * 
 * @param name - Der Name des Experten, nach dem gesucht werden soll.
 * @returns Die ID des Experten als Zahl, falls gefunden, sonst null.
 * @remarks
 * - Fängt Datenbankfehler ab und gibt null zurück, um den Hauptprozess nicht zu unterbrechen.
 * - Nutzt `LIMIT 1`, da davon ausgegangen wird, dass Namen eindeutig sind.
 */
async function getExpertIdByName(name: string): Promise<number | null> {
  try {
    const result = await pool.query(
      `SELECT expert_id FROM "Expert" WHERE name = $1 LIMIT 1`,
      [name]
    );

    return result.rows.length > 0 ? result.rows[0].expert_id : null;
  } catch (error) {
    console.error("Error fetching expert ID:", error);
    return null;
  }
}

/**
 * Synchronisiert die Mitgliederliste eines Projekts mit der Datenbank.
 * 
 * Diese Funktion führt einen "Full Sync" durch:
 * 1. Fügt neue Mitglieder hinzu oder aktualisiert deren Rolle (Upsert).
 * 2. Entfernt alle bestehenden Zuweisungen, die nicht mehr in der neuen Liste enthalten sind.
 * 
 * @param projectId - Die ID des zu aktualisierenden Projekts.
 * @param members - Ein Array von Mitgliedern. Jedes Mitglied muss entweder `expertId` oder `name` 
 *                  sowie eine `role` enthalten.
 * 
 * @remarks
 * - Wenn `members` leer ist, werden ALLE Zuweisungen für dieses Projekt gelöscht.
 * - Nicht auflösbare Experten (unbekannte Namen/IDs) werden übersprungen und geloggt.
 * - Die Löschung erfolgt nur, wenn mindestens ein gültiges Mitglied existiert, um das Projekt nicht komplett zu entleeren, wenn die Liste leer ist (dies wird oben separat behandelt).
 */
async function synchronizeProjectMembers(projectId: number, members: any[]) {
  if (!Array.isArray(members)) {
    return;
  }

  if (members.length === 0) {
    // Leere Liste bedeutet: Alle Zuweisungen löschen
    await pool.query(
      `DELETE FROM "ProjectRelation" WHERE project_id = $1`,
      [projectId]
    );
    return;
  }

  const acceptedExpertIds: number[] = [];
  for (const member of members) {
    // Versuche, die Expert-ID zu finden: zuerst explizit angegeben, sonst per Name suchen
    const expertId = member.expertId ?? (member.name ? await getExpertIdByName(member.name) : null);
    
    if (!expertId) {
      console.warn("Skipping project member because expert could not be resolved:", member);
      continue;
    }

    acceptedExpertIds.push(expertId);

    // Upsert: Einfügen oder Rolle aktualisieren bei bestehender Zuweisung
    await pool.query(
      `INSERT INTO "ProjectRelation" (project_id, expert_id, role)
       VALUES ($1, $2, $3)
       ON CONFLICT (project_id, expert_id) DO UPDATE SET role = EXCLUDED.role`,
      [projectId, expertId, member.role]
    );
  }

  // Entferne alte Zuweisungen, die nicht mehr in der aktuellen Liste sind
  if (acceptedExpertIds.length > 0) {
    const placeholders = acceptedExpertIds.map((_, index) => `$${index + 2}`).join(", ");
    await pool.query(
      `DELETE FROM "ProjectRelation"
       WHERE project_id = $1
         AND expert_id NOT IN (${placeholders})`,
      [projectId, ...acceptedExpertIds]
    );
  }
}

/**
 * Aktualisiert die Metadaten eines Projekts und synchronisiert optional die Mitglieder.
 * 
 * Nutzt `COALESCE` in der SQL-Abfrage, um nur übergebene Werte zu aktualisieren und 
 * bestehende Werte beizubehalten, wenn sie im Request fehlen.
 * 
 * @param body - Das Objekt mit den zu aktualisierenden Daten.
 * @param body.project_id - Die ID des zu aktualisierenden Projekts (erforderlich).
 * @param body.title - Neuer Titel (optional).
 * @param body.description - Neue Beschreibung (optional).
 * @param body.startDate - Neuer Starttermin (optional).
 * @param body.endDate - Neues Enddatum (optional).
 * @param body.state - Neuer Status (optional).
 * @param body.location - Neuer Standort (optional).
 * @param body.websiteUrl - Neue Website-URL (optional).
 * @param body.details - Neue Details (optional).
 * @param body.members - (Optional) Array von Mitgliedern zur Synchronisation.
 * 
 * @returns Das aktualisierte Projekt-Objekt (mit `id`) bei Erfolg, sonst `null`.
 * @throws Wirft einen Fehler, wenn die Datenbankoperation fehlschlägt.
 */
async function updateProject(body: any) {
  const {
    project_id,
    title,
    description,
    startDate,
    endDate,
    state,
    location,
    websiteUrl,
    details,
  } = body;

  const result = await pool.query(
    `UPDATE "Project"
     SET title = COALESCE($1, title),
         description = COALESCE($2, description),
         "startDate" = COALESCE($3, "startDate"),
         "endDate" = COALESCE($4, "endDate"),
         state = COALESCE($5, state),
         location = COALESCE($6, location),
         "websiteUrl" = COALESCE($7, "websiteUrl"),
         details = COALESCE($8, details),
         "lastUpdate" = $9
     WHERE id = $10
     RETURNING id`,
    [
      title ?? null,
      description ?? null,
      startDate ? new Date(startDate) : null,
      endDate ? new Date(endDate) : null,
      state ?? null,
      location ?? null,
      websiteUrl ?? null,
      details ?? null,
      new Date(),
      project_id,
    ]
  );

  if (result.rows.length === 0) {
    return null;
  }

  // Synchronisiere Mitglieder, falls vorhanden
  if (Array.isArray(body.members)) {
    await synchronizeProjectMembers(project_id, body.members);
  }

  return result.rows[0];
}

/**
 * Handler für HTTP PATCH-Anfragen zum Aktualisieren eines bestehenden Projekts.
 * 
 * Validiert die Anwesenheit der `project_id`, ruft die Update-Funktion auf 
 * und gibt das Ergebnis als JSON zurück.
 * 
 * @param request - Die eingehende HTTP-Anfrage.
 * @returns Ein JSON-Antwortobjekt:
 *   - `200`: Erfolg mit `projectId`
 *   - `400`: Fehlende `project_id`
 *   - `404`: Projekt nicht gefunden
 *   - `500`: Interner Serverfehler
 * 
 * @example
 * // Erwartetes Body-Format:
 * {
 *   "project_id": 123,
 *   "title": "Neuer Titel",
 *   "members": [{ "name": "Anna Schmidt", "role": "Developer" }]
 * }
 */
export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { project_id } = body;

    if (!project_id) {
      return NextResponse.json(
        { error: "project_id is required for updates" },
        { status: 400 }
      );
    }

    const updatedProject = await updateProject(body);

    if (!updatedProject) {
      return NextResponse.json(
        { error: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      projectId: updatedProject.id,
    });
  } catch (error: any) {
    console.error("Error updating project:", error);
    return NextResponse.json(
      { error: "Failed to update project", details: error.message },
      { status: 500 }
    );
  }
}