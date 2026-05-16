import { expect, test } from 'vitest'
import { addExpert} from '../create/route';
import { deleteExpert, DELETE } from './route';
import pool from "../../../../lib/db";
import { fail } from 'assert';


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

test("deleteExpert returns false when expert does not exist", async () => {
    const deleted = await deleteExpert(999999999);
    expect(deleted).toBe(false);
});

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
