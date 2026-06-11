import { PATCH } from "./route";
import pool from "../../../../lib/db";
import { test, expect } from "vitest";

const createRequest = (obj: any) =>
  new Request("http://localhost/api/sandbox/update", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });

test("DB: Sandbox-Projekt erfolgreich updaten und prüfen", async () => {
  const initialData = {
    title: "DB-Sandbox-Update-Test",
    description: "Erstes Projekt für Update-Test",
    startDate: "2026-05-27",
    endDate: "2026-06-27",
    state: "planned",
    location: "Teststadt",
    websiteUrl: "https://example.com",
    details: "Initiale Testdetails",
  };

  const insertResult = await pool.query(
    `INSERT INTO "Project" (title, description, "startDate", "endDate", state, location, "websiteUrl", details, "lastUpdate")
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id`,
    [
      initialData.title,
      initialData.description,
      new Date(initialData.startDate),
      new Date(initialData.endDate),
      initialData.state,
      initialData.location,
      initialData.websiteUrl,
      initialData.details,
      new Date(),
    ]
  );

  const projectId = insertResult.rows[0].id;

  const response = await PATCH(
    createRequest({
      project_id: projectId,
      title: "DB-Sandbox-Update-Test-Changed",
      state: "completed",
      location: "Neue Teststadt",
    })
  );
  const body = await response.json();

  expect(response.status).toBe(200);
  expect(body.success).toBe(true);
  expect(body.projectId).toBe(projectId);

  const dbCheck = await pool.query(
    'SELECT * FROM "Project" WHERE id = $1',
    [projectId]
  );

  expect(dbCheck.rows.length).toBe(1);
  expect(dbCheck.rows[0].title).toBe("DB-Sandbox-Update-Test-Changed");
  expect(dbCheck.rows[0].state).toBe("completed");
  expect(dbCheck.rows[0].location).toBe("Neue Teststadt");

  await pool.query('DELETE FROM "Project" WHERE id = $1', [projectId]);
});

test("DB: Fehler bei fehlender project_id", async () => {
  const response = await PATCH(createRequest({ title: "Missing ID" }));
  const body = await response.json();

  expect(response.status).toBe(400);
  expect(body.error).toBe("project_id is required for updates");
});
