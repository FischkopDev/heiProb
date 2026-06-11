import { GET } from './route';
import pool from '../../../../lib/db';
import { test, expect } from 'vitest';

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
