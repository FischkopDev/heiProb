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

describe("PATCH /api/users/update (Update Expert)", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

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