/**
 * @module ExpertListUnitTests
 * @description Unit-Tests für das Abrufen der Expertenliste (`GET /api/users/list`) 
 * sowie die zugehörige Helper-Funktion `getListOfPeopleWithOrganization`.
 * Nutzt Mocks für die Datenbank (`pool.query`), um HTTP-Antworten und Fehlerbehandlungen isoliert zu testen.
 */

import { describe, it, expect, vi, beforeEach } from "vitest";
import { GET, getListOfPeopleWithOrganization } from "./route";
import pool from "../../../../lib/db";

// Mock für das Datenbank-Modul
vi.mock("../../../../lib/db", () => ({
  default: {
    query: vi.fn(),
  },
}));

/**
 * @testsuite GET /api/users/list (Get Experts List)
 * @description Test-Suite für das Auslesen von Experten inklusive Organisationsdaten und Expertisefeldern.
 */
describe("GET /api/users/list (Get Experts List)", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  /**
   * @test getListOfPeopleWithOrganization führt das korrekte SQL-Query aus und liefert Zeilen zurück
   * @description Prüft die isolierte Ausführung der Helper-Funktion `getListOfPeopleWithOrganization`:
   * 1. Simuliert eine erfolgreiche Datenbankantwort mit formatierten Experten- und Organisationsdaten.
   * 2. Ruft `getListOfPeopleWithOrganization()` direkt auf.
   * 3. Verifiziert, dass `pool.query` mit der erwarteten SQL-Abfrage aufgerufen wurde und die Datensätze korrekt zurückgibt.
   */
  it("getListOfPeopleWithOrganization führt das korrekte SQL-Query aus und liefert Daten zurück", async () => {
    const mockData = [
      {
        expert_id: 1,
        name: "Schmidt",
        prename: "Anna",
        phone: "0123456789",
        organization: {
          organization_id: 5,
          name: "TechCorp",
          location: "Berlin",
          field: "IT",
          description: "Ein Technologieunternehmen",
        },
        expertFields: ["Künstliche Intelligenz", "Machine Learning"],
      },
    ];

    (pool.query as any).mockResolvedValueOnce({ rows: mockData });

    const result = await getListOfPeopleWithOrganization();

    expect(pool.query).toHaveBeenCalledTimes(1);
    expect(pool.query).toHaveBeenCalledWith(expect.stringContaining('FROM "Expert" e'));
    expect(result).toEqual(mockData);
  });

  /**
   * @test GET Handler gibt Status 200 und die Expertenliste bei Erfolg zurück
   * @description Testet den Erfolgsfall (Happy Path) des HTTP GET-Handlers:
   * 1. Simuliert eine erfolgreiche Rückgabe der Expertenliste aus der Datenbank.
   * 2. Ruft die `GET()`-Methode auf.
   * 3. Prüft den HTTP-Status `200 OK`, `success: true`, die Anzahl (`count`) sowie die Vollständigkeit der Daten im Response-Body.
   */
  it("GET Handler gibt Status 200 und die Expertenliste bei Erfolg zurück", async () => {
    const mockData = [
      {
        expert_id: 1,
        name: "Schmidt",
        prename: "Anna",
        organization: { name: "TechCorp" },
        expertFields: ["Data Science"],
      },
      {
        expert_id: 2,
        name: "Mustermann",
        prename: "Max",
        organization: { name: "Uni Heidelberg" },
        expertFields: [],
      },
    ];

    (pool.query as any).mockResolvedValueOnce({ rows: mockData });

    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
    expect(data.count).toBe(2);
    expect(data.experts).toEqual(mockData);
  });

  /**
   * @test GET Handler gibt Status 500 bei einem Datenbankfehler zurück
   * @description Verifiziert die Fehlerbehandlung der `GET()`-Route bei unerwarteten Datenbankausfällen:
   * 1. Konfiguriert den DB-Mock so, dass `pool.query` eine Exception wirft (`mockRejectedValueOnce`).
   * 2. Ruft die `GET()`-Methode auf.
   * 3. Erwartet HTTP-Status `500 Internal Server Error` sowie die Fehlermeldung `"Failed to fetch users"` und genaue Details im Response-Body.
   */
  it("GET Handler gibt Status 500 bei einem Datenbankfehler zurück", async () => {
    const errorMessage = "Database Connection Lost";
    (pool.query as any).mockRejectedValueOnce(new Error(errorMessage));

    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(500);
    expect(data.error).toBe("Failed to fetch users");
    expect(data.details).toBe(errorMessage);
  });
});