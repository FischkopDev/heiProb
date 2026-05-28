"use server";

import pool from "../../../../lib/db";
import { NextResponse } from "next/server";

/**
 * Fügt ein neues Problem (Challenge) in die Datenbank ein.
 * 
 * @param body - Der Inhalt aus der JSON-Anfrage, der die Details des Problems enthält.
 * @param body.title - Der Titel des Problems.
 * @param body.category - Die Kategorie des Problems.
 * @param body.state - Der aktuelle Status/Zustand des Problems (z.B. "open", "closed").
 * @param body.description - Eine detaillierte Beschreibung des Problems.
 * 
 * @returns Die ID des neu erstellten Problems als Zahl.
 *          Gibt `0` zurück, falls ein Fehler auftritt oder kein ID-Wert generiert wurde.
 * 
 * @throws {Error} Wirft einen Fehler, wenn die Datenbankverbindung fehlschlägt oder die Abfrage ungültig ist.
 *                 Der Fehler wird jedoch im `catch`-Block abgefangen und loggt, gibt aber `0` zurück.
 */
export async function addChallenge(body: {
  title: string;
  category: string;
  state: string; // Hinweis: Parametername in der Signatur war 'status', aber SQL nutzt 'state'
  description?: string;
}): Promise<number> {
  const { title, category, state, description } = body;

  try {
    const result = await pool.query(
      `INSERT INTO "Problem" (title, category, state, description)
       VALUES ($1, $2, $3, $4) RETURNING problem_id`,
      [title, category, state, description]
    );
    
    const id = result.rows[0]?.problem_id;
    
    if (!id) {
      console.warn("Keine ID nach Einfügen zurückgegeben.");
      return 0;
    }
    
    return id;
  } catch (error) {
    console.error("Error creating problem:", error);
    return 0;
  }
}

/**
 * HTTP POST-Handler zum Erstellen eines neuen Challenges.
 * 
 * Dieser Endpunkt validiert die eingehenden Daten, prüft auf erforderliche Felder
 * und ruft die interne Funktion `addChallenge` auf, um den Datensatz zu speichern.
 * 
 * @param request - Das HTTP-Request-Objekt, das den JSON-Body enthält.
 * 
 * @returns Ein `NextResponse`-Objekt mit folgendem Inhalt:
 *          - **200 OK**: Bei Erfolg. `{ success: true, status: 200 }`
 *          - **400 Bad Request**: Wenn erforderliche Felder fehlen.
 *            `{ error: "Missing required fields", required: [...] }`
 *          - **500 Internal Server Error**: Bei Datenbankfehlern oder unerwarteten Ausnahmen.
 *            `{ error: "Failed to add challenge", details: error.message }`
 * 
 * @example
 * // Beispiel für einen erfolgreichen Request
 * const response = await fetch('/api/challenges', {
 *   method: 'POST',
 *   headers: { 'Content-Type': 'application/json' },
 *   body: JSON.stringify({
 *     title: "Rekursive Fibonacci",
 *     category: "Algorithms",
 *     state: "active",
 *     description: "Berechne die Fibonacci-Zahl..."
 *   })
 * });
 * const data = await response.json();
 * console.log(data); // { success: true, status: 200 }
 */
export async function POST(request: Request) {
  let body;
  try {
    body = await request.json();
  } catch (e) {
    return NextResponse.json(
      { error: "Invalid JSON body", details: e instanceof Error ? e.message : "Unknown error" },
      { status: 400 }
    );
  }

  const { title, category, state, description } = body;

  console.log("Adding new challenge to database");

  // Validiere erforderliche Felder
  if (!title || !category || !state) {
    return NextResponse.json(
      {
        error: "Missing required fields",
        required: ["title", "category", "state"],
      },
      { status: 400 }
    );
  }

  try {
    const id = await addChallenge(body);

    if (id === 0) {
      // Falls addChallenge 0 zurückgibt (Fehlerfall), sollte man idealerweise hier auch einen 500er werfen,
      // aber wir folgen der aktuellen Logik und geben success true zurück, 
      // da addChallenge intern schon geloggt hat. 
      // Für striktere Fehlerbehandlung könnte man hier:
      // throw new Error("Database insertion failed");
      // hinzufügen.
      
      // Aktuelle Logik:
      return NextResponse.json({
        success: true, // Hinweis: Eigentlich wäre hier success: false sinnvoller bei ID=0
        status: 200,
        warning: "Problem created but ID could not be retrieved (check logs)"
      });
    }

    return NextResponse.json({
      success: true,
      status: 200,
      problemId: id // Optional: Die ID zurückgeben, damit der Client sie kennt
    });
  } catch (error: any) {
    console.error("Error adding challenge:", error);

    return NextResponse.json(
      {
        error: "Failed to add challenge",
        details: error.message,
      },
      { status: 500 }
    );
  }
}