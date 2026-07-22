/**
 * @module ChallengeDeleteUnitTests
 * @description Unit-Tests für die Löschlogik von Challenges.
 * Testet sowohl die direkte Datenbank-Funktion `deleteChallenge` als auch den 
 * HTTP-Endpunkt (`DELETE /api/challenges/delete`).
 */

import { expect, test } from 'vitest';
import { deleteChallenge, DELETE } from './route';
import pool from '../../../../lib/db';

/**
 * @test Delete Challenge from Database
 * @description Überprüft die isolierte DB-Funktion `deleteChallenge`:
 * 1. Erstellt einen temporären Test-Eintrag direkt in der Tabelle `Problem`.
 * 2. Ruft `deleteChallenge` mit der neuen ID auf und erwartet `true`.
 * 3. Bestätigt per SQL-Query, dass die Challenge tatsächlich gelöscht wurde.
 */
test('Delete Challenge from Database', async () => {
  const insertResult = await pool.query(
    `INSERT INTO "Problem" (title, category, state, description)
     VALUES ($1, $2, $3, $4) RETURNING problem_id`,
    ['Test Challenge', 'Test Category', 'open', 'Test description']
  );

  const challengeId = insertResult.rows[0].problem_id;
  const deleted = await deleteChallenge(challengeId);

  expect(deleted).toBe(true);

  const verifyResult = await pool.query(
    `SELECT problem_id FROM "Problem" WHERE problem_id = $1`,
    [challengeId]
  );
  expect(verifyResult.rows.length).toBe(0);
});

/**
 * @test DELETE handler returns 200 on successful deletion
 * @description Testet den vollständigen API-Löschvorgang über die Route:
 * 1. Legt ein Test-Problem in der DB an.
 * 2. Sendet einen `DELETE`-Request mit der `challenge_id` im JSON-Body.
 * 3. Prüft den Statuscode `200 OK` und die Erfolgsmeldung im Response-Body.
 * 4. Stellt sicher, dass der Eintrag aus der Datenbank entfernt wurde.
 */
test('DELETE handler returns 200 on successful deletion', async () => {
  const insertResult = await pool.query(
    `INSERT INTO "Problem" (title, category, state, description)
     VALUES ($1, $2, $3, $4) RETURNING problem_id`,
    ['Test Challenge Route', 'Route Category', 'open', 'Route description']
  );

  const challengeId = insertResult.rows[0].problem_id;
  const request = new Request('http://localhost/api/challenges/delete', {
    method: 'DELETE',
    body: JSON.stringify({ challenge_id: challengeId }),
    headers: { 'Content-Type': 'application/json' },
  });

  const response = await DELETE(request);
  const body = await response.json();

  expect(response.status).toBe(200);
  expect(body.success).toBe(true);
  expect(body.message).toContain(String(challengeId));

  const verifyResult = await pool.query(
    `SELECT problem_id FROM "Problem" WHERE problem_id = $1`,
    [challengeId]
  );
  expect(verifyResult.rows.length).toBe(0);
});

/**
 * @test deleteChallenge returns false when challenge does not exist
 * @description Testet das Verhalten der Funktion `deleteChallenge` bei einer nicht-existenten ID:
 * - Übergibt eine extrem hohe ID (z. B. `999999999`).
 * - Erwartet den Rückgabewert `false`.
 */
test('deleteChallenge returns false when challenge does not exist', async () => {
  const deleted = await deleteChallenge(999999999);
  expect(deleted).toBe(false);
});

/**
 * @test DELETE handler returns 400 when challenge_id is missing
 * @description Verifiziert die Validierung des Request-Bodys der API:
 * 1. Sendet einen `DELETE`-Request mit leerem JSON-Body.
 * 2. Erwartet Statuscode `400 Bad Request` und die entsprechende Fehlermeldung.
 */
test('DELETE handler returns 400 when challenge_id is missing', async () => {
  const request = new Request('http://localhost/api/challenges/delete', {
    method: 'DELETE',
    body: JSON.stringify({}),
    headers: { 'Content-Type': 'application/json' },
  });

  const response = await DELETE(request);
  const body = await response.json();

  expect(response.status).toBe(400);
  expect(body.error).toBe('Challenge ist nicht vorhanden');
});

/**
 * @test DELETE handler returns 404 when challenge cannot be found
 * @description Verifiziert die Fehlerbehandlung der Route bei unbekannten Datensätzen:
 * 1. Sendet einen `DELETE`-Request für eine nicht vorhandene ID.
 * 2. Erwartet Statuscode `404 Not Found` und eine passende Fehlermeldung im Body.
 */
test('DELETE handler returns 404 when challenge cannot be found', async () => {
  const request = new Request('http://localhost/api/challenges/delete', {
    method: 'DELETE',
    body: JSON.stringify({ challenge_id: 999999999 }),
    headers: { 'Content-Type': 'application/json' },
  });

  const response = await DELETE(request);
  const body = await response.json();

  expect(response.status).toBe(404);
  expect(body.error).toContain('nicht gefunden');
});