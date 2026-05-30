import { NextResponse } from "next/server";
import pool from "../../../../lib/db";

/**
 * Ruft eine Liste von Experten aus der Datenbank ab, jeweils ergänzt um ihre zugehörige Organisation.
 * 
 * Diese Funktion führt einen `JOIN` zwischen der Tabelle `"Expert"` und `"Organization"` durch,
 * um die Organisationsdaten als ein verschachteltes JSON-Objekt (`organization`) zurückzugeben.
 * 
 * @returns Ein Array von Objekten, wobei jedes Objekt alle Felder des Experten (`e.*`) 
 *          sowie ein Feld `organization` enthält, das die folgenden Informationen umfasst:
 *          - `organization_id`: Die ID der Organisation
 *          - `name`: Name der Organisation
 *          - `location`: Standort der Organisation
 *          - `field`: Tätigkeitsfeld
 *          - `description`: Beschreibung der Organisation
 * 
 * @remarks
 * - Die Ergebnisse sind alphabetisch nach dem Vornamen (`e.name`) sortiert.
 * - Die Abfrage ist auf maximal 50 Ergebnisse begrenzt (`LIMIT 50`).
 * - Nur Experten mit einer gültigen Zuordnung zu einer Organisation werden zurückgegeben (INNER JOIN).
 *   Experten ohne Organisation erscheinen nicht in dieser Liste.
 */
export async function getListOfPeopleWithOrganization() {
  const result = await pool.query(
    `SELECT
       e.*,
       jsonb_build_object(
         'organization_id', o.organization_id,
         'name', o.name,
         'location', o.location,
         'field', o.field,
         'description', o.description
       ) AS organization
     FROM "Expert" e
     JOIN "Organization" o ON e.primary_organization_id = o.organization_id
     ORDER BY e.name ASC
     LIMIT 50`
  );
  return result.rows;
}

/**
 * Handler für HTTP GET-Anfragen zum Abrufen der Liste aller Personen mit Organisationsdaten.
 * 
 * Delegiert die Datenbankabfrage an `getListOfPeopleWithOrganization()` und formatiert 
 * die Antwort als JSON mit Erfolgsmeldung, Ergebnisliste und Gesamtanzahl.
 * 
 * @returns Ein JSON-Antwortobjekt mit:
 *   - `success`: Boolean, ob die Anfrage erfolgreich war
 *   - `experts`: Array der Experten-Objekte (inkl. Organisationsdaten)
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
 *       }
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