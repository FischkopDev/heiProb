import { NextResponse } from "next/server";
import pool from "../../../../lib/db";

/**
 * Holt eine Liste aller verfügbaren Challenges (Probleme) aus der Datenbank.
 * 
 * Diese Funktion führt eine SQL-Abfrage aus, die alle Einträge aus der Tabelle `"Problem"`
 * auswählt und nach Titel alphabetisch sortiert.
 * 
 * @returns Ein Array mit den Datenbankzeilen (Objekten), die die Challenges repräsentieren.
 *          Jede Zeile enthält mindestens die Spalten der `"Problem"`-Tabelle.
 *          Gibt ein leeres Array zurück, wenn keine Einträge vorhanden sind.
 * 
 * @throws {Error} Wirft einen Fehler, wenn die Datenbankverbindung fehlschlägt oder die Abfrage
 *                 syntaktisch ungültig ist. Der Fehler wird nicht abgefangen und muss vom
 *                 Aufrufer (z.B. dem API-Handler) behandelt werden.
 * 
 * @example
 * const challenges = await getListOfChallenges();
 * console.log(`Found ${challenges.length} challenges.`);
 * console.log(challenges[0]?.title); // Titel des ersten Challenges
 */
export async function getListOfChallenges(): Promise<any[]> {
  const result = await pool.query(
    `SELECT * FROM "Problem"
     ORDER BY title ASC
     LIMIT 50`
  );
  return result.rows;
}

/**
 * HTTP GET-Handler zum Abrufen der Liste aller Challenges.
 * 
 * Dieser Endpunkt ruft die Funktion `getListOfChallenges` auf und gibt die Ergebnisse
 * als JSON-Objekt zurück. Er enthält Metadaten über den Erfolg und die Anzahl der Ergebnisse.
 * 
 * @returns Ein `NextResponse`-Objekt mit folgendem Inhalt:
 *          - **200 OK**: Bei Erfolg.
 *            ```json
 *            {
 *              "success": true,
 *              "challenges": [ /* Array von Challenge-Objekten *\/ ],
 *              "count": 50 /* Anzahl der zurückgegebenen Einträge *\/
 *            }
 *            ```
 *          - **500 Internal Server Error**: Bei Datenbankfehlern oder unerwarteten Ausnahmen.
 *            ```json
 *            {
 *              "error": "Failed to fetch challenges",
 *              "details": "Fehlermeldung der Datenbank"
 *            }
 *            ```
 * 
 * 
 * @example
 * // Beispiel für einen erfolgreichen Request
 * const response = await fetch('/api/challenges');
 * const data = await response.json();
 * console.log(data.challenges); // Array der Challenges
 * console.log(data.count); // Anzahl der Ergebnisse
 */
export async function GET() {
  console.log("Listing all challenges in database");

  try {
    const results = await getListOfChallenges();
    return NextResponse.json({
      success: true,
      challenges: results,
      count: results.length,
    });
  } catch (error: any) {
    console.error("Error fetching challenges:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch challenges",
        details: error.message,
      },
      { status: 500 }
    );
  }
}