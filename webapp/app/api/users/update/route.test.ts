/**
 * @module ExpertUpdateUnitTests
 * @description Unit-Tests für den Endpunkt zum Aktualisieren von Expertendaten (`PATCH /api/users/update`).
 * Nutzt Mocks für die Datenbank (`pool.query`), um das HTTP-Antwortverhalten (400, 200, 404, 500) 
 * isoliert von der physischen Datenbank zu überprüfen.
 */

import { describe, it, expect, vi, beforeEach } from "vitest";
import { PATCH } from "./route";
import pool from "../../../../lib/db";
import { NextResponse } from "next/server";

// Mock für das Datenbank-Modul
vi.mock("../../../../lib/db", () => ({
  default: {
    query: vi.fn(),
  },
}));

/**
 * @testsuite PATCH /api/users/update (Update Expert)
 * @description Test-Suite für die Validierungs-, Erfolgs- und Fehler-Szenarien der Experten-Update-Route.
 */
describe("PATCH /api/users/update (Update Expert)", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  /**
   * @test sollte 400 zurückgeben, wenn expert_id fehlt
   * @description Verifiziert die Validierung des Body-Inhalts:
   * 1. Sendet eine Anfrage ohne das Pflichtfeld `expert_id`.
   * 2. Erwartet den Statuscode `400 Bad Request`.
   * 3. Prüft, ob die genaue Fehlermeldung `"expert_id is required for updates"` zurückgegeben wird.
   */
  it("sollte 400 zurückgeben, wenn expert_id fehlt", async () => {
    const req = new Request("http://localhost/api/users/update", {
      method: "PATCH",
      body: JSON.stringify({ name: "Neuer Name" }),
    });

    const response = await PATCH(req);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toBe("expert_id is required for updates");
  });

  /**
   * @test sollte einen Experten erfolgreich updaten
   * @description Testet den Erfolgsfall (Happy Path) beim Aktualisieren eines Experten:
   * 1. Simuliert erfolgreiche DB-Abfragen für Organisations-Auflösung und SQL-UPDATE.
   * 2. Sendet valide Update-Daten für einen Experten.
   * 3. Bestätigt Status code `200 OK`, `success: true` und den geänderten Namen im Response-Body.
   * 4. Prüft, ob das generierte SQL UPDATE Statement und die Parameter korrekt an `pool.query` übergeben wurden.
   */
  it("sollte einen Experten erfolgreich updaten", async () => {
    const mockExpert = { expert_id: 1, name: "Mustermann", prename: "Max" };

    // Mock für getOrganizationIdByName (findet Organisation)
    // Wir simulieren hier die Aufrufe innerhalb der Route
    (pool.query as any)
      .mockResolvedValueOnce({ rows: [{ organization_id: 10 }] }) // getOrganizationIdByName
      .mockResolvedValueOnce({ rows: [mockExpert] }); // updateExpert Query

    const req = new Request("http://localhost/api/users/update", {
      method: "PATCH",
      body: JSON.stringify({
        expert_id: 1,
        name: "Mustermann",
        primary_organization: "Test Org",
      }),
    });

    const response = await PATCH(req);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
    expect(data.data.name).toBe("Mustermann");
    
    // Prüfen, dass pool.query mind. 2x aufgerufen wurde (Organization + Update)
    expect(pool.query).toHaveBeenCalledTimes(2);
    // Zweiter Call sollte das UPDATE Statement sein
    expect(pool.query).toHaveBeenNthCalledWith(
      2,
      expect.stringContaining('UPDATE "Expert"'),
      expect.arrayContaining(["Mustermann", 1])
    );
  });

  /**
   * @test sollte 404 zurückgeben, wenn der Experte nicht existiert
   * @description Prüft das Verhalten bei versuchter Aktualisierung eines nicht vorhandenen Datensatzes:
   * 1. Simuliert eine Datenbankantwort mit 0 betroffenen/zurückgegebenen Zeilen (`rows: []`).
   * 2. Sendet eine Update-Anfrage für eine unbekannte ID (`999`).
   * 3. Erwartet den HTTP-Statuscode `404 Not Found` und die Meldung `"Expert not found"`.
   */
  it("sollte 404 zurückgeben, wenn der Experte nicht existiert", async () => {
    // Erster Call für Organisation (null)
    // Zweiter Call für Update (leeres Array = nicht gefunden)
    (pool.query as any)
      .mockResolvedValueOnce({ rows: [] }) 
      .mockResolvedValueOnce({ rows: [] });

    const req = new Request("http://localhost/api/users/update", {
      method: "PATCH",
      body: JSON.stringify({ expert_id: 999, name: "Niemand" }),
    });

    const response = await PATCH(req);
    const data = await response.json();

    expect(response.status).toBe(404);
    expect(data.error).toBe("Expert not found");
  });

  /**
   * @test sollte 500 zurückgeben bei einem Datenbankfehler
   * @description Verifiziert die Ausnahmebehandlung bei internen Fehlern:
   * 1. Konfiguriert das DB-Mocking so, dass eine Exception (`mockRejectedValue`) geworfen wird.
   * 2. Erwartet Statuscode `500 Internal Server Error` und die Meldung `"Failed to update expert"`.
   */
  it("sollte 500 zurückgeben bei einem Datenbankfehler", async () => {
    (pool.query as any).mockReset();
    (pool.query as any).mockRejectedValue(new Error("DB Error"));

    const req = new Request("http://localhost/api/users/update", {
      method: "PATCH",
      body: JSON.stringify({ expert_id: 1 }),
    });

    const response = await PATCH(req);
    const data = await response.json();

    expect(response.status).toBe(500);
    expect(data.error).toBe("Failed to update expert");
  });
});