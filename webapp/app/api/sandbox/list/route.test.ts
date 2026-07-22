/**
 * @module SandboxListUnitTests
 * @description Unit-Tests für das Abrufen aller Sandbox-Projekte (`GET /api/sandbox/list`).
 * Stellt sicher, dass in der Datenbank befindliche Projekte korrekt über den Endpunkt gelistet werden.
 */

import { GET } from './route';
import pool from '../../../../lib/db';
import { test, expect } from 'vitest';

/**
 * Standard-Testdatensatz für die Erstellung eines temporären Sandbox-Projekts in der Datenbank.
 */
const testData = {
  title: 'DB-Sandbox-List-Test',
  description: 'Integrationstest für das Sandbox List API',
  startDate: '2026-05-27',
  endDate: '2026-06-27',
  state: 'Test-Phase',
  project_state: 'Reallabor-Phase',
  location: 'Heidelberg',
  websiteUrl: 'https://example.com/sandbox',
  details: 'Testprojekt für Sandbox-List API',
};

/**
 * @test DB: Sandbox list returns projects from database
 * @description Verifiziert, dass der `GET`-Endpunkt vorhandene Sandbox-Projekte aus der Datenbank ausliest:
 * 1. Fügt ein temporäres Test-Projekt direkt via SQL `INSERT` in die Tabelle `Project` ein.
 * 2. Sendet einen `GET`-Request an den API-Endpunkt.
 * 3. Prüft den Statuscode `200 OK`, das `success`-Flag sowie die Struktur des Arrays `projects`.
 * 4. Stellt sicher, dass das erstelle Test-Projekt im Antwort-Array anhand des Titels auffindbar ist.
 * 5. Führt im `finally`-Block zuverlässig ein Cleanup durch, um das Test-Projekt wieder zu löschen.
 */
test('DB: Sandbox list returns projects from database', async () => {
  const insertResult = await pool.query(
    `INSERT INTO "Project" (title, description, "startDate", "endDate", state, "project_state", location, "websiteUrl", details, "lastUpdate")
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
     RETURNING id`,
    [
      testData.title,
      testData.description,
      new Date(testData.startDate),
      new Date(testData.endDate),
      testData.state,
      testData.project_state,
      testData.location,
      testData.websiteUrl,
      testData.details,
      new Date(),
    ]
  );

  const projectId = insertResult.rows[0].id;

  try {
    const response = await GET();
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.success).toBe(true);
    expect(Array.isArray(body.projects)).toBe(true);
    expect(body.count).toBeGreaterThanOrEqual(1);
    expect(body.projects.some((project: any) => project.title === testData.title)).toBe(true);
  } finally {
    await pool.query('DELETE FROM "Project" WHERE id = $1', [projectId]);
  }
});