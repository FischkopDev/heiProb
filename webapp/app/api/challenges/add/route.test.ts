import { POST } from './route'; // Pfad anpassen
import pool from "../../../../lib/db";
import { test, expect } from 'vitest';

// Hilfsfunktion für Requests
const createRequest = (obj: any) => new Request('http://localhost/api/challenges/list', {
  method: 'POST',
  body: JSON.stringify(obj)
});

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

test("DB: Fehler bei fehlenden Pflichtfeldern", async () => {
  const invalidData = { title: "Fehlende Felder" }; // category/status fehlen

  const response = await POST(createRequest(invalidData));
  const body = await response.json();

  expect(response.status).toBe(400);
  expect(body.error).toBe("Missing required fields");
});

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