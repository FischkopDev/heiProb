import { GET } from './route'; 
import { POST } from '../add/route';
import pool from "../../../../lib/db";
import { test, expect } from 'vitest';

// Hilfsfunktion für Requests
const createRequest = (obj: any) => new Request('http://localhost/api/challenges/add', {
  method: 'POST',
  body: JSON.stringify(obj)
});


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