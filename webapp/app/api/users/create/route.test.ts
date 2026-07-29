/**
 * UnitTests für die Routen-Handler und Datenbank-Helfer der Experten-Verwaltung.
 * 
 * Dieser Testsuite verifiziert das Anlegen, Verknüpfen und Auslesen von:
 * - Organisationen (`Organization`)
 * - Experten (`Expert`)
 * - Expertise-Feldern (`ExpertField`)
 * 
 * @module RouteTests
 */

import { expect, test } from 'vitest';
import { addOrganization, addExpert, addExpertFields, POST } from './route';
import pool from "../../../../lib/db";
import { fail } from 'assert';

/**
 * Testet das Erstellen und das anschließende Auslesen einer Organisation.
 * 
 * **Ablauf:**
 * 1. Legt eine Test-Organisation in der Datenbank an.
 * 2. Fragt die angelegte Organisation anhand der generierten ID ab.
 * 3. Prüft alle Attribute auf Gleichheit.
 * 4. Führt ein Cleanup in der Datenbank durch.
 * 
 * @category Database Integration
 */
test("AddOrganization and GetOrganization", async () => {
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

});

/**
 * Testet das Hinzufügen eines Experten und verifiziert die gespeicherten Felder direkt in der DB.
 * 
 * **Ablauf:**
 * 1. Erstellt einen Test-Experten mit Stammdaten und Zuordnungen (Wirtschaft/Wissenschaft/Soziales).
 * 2. Fragt den Eintrag per E-Mail und Name direkt aus der `Expert`-Tabelle ab.
 * 3. Validiert alle Eigenschaften inkl. Booleans.
 * 4. Löscht den Testdatensatz.
 * 
 * @category Experts
 */
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
    const result = await addExpert(expertData);
    
    const selectResult = await pool.query(
        `SELECT * FROM "Expert" WHERE email = $1 AND name = $2`,
        [expertData.email, expertData.name]
    );

    // 3. Verifikation
    if (selectResult.rows.length > 0) {
        const dbExpert = selectResult.rows[0];
        const expertId = dbExpert.expert_id;

        expect(dbExpert.name).toBe(expertData.name);
        expect(dbExpert.prename).toBe(expertData.prename);
        expect(dbExpert.email).toBe(expertData.email);
        expect(dbExpert.location).toBe(expertData.location);
        
        // Booleans prüfen
        expect(dbExpert.economic).toBe(expertData.economic);
        expect(dbExpert.science).toBe(expertData.science);
        expect(dbExpert.social).toBe(expertData.social);

        // 4. Cleanup
        await pool.query(`DELETE FROM "Expert" WHERE expert_id = $1`, [expertId]);
        
    } else {
        fail("User was not added to the database");
    }
});

/**
 * Testet das nachträgliche Verknüpfen mehrerer Expertise-Felder mit einem bestehenden Experten.
 * 
 * **Ablauf:**
 * 1. Erstellt einen Basis-Experten.
 * 2. Verknüpft ein Array von Strings als Fachgebiete (`addExpertFields`).
 * 3. Stellt sicher, dass die Felder alphabetisch korrekt in `ExpertField` abgelegt wurden.
 * 4. Bereinigt Verknüpfungen und Experte.
 * 
 * @category Expert Fields
 */
test("AddExpertFields and Verify in Database", async () => {
    // 1. Erstelle einen Test-Experten
    const expertData = {
        name: "TestExpert",
        prename: "Field",
        title: "Prof.",
        email: "field.test@test.com",
        description: "Expert für Feldtests",
        primary_organization: "Test Field Org",
        location: "Berlin",
        economic: false,
        science: true,
        social: true
    };

    const expertResult = await addExpert(expertData);
    const expertId = expertResult.expertId;

    // 2. Füge Expertisefelder hinzu
    const fields = ["Künstliche Intelligenz", "Machine Learning", "Data Science"];
    const fieldsResult = await addExpertFields(expertId, fields);

    // 3. Verifiziere die eingefügten Felder
    expect(fieldsResult.length).toBe(fields.length);

    const dbFields = await pool.query(
        `SELECT field FROM "ExpertField" WHERE expert_id = $1 ORDER BY field ASC`,
        [expertId]
    );

    expect(dbFields.rows.length).toBe(fields.length);
    const sortedFields = [...fields].sort();
    dbFields.rows.forEach((row, index) => {
        expect(row.field).toBe(sortedFields[index]);
    });

    // 4. Cleanup
    await pool.query(`DELETE FROM "ExpertField" WHERE expert_id = $1`, [expertId]);
    await pool.query(`DELETE FROM "Expert" WHERE expert_id = $1`, [expertId]);
});

/**
 * Überprüft das Verhalten von `addExpertFields`, wenn ein leeres Array übergeben wird.
 * 
 * **Ablauf:**
 * 1. Legt einen Experten an.
 * 2. Übergibt ein leeres Array `[]` an `addExpertFields`.
 * 3. Stellt sicher, dass keine Einträge in `ExpertField` geschrieben werden.
 * 
 * @category Expert Fields
 */
test("AddExpertFields with Empty Array", async () => {
    // 1. Erstelle einen Test-Experten
    const expertData = {
        name: "TestEmptyFields",
        prename: "Empty",
        email: "empty.fields@test.com",
        description: "Test mit leeren Feldern",
        primary_organization: "Empty Org",
        location: "Munich",
        economic: true,
        science: false,
        social: false
    };

    const expertResult = await addExpert(expertData);
    const expertId = expertResult.expertId;

    const fieldsResult = await addExpertFields(expertId, []);

    // 3. Verifiziere, dass keine Felder hinzugefügt wurden
    expect(fieldsResult.length).toBe(0);

    const dbFields = await pool.query(
        `SELECT field FROM "ExpertField" WHERE expert_id = $1`,
        [expertId]
    );

    expect(dbFields.rows.length).toBe(0);

    // 4. Cleanup
    await pool.query(`DELETE FROM "Expert" WHERE expert_id = $1`, [expertId]);
});

/**
 * Testet das atomare Anlegen eines Experten inklusive seiner Expertise-Felder in einem Schritt.
 * 
 * **Ablauf:**
 * 1. Übergibt ein `expertData`-Objekt, das bereits das Array `expertFields` enthält, an `addExpert`.
 * 2. Prüft, ob sowohl die Stammdaten als auch die Fachgebiete korrekt angelegt wurden.
 * 3. Verifiziert die Anzahl und Namensgleichheit der Felder.
 * 
 * @category Experts
 */
test("AddExpert with ExpertFields", async () => {
    // 1. Testdaten mit Expertisefeldern definieren
    const expertData = {
        name: "ExpertWithFields",
        prename: "Compound",
        title: "Dr.",
        email: "compound.expert@test.com",
        description: "Expert mit direkt eingegebenen Feldern",
        primary_organization: "Fields Test Org",
        location: "Hamburg",
        economic: true,
        science: true,
        social: false,
        expertFields: ["Quantencomputing", "Blockchain", "IoT"]
    };

    // 2. Funktion ausführen
    const result = await addExpert(expertData);
    const expertId = result.expertId;
    const fieldsAdded = result.fields.length;

    // 3. Verifiziere den Experten
    const selectExpert = await pool.query(
        `SELECT * FROM "Expert" WHERE expert_id = $1`,
        [expertId]
    );

    expect(selectExpert.rows.length).toBe(1);
    const dbExpert = selectExpert.rows[0];
    expect(dbExpert.name).toBe(expertData.name);
    expect(dbExpert.email).toBe(expertData.email);

    // 4. Verifiziere die Expertisefelder
    expect(fieldsAdded).toBe(expertData.expertFields.length);

    const selectFields = await pool.query(
        `SELECT field FROM "ExpertField" WHERE expert_id = $1 ORDER BY field ASC`,
        [expertId]
    );

    expect(selectFields.rows.length).toBe(expertData.expertFields.length);
    const sortedFields = [...expertData.expertFields].sort();
    selectFields.rows.forEach((row, index) => {
        expect(row.field).toBe(sortedFields[index]);
    });

    // 5. Cleanup
    await pool.query(`DELETE FROM "ExpertField" WHERE expert_id = $1`, [expertId]);
    await pool.query(`DELETE FROM "Expert" WHERE expert_id = $1`, [expertId]);
});

/**
 * End-to-End-Test für den HTTP-POST-Route-Handler (`POST`).
 * 
 * **Ablauf:**
 * 1. Erstellt einen synthetischen `Request` mit JSON-Body (HTTP-POST).
 * 2. Ruft die Route-Funktion `POST(mockRequest)` auf.
 * 3. Prüft den HTTP-Statuscode `200` und die Struktur der JSON-Response (`success`, `expertId`, `fieldsAdded`).
 * 4. Valdiert den entstandenen Datenbankzustand manuell über `pool.query`.
 * 
 * @category API Endpoints
 */
test("POST Handler with ExpertFields", async () => {
    // 1. Testdaten für POST-Request vorbereiten
    const postData = {
        name: "PostTest",
        prename: "Handler",
        title: "Dipl.",
        email: "handler.post@test.com",
        description: "Test des POST-Handlers mit Feldern",
        primary_organization: "POST Handler Org",
        location: "Frankfurt",
        economic: false,
        science: true,
        social: true,
        expertFields: ["Web Development", "Cloud Computing", "DevOps"]
    };

    // 2. Mock-Request erstellen
    const mockRequest = new Request(new URL("http://localhost:3000/api/users/create"), {
        method: "POST",
        body: JSON.stringify(postData)
    });

    // 3. POST-Handler aufrufen
    const response = await POST(mockRequest);

    // 4. Response-Status verifizieren
    expect(response.status).toBe(200);

    const responseData = await response.json();
    expect(responseData.success).toBe(true);
    expect(responseData.expertId).toBeDefined();
    expect(responseData.fieldsAdded).toBe(postData.expertFields.length);

    const expertId = responseData.expertId;

    // 5. Datenbank-Verifikation
    const dbExpert = await pool.query(
        `SELECT * FROM "Expert" WHERE expert_id = $1`,
        [expertId]
    );

    expect(dbExpert.rows.length).toBe(1);
    expect(dbExpert.rows[0].name).toBe(postData.name);
    expect(dbExpert.rows[0].email).toBe(postData.email);

    const dbFields = await pool.query(
        `SELECT field FROM "ExpertField" WHERE expert_id = $1 ORDER BY field ASC`,
        [expertId]
    );

    expect(dbFields.rows.length).toBe(postData.expertFields.length);

    // 6. Cleanup
    await pool.query(`DELETE FROM "ExpertField" WHERE expert_id = $1`, [expertId]);
    await pool.query(`DELETE FROM "Expert" WHERE expert_id = $1`, [expertId]);
});