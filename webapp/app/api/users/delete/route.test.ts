/**
 * @module ExpertDeleteUnitTests
 * @description Unit-Tests für die Löschfunktionalität von Experten.
 * Testet sowohl die direkte Datenbank-Löschfunktion `deleteExpert` als auch den
 * HTTP-Endpunkt (`DELETE /api/users/delete`).
 */

import { expect, test } from 'vitest';
import { addExpert } from '../create/route';
import { deleteExpert, DELETE } from './route';
import pool from "../../../../lib/db";
import { fail } from 'assert';

/**
 * @test Delete Expert from Database
 * @description Verifiziert das erfolgreiche Löschen eines Experten direkt aus der Datenbank:
 * 1. Legt über `addExpert` einen neuen Test-Experten an.
 * 2. Ermittelt die zugewiesene `expert_id` über eine SQL-Query.
 * 3. Ruft `deleteExpert` auf und erwartet den Rückgabewert `true`.
 * 4. Stellt per Datenbankabfrage sicher, dass der Eintrag vollständig entfernt wurde.
 */
test("Delete Expert from Database", async () => {
    const expertData = {
        name: "Mustermann",
        prename: "Max",
        title: "Dr.",
        email: "max.mustermann@test.com",
        description: "KI Spezialist",
        primary_organization: "Test Uni", // Diese Org wird ggf. erstellt
        location: "Heidelberg",
        economic: true,
        science: true,
        social: false
    };

    // Insert expert and read back the created record ID.
    await addExpert(expertData);
    const selectResult = await pool.query(
        `SELECT expert_id FROM "Expert" WHERE email = $1 AND name = $2 LIMIT 1`,
        [expertData.email, expertData.name]
    );

    if (selectResult.rows.length === 0) {
        fail("User was not added to the database");
    }

    const expertId = selectResult.rows[0].expert_id;
    const deleted = await deleteExpert(expertId);

    expect(deleted).toBe(true);

    const verifyResult = await pool.query(
        `SELECT expert_id FROM "Expert" WHERE expert_id = $1`,
        [expertId]
    );
    expect(verifyResult.rows.length).toBe(0);
});

/**
 * @test deleteExpert returns false when expert does not exist
 * @description Testet das Verhalten der Funktion `deleteExpert` bei Nichtexistenz:
 * - Übergibt eine ungültige/extrem hohe ID (`999999999`).
 * - Erwartet den Rückgabewert `false`.
 */
test("deleteExpert returns false when expert does not exist", async () => {
    const deleted = await deleteExpert(999999999);
    expect(deleted).toBe(false);
});

/**
 * @test Delete handler returns 400 when expert_id is missing
 * @description Verifiziert die Validierung des Request-Bodys der Lösch-Route:
 * 1. Sendet einen `DELETE`-Request ohne `expert_id` im JSON-Body.
 * 2. Erwartet den HTTP-Statuscode `400 Bad Request`.
 * 3. Prüft auf die Fehlermeldung `"User ist nicht vorhanden"`.
 */
test("Delete handler returns 400 when expert_id is missing", async () => {
    const request = new Request('http://localhost/api/users/delete', {
        method: 'DELETE',
        body: JSON.stringify({}),
        headers: { 'Content-Type': 'application/json' },
    });

    const response = await DELETE(request);
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.error).toBe('User ist nicht vorhanden');
});

/**
 * @test Delete handler returns 404 when expert cannot be found
 * @description Prüft die Reaktion der `DELETE`-Route auf unzulässige oder nicht mehr vorhandene IDs:
 * 1. Sendet einen `DELETE`-Request mit einer nicht vorhandenen `expert_id`.
 * 2. Erwartet den HTTP-Statuscode `404 Not Found`.
 * 3. Prüft, ob die Rückgabe den Hinweis `"nicht gefunden"` enthält.
 */
test("Delete handler returns 404 when expert cannot be found", async () => {
    const request = new Request('http://localhost/api/users/delete', {
        method: 'DELETE',
        body: JSON.stringify({ expert_id: 999999999 }),
        headers: { 'Content-Type': 'application/json' },
    });

    const response = await DELETE(request);
    const body = await response.json();

    expect(response.status).toBe(404);
    expect(body.error).toContain('nicht gefunden');
});