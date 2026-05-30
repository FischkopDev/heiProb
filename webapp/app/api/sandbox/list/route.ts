import { NextResponse } from "next/server";
import pool from "../../../../lib/db";

/**
 * Ruft eine Liste von Sandbox-Projekten aus der Datenbank ab.
 * 
 * Diese Funktion führt eine komplexe Abfrage durch, die:
 * 1. Alle Projekte aus der Tabelle "Project" selektiert
 * 2. Über "ProjectRelation" mit Experten verknüpft (LEFT JOIN)
 * 3. Experteninformationen als JSON-Array aggregiert
 * 4. Nach dem letzten Update-Datum absteigend sortiert
 * 
 * @returns Ein Array von Projekt-Objekten, wobei jedes Projekt ein Feld `experts` 
 *          enthält, das ein Array von Experten mit `expert_id`, `name` und `role` ist.
 * 
 * @remarks
 * - Verwendet `COALESCE` und `FILTER` um leere Experten-Arrays als `[]` zurückzugeben
 * - `DISTINCT` verhindert Duplikate bei Mehrfachverknüpfungen
 * - Die Abfrage ist auf 50 Ergebnisse limitiert für Performance
 */
export async function getListOfSandboxProjects() {
  const result = await pool.query(
    `SELECT
      p.id,
      p.title,
      p.description,
      p."startDate" AS "startDate",
      p."endDate" AS "endDate",
      p.state,
      p."project_state" AS project_state,
      p.location,
      p."websiteUrl" AS websiteUrl,
      p.details,
      p."lastUpdate" AS lastUpdate,
      COALESCE(
        json_agg(DISTINCT jsonb_build_object(
          'expert_id', e.expert_id,
          'name', e.name,
          'role', pr.role
        )) FILTER (WHERE e.expert_id IS NOT NULL),
        '[]'
      ) AS experts
     FROM "Project" p
     LEFT JOIN "ProjectRelation" pr ON pr.project_id = p.id
     LEFT JOIN "Expert" e ON e.expert_id = pr.expert_id
     GROUP BY p.id
     ORDER BY p."lastUpdate" DESC
     LIMIT 50`
  );

  return result.rows;
}

/**
 * Handler für HTTP GET-Anfragen zum Abrufen der Sandbox-Projektliste.
 * 
 * Delegiert die Datenbankabfrage an `getListOfSandboxProjects()` und gibt
 * die Ergebnisse als JSON-Antwort zurück.
 * 
 * @returns Ein JSON-Antwortobjekt mit:
 *   - `success`: Boolean, ob die Anfrage erfolgreich war
 *   - `projects`: Array der Projekt-Objekte
 *   - `count`: Anzahl der zurückgegebenen Projekte
 * 
 * @throws Gibt bei Fehlern eine JSON-Antwort mit Status 500 zurück
 *         und enthält Fehlerdetails im `details`-Feld.
 * 
 * @example
 * // Beispielantwort bei Erfolg:
 * {
 *   "success": true,
 *   "projects": [
 *     {
 *       "id": 1,
 *       "title": "Beispielprojekt",
 *       "experts": [
 *         { "expert_id": 5, "name": "Max Mustermann", "role": "Lead" }
 *       ]
 *     }
 *   ],
 *   "count": 1
 * }
 */
export async function GET() {
  console.log("Listing sandbox projects from database");

  try {
    const results = await getListOfSandboxProjects();
    return NextResponse.json({
      success: true,
      projects: results,
      count: results.length,
    });
  } catch (error: any) {
    console.error("Error fetching sandbox projects:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch sandbox projects",
        details: error.message,
      },
      { status: 500 }
    );
  }
}