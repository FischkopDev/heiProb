/**
 * @module addChallengesTests
 * @description Unittest für die Challenge-API (`POST /api/challenges/list`) 
 * sowie direkte Datenbankoperationen auf der Tabelle `Problem`.
 */

import { POST } from './route'; // Pfad anpassen
import pool from "../../../../lib/db";
import { test, expect } from 'vitest';

/**
 * Erstellt ein Mock-`Request`-Objekt für den API-Aufruf.
 *
 * @param obj - Das Datenobjekt, das im JSON-Body des Requests übertragen werden soll.
 * @returns Ein konfiguriertes `Request`-Objekt mit der Methode `POST` und dem übergebenen Body.
 */
const createRequest = (obj: any) => new Request('http://localhost/api/challenges/list', {
  method: 'POST',
  body: JSON.stringify(obj)
});

/**
 * @test DB: Challenge erfolgreich anlegen und prüfen
 * @description Testet den vollständigen Zyklus (End-to-End) zum Anlegen einer neuen Challenge:
 * 1. Sendet einen gültigen POST-Request an die Route.
 * 2. Verifiziert die HTTP-Antwort (`200 OK`, `success: true`).
 * 3. Prüft per SQL-Query, ob der Eintrag korrekt in der DB-Tabelle `Problem` abgelegt wurde.
 * 4. Führt anschließend ein Cleanup (Löschen der Testdaten) durch.
 */
test("DB: Challenge erfolgreich anlegen und prüfen", async () => {
  const testData = {
    title: "DB-Integrationstest",
    category: "Test-Kategorie",
    state: "open",
    summary: "Dieser Eintrag wird nach dem Test gelöscht"
  };

  // 1. POST ausführen
  const response = await POST(createRequest(testData));
  const body = await response.json();

  expect(response.status).toBe(200);
  expect(body.success).toBe(true);

  // 2. In der DB prüfen, ob der Eintrag existiert
  const dbCheck = await pool.query(
    'SELECT * FROM "Problem" WHERE title = $1',
    [testData.title]
  );

  expect(dbCheck.rows.length).toBeGreaterThan(0);
  expect(dbCheck.rows[0].category).toBe(testData.category);

  // 3. Cleanup: Testdaten wieder löschen
  await pool.query('DELETE FROM "Problem" WHERE title = $1', [testData.title]);
});

/**
 * @test DB: Fehler bei fehlenden Pflichtfeldern
 * @description Verifiziert das Fehlerverhalten des Endpunkts, wenn unvollständige Daten gesendet werden:
 * 1. Sendet einen Request ohne Pflichtfelder (Kategorie, Status).
 * 2. Erwartet den HTTP-Statuscode `400 Bad Request`.
 * 3. Prüft die korrekte Fehlermeldung im Antwort-Body.
 */
test("DB: Fehler bei fehlenden Pflichtfeldern", async () => {
  const invalidData = { title: "Fehlende Felder" }; // category/status fehlen

  const response = await POST(createRequest(invalidData));
  const body = await response.json();

  expect(response.status).toBe(400);
  expect(body.error).toBe("Missing required fields");
});

/**
 * @test DB: addChallenge gibt eine gültige ID zurück
 * @description Testet direkte Datenbank-Interaktionen ohne API-Layer:
 * 1. Führt ein direktes `INSERT` in die Tabelle `Problem` aus und fordert die `problem_id` an (`RETURNING`).
 * 2. Überprüft, ob die generierte ID ein positiver numerischer Wert ist.
 * 3. Führt anschließend ein Cleanup über die generierte ID durch.
 */
test("DB: addChallenge gibt eine gültige ID zurück", async () => {
  // Hier testen wir nur die interne Logik direkt auf der DB
  const res = await pool.query(
    `INSERT INTO "Problem" (title, category, state) 
     VALUES ('ID-Test', 'Test', 'open') RETURNING problem_id`
  );
  
  const id = res.rows[0].problem_id;
  expect(typeof id).toBe('number');
  expect(id).toBeGreaterThan(0);

  // Cleanup
  await pool.query('DELETE FROM "Problem" WHERE problem_id = $1', [id]);
});