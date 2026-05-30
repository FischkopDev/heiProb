"use server";

import { NextResponse } from "next/server";
import pool from "../../../../lib/db";

/**
 * Sucht die eindeutige ID eines Experten basierend auf dem Namen.
 * 
 * @param name - Der Name des Experten, nach dem gesucht werden soll.
 * @returns Die ID des Experten als Zahl, falls gefunden, sonst null.
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
 * Erstellt ein neues Projekt in der Datenbank und verknüpft es mit den angegebenen Mitgliedern.
 * 
 * Dieser Prozess beinhaltet:
 * 1. Einfügen der Projektdaten in die Tabelle "Project".
 * 2. Iteration über die Mitgliederliste.
 * 3. Auflösung der Expert-ID (entweder direkt oder per Namenssuche).
 * 4. Einfügen oder Aktualisieren der Beziehung in "ProjectRelation".
 * 
 * @param body - Das Objekt mit den Projektdaten.
 * @param body.title - Der Titel des Projekts (erforderlich).
 * @param body.description - Eine optionale Beschreibung.
 * @param body.startDate - Der Starttermin (optional, wird zu Date konvertiert).
 * @param body.endDate - Das Enddatum (optional, wird zu Date konvertiert).
 * @param body.state - Der Status/Zustand des Projekts.
 * @param body.location - Der Standort des Projekts.
 * @param body.websiteUrl - Die URL zur Projektwebsite.
 * @param body.details - Zusätzliche Details zum Projekt.
 * @param body.members - Ein Array von Mitgliedern, das entweder 'expertId' oder 'name' sowie eine 'role' enthalten muss.
 * @returns Die ID des neu erstellten Projekts.
 * @throws Ein Fehler, wenn die Datenbankoperation fehlschlägt.
 */
async function addProject(body: any) {
  const {
    title,
    description,
    startDate,
    endDate,
    state,
    location,
    websiteUrl,
    details,
    members,
  } = body;

  try {
    const projectResult = await pool.query(
      `INSERT INTO "Project" (title, description, "startDate", "endDate", state, location, "websiteUrl", details, "lastUpdate")
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id`,
      [
        title,
        description || null,
        startDate ? new Date(startDate) : null,
        endDate ? new Date(endDate) : null,
        state || null,
        location || null,
        websiteUrl || null,
        details || null,
        new Date(),
      ]
    );

    const projectId = projectResult.rows[0].id;

    if (Array.isArray(members) && members.length > 0) {
      for (const member of members) {
        // Versuche, die Expert-ID zu finden: zuerst explizit angegeben, sonst per Name suchen
        const expertId = member.expertId ?? await getExpertIdByName(member.name);
        
        if (!expertId) {
          console.warn('Skipping project member because expert could not be resolved:', member);
          continue;
        }

        // Füge die Beziehung hinzu oder aktualisiere die Rolle bei Duplikaten (Upsert)
        await pool.query(
          `INSERT INTO "ProjectRelation" (project_id, expert_id, role)
           VALUES ($1, $2, $3)
           ON CONFLICT (project_id, expert_id) DO UPDATE SET role = EXCLUDED.role`,
          [projectId, expertId, member.role]
        );
      }
    }

    return projectId;
  } catch (error) {
    console.error("Error creating project:", error);
    throw error;
  }
}

/**
 * Handler für HTTP POST-Anfragen zum Erstellen eines neuen Projekts.
 * 
 * Validiert die Eingabedaten und delegiert die eigentliche Erstellung an addProject().
 * 
 * @param request - Die eingehende HTTP-Anfrage.
 * @returns Ein JSON-Antwortobjekt mit Erfolgsmeldung und Projekt-ID oder einem Fehlerstatus.
 * 
 * @example
 * // Erwartetes Body-Format:
 * {
 *   "title": "Neues Projekt",
 *   "state": "active",
 *   "members": [{ "name": "Max Mustermann", "role": "Lead" }]
 * }
 */
export async function POST(request: Request) {
  const body = await request.json();
  const { title, state } = body;

  console.log("Adding new project to database");

  // Validierung der erforderlichen Felder
  if (!title || !state) {
    return NextResponse.json(
      {
        error: "Missing required fields",
        required: ["title", "state"],
      },
      { status: 400 }
    );
  }

  try {
    const projectId = await addProject(body);

    return NextResponse.json({
      success: true,
      projectId,
    });
  } catch (error: any) {
    console.error("Error adding project:", error);

    return NextResponse.json(
      {
        error: "Failed to create project",
        details: error.message,
      },
      { status: 500 }
    );
  }
}