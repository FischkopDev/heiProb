/**
 * @module ChallengeListGetUnitTests
 * @description Unit-Tests für das Abrufen aller Challenges (`GET /api/challenges/list`).
 * Testet das Zusammenspiel zwischen dem Erstellen neuer Daten und der darauffolgenden
 * Auflistung über die API.
 */

import { GET } from './route'; 
import { POST } from '../add/route';
import pool from "../../../../lib/db";
import { test, expect } from 'vitest';

/**
 * Erstellt ein Mock-`Request`-Objekt für den `POST`-Endpunkt zum Anlegen einer Challenge.
 *
 * @param obj - Das Objekt mit den Challenge-Daten, das im JSON-Body gesendet werden soll.
 * @returns Ein konfiguriertes `Request`-Objekt mit der Methode `POST` und dem übergebenen Body.
 */
const createRequest = (obj: any) => new Request('http://localhost/api/challenges/add', {
  method: 'POST',
  body: JSON.stringify(obj)
});

/**
 * @test DB: Challenge auflisten
 * @description Testet das Auslesen von Challenges über die GET-Route:
 * 1. Legt über den `POST`-Endpunkt eine neue Challenge als Testdatensatz an.
 * 2. Sendet einen `GET`-Request, um die Liste aller Challenges abzurufen.
 * 3. Bricht mit detaillierter Fehlermeldung ab, falls der Statuscode ungleich `200` ist.
 * 4. Prüft, ob der zuvor erstellte Testeintrag in der Liste enthalten ist.
 * 5. Führt anschließend ein Cleanup (Löschen der Testdaten aus der Datenbank) durch.
 */
test("DB: Challenge auflisten", async () => {
  const testData = {
    title: "DB-Integrationstest",
    category: "Test-Kategorie",
    state: "open",
    description: "Dieser Eintrag wird nach dem Test gelöscht"
  };

  await POST(createRequest(testData));
  const response = await GET();
  
  // Sicherstellen, dass die GET-Route nicht mit einem 500er Fehler abgebrochen ist
  if (response.status !== 200) {
    const errorData = await response.json();
    expect.fail(`API-Fehler (${response.status}): ${errorData.error} - ${errorData.details}`);
  }

  const data = await response.json();

  const istEintragVorhanden = data.challenges?.some(
    (challenge: any) => challenge.title == testData.title
  );

  expect(istEintragVorhanden).toBe(true);

  // 3. Cleanup: Testdaten wieder löschen
  await pool.query('DELETE FROM "Problem" WHERE title = $1', [testData.title]);

});