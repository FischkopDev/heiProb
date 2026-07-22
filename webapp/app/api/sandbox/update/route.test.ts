/**
 * @module SandboxUpdateUnitTests
 * @description Unit-Tests für das Aktualisieren von Sandbox-Projekten (`PATCH /api/sandbox/update`).
 * Überprüft die Datenvalidierung sowie die korrekte Modifikation bestehender Einträge in der Tabelle `Project`.
 */

import { PATCH } from "./route";
import pool from "../../../../lib/db";
import { test, expect } from "vitest";

/**
 * Erstellt ein Mock-`Request`-Objekt für den `PATCH`-Endpunkt zum Aktualisieren eines Sandbox-Projekts.
 *
 * @param obj - Das Objekt mit den zu aktualisierenden Projektdaten (inkl. `project_id`), das im JSON-Body gesendet werden soll.
 * @returns Ein konfiguriertes `Request`-Objekt mit Methode `PATCH`, JSON-Headers und dem übergebenen Body.
 */
const createRequest = (obj: any) =>
  new Request("http://localhost/api/sandbox/update", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });

/**
 * @test DB: Sandbox-Projekt erfolgreich updaten und prüfen
 * @description Testet den vollständigen Update-Prozess eines Sandbox-Projekts:
 * 1. Legt ein initiales Test-Projekt direkt via SQL `INSERT` in der Tabelle `Project` an.
 * 2. Sendet einen `PATCH`-Request mit modifizierten Feldern (`title`, `state`, `location`) an den Endpunkt.
 * 3. Überprüft den HTTP-Status `200 OK`, das `success`-Flag sowie die korrekt zurückgegebene `projectId`.
 * 4. Verifiziert per Datenbank-Abfrage, ob die Werte in der Datenbank tatsächlich aktualisiert wurden.
 * 5. Führt ein Cleanup durch und löscht das Test-Projekt wieder aus der Datenbank.
 */
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

/**
 * @test DB: Fehler bei fehlender project_id
 * @description Verifiziert die Validierung des Request-Bodys bei Update-Anfragen:
 * 1. Sendet einen `PATCH`-Request ohne die erforderliche `project_id`.
 * 2. Erwartet den HTTP-Statuscode `400 Bad Request`.
 * 3. Prüft, ob die genaue Fehlermeldung `"project_id is required for updates"` im Response-Body enthalten ist.
 */
test("DB: Fehler bei fehlender project_id", async () => {
  const response = await PATCH(createRequest({ title: "Missing ID" }));
  const body = await response.json();

  expect(response.status).toBe(400);
  expect(body.error).toBe("project_id is required for updates");
});