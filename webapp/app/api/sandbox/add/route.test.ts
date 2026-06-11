import { POST } from './route';
import pool from '../../../../lib/db';
import { test, expect } from 'vitest';

const createRequest = (obj: any) => new Request('http://localhost/api/sandbox/add', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(obj),
});

test('DB: Sandbox-Projekt erfolgreich anlegen und prüfen', async () => {
  const testData = {
    title: 'DB-Sandbox-Projekt-Test',
    description: 'Integrationstest für das Sandbox-Add API',
    startDate: '2026-05-27',
    endDate: '2026-06-27',
    state: 'planned',
    location: 'Teststadt',
    websiteUrl: 'https://example.com',
    details: 'Testdetails für das Projekt',
    members: [],
  };

  const response = await POST(createRequest(testData));
  const body = await response.json();

  expect(response.status).toBe(200);
  expect(body.success).toBe(true);
  expect(typeof body.projectId).toBe('number');
  expect(body.projectId).toBeGreaterThan(0);

  const dbCheck = await pool.query(
    'SELECT * FROM "Project" WHERE title = $1',
    [testData.title]
  );

  expect(dbCheck.rows.length).toBeGreaterThan(0);
  expect(dbCheck.rows[0].state).toBe(testData.state);
  expect(dbCheck.rows[0].location).toBe(testData.location);

  const projectId = dbCheck.rows[0].id;
  await pool.query('DELETE FROM "ProjectRelation" WHERE project_id = $1', [projectId]);
  await pool.query('DELETE FROM "Project" WHERE id = $1', [projectId]);
});

test('DB: Fehler bei fehlenden Pflichtfeldern', async () => {
  const invalidData = {
    title: 'Unvollständiges Projekt',
  };

  const response = await POST(createRequest(invalidData));
  const body = await response.json();

  expect(response.status).toBe(400);
  expect(body.error).toBe('Missing required fields');
});
