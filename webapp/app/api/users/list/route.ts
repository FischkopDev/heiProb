import { NextResponse } from "next/server";
import pool from "../../../../lib/db";

/**
 * Ruft eine Liste von Experten aus der Datenbank ab, jeweils ergänzt um ihre zugehörige Organisation und Expertisefelder.
 * 
 * Diese Funktion führt JOINs zwischen den Tabellen `"Expert"`, `"Organization"` und `"ExpertField"` durch,
 * um die Organisationsdaten und Expertisefelder als verschachtelte JSON-Objekte zurückzugeben.
 * 
 * @returns Ein Array von Objekten, wobei jedes Objekt alle Felder des Experten (`e.*`) 
 *          sowie folgende Felder enthält:
 *          - `organization`: JSON-Objekt mit Organisations-Daten (organization_id, name, location, field, description)
 *          - `expertFields`: JSON-Array der Expertisefelder des Experten
 * 
 * @remarks
 * - Die Ergebnisse sind alphabetisch nach dem Vornamen (`e.name`) sortiert.
 * - Die Abfrage ist auf maximal 50 Ergebnisse begrenzt (`LIMIT 50`).
 * - Nur Experten mit einer gültigen Zuordnung zu einer Organisation werden zurückgegeben (INNER JOIN).
 * - Expertisefelder werden mittels LEFT JOIN und Aggregation geladen, Experten ohne Felder erhalten ein leeres Array.
 */
export async function getListOfPeopleWithOrganization() {
  const result = await pool.query(
    `SELECT
       e.*,
       e.number AS phone,
       jsonb_build_object(
         'organization_id', o.organization_id,
         'name', o.name,
         'location', o.location,
         'field', o.field,
         'description', o.description
       ) AS organization,
       COALESCE(jsonb_agg(DISTINCT ef.field) FILTER (WHERE ef.field IS NOT NULL), '[]'::jsonb) AS "expertFields"
     FROM "Expert" e
     JOIN "Organization" o ON e.primary_organization_id = o.organization_id
     LEFT JOIN "ExpertField" ef ON e.expert_id = ef.expert_id
     GROUP BY e.expert_id, e.name, e.prename, e.title, e.email, e.number, e.description, e.location, 
              e.last_contact, e.economic, e.science, e.social, e.primary_organization_id,
              o.organization_id, o.name, o.location, o.field, o.description
     ORDER BY e.name ASC
     LIMIT 50`
  );
  return result.rows;
}

/**
 * Handler für HTTP GET-Anfragen zum Abrufen der Liste aller Personen mit Organisationsdaten und Expertisefeldern.
 * 
 * Delegiert die Datenbankabfrage an `getListOfPeopleWithOrganization()` und formatiert 
 * die Antwort als JSON mit Erfolgsmeldung, Ergebnisliste und Gesamtanzahl.
 * 
 * @returns Ein JSON-Antwortobjekt mit:
 *   - `success`: Boolean, ob die Anfrage erfolgreich war
 *   - `experts`: Array der Experten-Objekte (inkl. Organisations- und Expertisefelder-Daten)
 *   - `count`: Anzahl der zurückgegebenen Experten
 * 
 * @throws Gibt bei Fehlern eine JSON-Antwort mit Status 500 zurück
 *         und enthält Fehlerdetails im `details`-Feld.
 * 
 * @example
 * // Beispielantwort:
 * {
 *   "success": true,
 *   "experts": [
 *     {
 *       "expert_id": 1,
 *       "name": "Anna",
 *       "prename": "Schmidt",
 *       "organization": {
 *         "organization_id": 5,
 *         "name": "TechCorp",
 *         "location": "Berlin",
 *         "field": "IT",
 *         "description": "Ein Technologieunternehmen"
 *       },
 *       "expertFields": ["Künstliche Intelligenz", "Machine Learning", "Data Science"]
 *     }
 *   ],
 *   "count": 1
 * }
 */
export async function GET() {
  console.log("Listing all people in database");

  try {
    const results = await getListOfPeopleWithOrganization();
    return NextResponse.json({
      success: true,
      experts: results,
      count: results.length,
    });
  } catch (error: any) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch users",
        details: error.message,
      },
      { status: 500 }
    );
  }
}