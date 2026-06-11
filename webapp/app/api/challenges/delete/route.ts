import { NextResponse } from "next/server";
import pool from "../../../../lib/db";

/**
 * Löscht ein Problem (Challenge) aus der Datenbank basierend auf seiner ID.
 * 
 * Diese Funktion führt einen SQL-DELETE-Befehl aus und überprüft, ob tatsächlich
 * eine Zeile betroffen war. Sie wirft einen Fehler, wenn die Datenbankabfrage
 * selbst fehlschlägt (z.B. Verbindungsproblem).
 * 
 * @param id - Die eindeutige ID des Problems (`problem_id`), das gelöscht werden soll.
 * 
 * @returns `true`, wenn ein Datensatz mit der angegebenen ID gefunden und gelöscht wurde.
 *          `false`, wenn kein Datensatz mit dieser ID existierte (aber keine Datenbankfehler auftraten).
 * 
 * @throws {Error} Wirft einen Fehler, wenn die Datenbankverbindung unterbrochen wird oder
 *                 die SQL-Abfrage syntaktisch/logisch fehlschlägt. Dieser Fehler muss vom
 *                 Aufrufer (z.B. dem API-Handler) abgefangen werden.
 * 
 * @example
 * const success = await deleteChallenge(123);
 * if (success) {
 *   console.log("Challenge gelöscht.");
 * } else {
 *   console.log("Challenge nicht gefunden.");
 * }
 */
export async function deleteChallenge(id: number): Promise<boolean> {
  console.log(`Deleting challenge with ID: ${id}`);

  try {
    const result = await pool.query(
      `DELETE FROM "Problem" WHERE problem_id = $1 RETURNING problem_id`,
      [id]
    );

    // Wenn Zeilen gelöscht wurden, war es erfolgreich
    return result.rows.length > 0;
  } catch (error) {
    console.error("Error deleting challenge from database:", error);
    throw error; // Fehler weiterwerfen für den Handler
  }
}

/**
 * HTTP DELETE-Handler zum Entfernen eines Challenges.
 * 
 * Dieser Endpunkt erwartet eine JSON mit der `challenge_id`.
 * Er validiert die Eingabe, ruft die Löschfunktion auf und gibt entsprechende
 * Statuscodes zurück (200, 400, 404, 500).
 * 
 * @param request - Das HTTP-Request-Objekt, das den JSON-Body mit der `challenge_id` enthalten muss.
 * 
 * @returns Ein `NextResponse`-Objekt mit folgendem Inhalt:
 *          - **200 OK**: Bei erfolgreicher Löschung.
 *            `{ success: true, message: "Challenge with ID X successfully deleted" }`
 *          - **400 Bad Request**: Wenn `challenge_id` fehlt oder ungültig ist.
 *            `{ error: "Challenge ist nicht vorhanden" }`
 *          - **404 Not Found**: Wenn die ID in der Datenbank nicht existiert.
 *            `{ error: "Challenge with ID X nicht gefunden" }`
 *          - **500 Internal Server Error**: Bei Datenbankfehlern oder unerwarteten Ausnahmen.
 *            `{ error: "Failed to delete challenge", details: error.message }`
 * 
 * @example
 * // Beispiel für einen erfolgreichen Request
 * const response = await fetch('/api/challenges', {
 *   method: 'DELETE',
 *   headers: { 'Content-Type': 'application/json' },
 *   body: JSON.stringify({ challenge_id: 123 })
 * });
 * const data = await response.json();
 * console.log(data); // { success: true, message: "Challenge with ID 123 successfully deleted" }
 */
export async function DELETE(request: Request) {
  try {
    const body = await request.json();
    const { challenge_id } = body;

    // Validierung: Wurde eine ID mitgegeben?
    if (!challenge_id) {
      return NextResponse.json(
        { error: "Challenge ist nicht vorhanden" },
        { status: 400 }
      );
    }

    const isDeleted = await deleteChallenge(challenge_id);

    // Falls die ID in der DB nicht existiert
    if (!isDeleted) {
      return NextResponse.json(
        { error: `Challenge with ID ${challenge_id} nicht gefunden` },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Challenge with ID ${challenge_id} successfully deleted`
    });

  } catch (error: any) {
    console.error("Error in DELETE handler:", error);
    return NextResponse.json(
      { error: "Failed to delete challenge", details: error.message },
      { status: 500 }
    );
  }
}