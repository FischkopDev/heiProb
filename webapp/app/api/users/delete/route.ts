import { NextResponse } from "next/server";
import pool from "../../../../lib/db";

/**
 * Löscht einen Experten aus der Datenbank basierend auf der ID.
 * 
 * @param id - Die eindeutige ID des zu löschenden Experten (`expert_id`).
 * 
 * @returns `true`, wenn ein Datensatz erfolgreich gelöscht wurde.
 *          `false`, wenn kein Datensatz mit dieser ID existierte (und somit nichts gelöscht wurde).
 * 
 * @throws Wirft den ursprünglichen Datenbankfehler, falls die Abfrage technisch fehlschlägt 
 *         (z.B. Verbindungsfehler, Syntaxfehler), damit der Aufrufer dies behandeln kann.
 * 
 * @remarks
 * - Die Abfrage nutzt `RETURNING expert_id`, um zu prüfen, ob tatsächlich eine Zeile betroffen war.
 * - Ein `false`-Rückgabewert bedeutet nicht zwangsläufig einen Fehler, sondern dass die ID nicht existierte.
 */
export async function deleteExpert(id: number): Promise<boolean> {
  console.log(`Deleting expert with ID: ${id}`);

  try {
    await pool.query('BEGIN');

    // Entfernen aller Projektbeziehungen für diesen Experten
    await pool.query(`DELETE FROM "ProjectRelation" WHERE expert_id = $1`, [id]);

    // Entfernen aller Expertisefelder für diesen Experten
    await pool.query(`DELETE FROM "ExpertField" WHERE expert_id = $1`, [id]);

    // Jetzt der eigentliche Löschvorgang des Experten
    const result = await pool.query(
      `DELETE FROM "Expert" WHERE expert_id = $1 RETURNING expert_id`,
      [id]
    );

    await pool.query('COMMIT');

    // Wenn Zeilen gelöscht wurden, war es erfolgreich
    return result.rows.length > 0;
  } catch (error) {
    console.error("Error deleting expert from database:", error);
    try {
      await pool.query('ROLLBACK');
    } catch (rbErr) {
      console.error('Error rolling back transaction:', rbErr);
    }
    throw error; // Fehler weiterwerfen für den Handler
  }
}

/**
 * Handler für HTTP DELETE-Anfragen zum Entfernen eines Experten.
 * 
 * Extrahiert die `expert_id` aus dem Request-Body, validiert sie und ruft 
 * die Löschfunktion auf. Unterscheidet zwischen fehlender ID, nicht existierendem 
 * Experten und technischen Fehlern.
 * 
 * @param request - Die eingehende HTTP-Anfrage.
 * @returns Ein JSON-Antwortobjekt:
 *   - `200`: Erfolg mit Bestätigungsmeldung.
 *   - `400`: Fehlende oder ungültige `expert_id` im Body.
 *   - `404`: Kein Experte mit der angegebenen ID gefunden.
 *   - `500`: Interner Serverfehler bei der Datenbankabfrage.
 * 
 * @example
 * // Erwarteter Request-Body:
 * { "expert_id": 123 }
 * 
 * @remarks
 * - Die Validierungsmeldungen sind teilweise auf Deutsch ("User ist nicht vorhanden"), 
 *   während die Erfolgsnachrichten auf Englisch sind. Für Konsistenz könnte man die 
 *   Sprache vereinheitlichen.
 */
export async function DELETE(request: Request) {
  try {
    const body = await request.json();
    const { expert_id } = body;

    // Validierung: Wurde eine ID mitgegeben?
    if (!expert_id) {
      return NextResponse.json(
        { error: "User ist nicht vorhanden" },
        { status: 400 }
      );
    }

    const isDeleted = await deleteExpert(expert_id);

    // Falls die ID in der DB nicht existiert
    if (!isDeleted) {
      return NextResponse.json(
        { error: `Expert with ID ${expert_id} nicht gefunden` },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Expert with ID ${expert_id} successfully deleted`
    });

  } catch (error: any) {
    console.error("Error in DELETE handler:", error);
    return NextResponse.json(
      { error: "Failed to delete expert", details: error.message },
      { status: 500 }
    );
  }
}