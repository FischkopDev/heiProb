import { expect, test } from 'vitest';
import { deleteChallenge, DELETE } from './route';
import pool from '../../../../lib/db';

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

test('deleteChallenge returns false when challenge does not exist', async () => {
  const deleted = await deleteChallenge(999999999);
  expect(deleted).toBe(false);
});

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
