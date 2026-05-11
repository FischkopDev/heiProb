import { expect, test } from 'vitest'
import { addOrganization, addExpert} from './route';
import pool from "../../../../lib/db";
import { fail } from 'assert';


test("AddOrganization and GetOrganization",async () => {
    //test of the actual function
    const name = "Test Organization";
    const location = "Test Location";
    const field = "Test Field";
    const description = "Test Description";
    const id = await addOrganization(name, location, field, description);   

    const result = await pool.query(
      `SELECT * FROM "Organization" WHERE organization_id = $1`,
      [id]
    );

    // Wenn ein Datensatz gefunden wurde, gib die ID zurück
    if (result.rows.length > 0) {
      expect(result.rows[0].name).toBe(name);
      expect(result.rows[0].location).toBe(location);
      expect(result.rows[0].field).toBe(field);
      expect(result.rows[0].description).toBe(description);

      await pool.query(`DELETE FROM "Organization" WHERE organization_id = $1`, [id]);
    }
    else{
      fail("Organization was not added to the database");
    }

})

test("AddExpert and Verify in Database", async () => {
    // 1. Testdaten definieren
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

    // 2. Funktion ausführen
    // Hinweis: Die Funktion gibt das Result-Objekt von pool.query zurück
    const result = await addExpert(expertData);
    
    // Wir holen uns die ID des gerade erstellten Experten
    // Falls deine Funktion das result von pool.query zurückgibt, 
    // müssen wir sicherstellen, dass wir die ID für den Cleanup haben.
    const selectResult = await pool.query(
        `SELECT * FROM "Expert" WHERE email = $1 AND name = $2`,
        [expertData.email, expertData.name]
    );

    // 3. Verifikation
    if (selectResult.rows.length > 0) {
        const dbExpert = selectResult.rows[0];
        const expertId = dbExpert.expert_id;
        const orgId = dbExpert.primary_organization_id;

        expect(dbExpert.name).toBe(expertData.name);
        expect(dbExpert.prename).toBe(expertData.prename);
        expect(dbExpert.email).toBe(expertData.email);
        expect(dbExpert.location).toBe(expertData.location);
        
        // Booleans prüfen
        expect(dbExpert.economic).toBe(expertData.economic);
        expect(dbExpert.science).toBe(expertData.science);
        expect(dbExpert.social).toBe(expertData.social);

        // 4. Cleanup (Wichtig: Erst Experte, dann ggf. die Organisation löschen)
        await pool.query(`DELETE FROM "Expert" WHERE expert_id = $1`, [expertId]);
        
    } else {
        fail("User was not added to the database");
    }
});