import { NextResponse } from "next/server";
import pool from "../../../../lib/db";

/**
 * Fügt eine neue Organisation in die Datenbank ein.
 * 
 * @param name - Der Name der Organisation (erforderlich).
 * @param location - Der Standort der Organisation.
 * @param field - Das Tätigkeitsfeld der Organisation.
 * @param description - Eine Beschreibung der Organisation.
 * 
 * @returns Die neu generierte `organization_id` bei Erfolg.
 *          Gibt `0` zurück, wenn ein Fehler auftritt oder kein ID-Wert zurückgegeben wird.
 * 
 * @remarks
 * - Logs Fehler an die Konsole, wirft aber keinen Exception, um den Aufrufer nicht zu blockieren.
 * - Die Rückgabe von `0` bei Fehlern erfordert eine explizite Prüfung durch den Aufrufer.
 */
export async function addOrganization(name: string, location: string, field: string, description: string) {
  console.log("Adding new organization to database");

  try {
    const result = await pool.query(
      `INSERT INTO "Organization" (name, location, field, description)
       VALUES ($1, $2, $3, $4) RETURNING organization_id`,
      [name, location, field, description]
    );
    const id = result.rows[0].organization_id;
    return id;
  }
  catch(error){
    console.error("Error creating organization:", error);
  }
  return 0;
}

/**
 * Sucht die eindeutige ID einer Organisation anhand ihres Namens.
 * 
 * @param name - Der Name der Organisation, nach dem gesucht werden soll.
 * 
 * @returns Die `organization_id` als Zahl, falls gefunden, sonst `null`.
 * 
 * @remarks
 * - Nutzt `LIMIT 1`, da von eindeutigen Namen ausgegangen wird.
 * - Fängt Datenbankfehler ab und gibt `null` zurück.
 */
export async function getOrganizationIdByName(name: string): Promise<number | null> {
  console.log(`Checking if organization "${name}" exists...`);

  try {
    const result = await pool.query(
      `SELECT organization_id FROM "Organization" WHERE name = $1 LIMIT 1`,
      [name]
    );

    // Wenn ein Datensatz gefunden wurde, gib die ID zurück
    if (result.rows.length > 0) {
      return result.rows[0].organization_id;
    }

    // Wenn nichts gefunden wurde
    return null;
  } catch (error) {
    console.error("Error fetching organization ID:", error);
    return null;
  }
}

/**
 * Fügt Expertisefelder für einen Experten in die Datenbank ein.
 * 
 * @param expertId - Die ID des Experten.
 * @param expertFields - Array von Feld-Strings, die die Expertisen des Experten darstellen.
 * 
 * @returns Array der Datenbank-Einfügeergebnisse (pg.QueryResult[]).
 * 
 * @remarks
 * - Fängt Fehler ab und loggt sie, wirft aber keine Exception.
 * - Gibt ein leeres Array zurück, wenn expertFields leer oder undefined ist.
 */
export async function addExpertFields(expertId: number, expertFields: string[]) {
  console.log(`Adding expert fields for expert ${expertId}`);

  if (!expertFields || expertFields.length === 0) {
    console.log("No expert fields provided");
    return [];
  }

  try {
    const results = [];
    for (const field of expertFields) {
      const result = await pool.query(
        `INSERT INTO "ExpertField" (expert_id, field)
         VALUES ($1, $2)`,
        [expertId, field]
      );
      results.push(result);
    }
    console.log(`Successfully added ${results.length} expert fields`);
    return results;
  } catch (error) {
    console.error("Error adding expert fields:", error);
    return [];
  }
}

/**
 * Erstellt einen neuen Experten in der Datenbank.
 * 
 * Dieser Prozess beinhaltet:
 * 1. Prüfung, ob die angegebene `primary_organization` existiert.
 * 2. Falls nein: Automatische Erstellung der Organisation mit Standardwerten für `field` und `description`.
 * 3. Einfügen des Experten mit der aufgelösten Organisations-ID.
 * 4. Optional: Einfügen der Expertisefelder (expertFields).
 * 
 * @param body - Das Objekt mit den Experten-Daten.
 * @param body.name - Vorname des Experten (erforderlich).
 * @param body.prename - Nachname des Experten (erforderlich).
 * @param body.title - Akademischer Titel oder Anrede (optional).
 * @param body.email - E-Mail-Adresse (optional).
 * @param body.description - Beschreibung des Experten (optional).
 * @param body.primary_organization - Name der Hauptorganisation (erforderlich für die Zuordnung).
 * @param body.location - Standort des Experten (optional).
 * @param body.economic - Flag für wirtschaftlichen Fokus (default: false).
 * @param body.science - Flag für wissenschaftlichen Fokus (default: false).
 * @param body.social - Flag für sozialen Fokus (default: false).
 * @param body.expertFields - Array von Feld-Strings für die Expertisen des Experten (optional).
 * @param body.organization_field - Feld/Sektor der Organisation (optional).
 * 
 * @returns Objekt mit `expertId` und `fields` (Array von Einfügeergebnissen).
 * 
 * @remarks
 * - Die Funktion erstellt automatisch eine Organisation, wenn sie nicht existiert, 
 *   wobei `field` und `description` leer gesetzt werden.
 * - Boolesche Felder (`economic`, `science`, `social`) defaults auf `false`, wenn nicht übergeben.
 * - Expertisefelder werden nach dem Einfügen des Experten hinzugefügt.
 */
export async function addExpert(body: any) {
  const { name, prename, title, email, description, primary_organization, location, economic, science, social, expertFields, organization_field, phone } = body;
  console.log("Adding new expert to database");

  //Check if organization exists
  let organizationId = await getOrganizationIdByName(primary_organization);
  if(organizationId == null){
    // Organisation wird automatisch erstellt, falls nicht vorhanden
    organizationId = await addOrganization(primary_organization, location, organization_field, description);
  }

  //Add expert to database
  const result = await pool.query(
      `INSERT INTO "Expert" (name, prename, title, email, number, description, location, economic, science, social, primary_organization_id)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING expert_id`,
      [name, prename, title || null, email || null, phone || null, description || null, location || null, economic || false, science || false, social || false, organizationId]
    );
  
  const expertId = result.rows[0].expert_id;
  console.log(`Expert created with ID: ${expertId}`);

  // Add expert fields if provided
  const fieldsResult = await addExpertFields(expertId, expertFields);

  return {
    expertId,
    fields: fieldsResult
  };
}


/**
 * Handler für HTTP POST-Anfragen zum Erstellen eines neuen Experten.
 * 
 * Validiert die erforderlichen Felder (`name`, `prename`, `email`) und delegiert 
 * die Erstellung an `addExpert()`.
 * 
 * @param request - Die eingehende HTTP-Anfrage.
 * @returns Ein JSON-Antwortobjekt:
 *   - `200`: Erfolg mit `{ success: true, expertId: number, fieldsAdded: number }`
 *   - `400`: Fehlende Pflichtfelder
 *   - `500`: Interner Serverfehler
 * 
 * @example
 * // Erwartetes Body-Format:
 * {
 *   "name": "Max",
 *   "prename": "Mustermann",
 *   "email": "max@example.com",
 *   "primary_organization": "Beispiel GmbH",
 *   "title": "Dr.",
 *   "location": "Berlin",
 *   "economic": true,
 *   "expertFields": ["KI", "Machine Learning", "Data Science"]
 * }
 */
export async function POST(request: Request) {
  const body = await request.json();
  const { name, prename, title, email, description, primary_organization, location, network} = body;
  
  console.log("Adding new person to database");

  // Validate required fields
  // Hinweis: Die Fehlermeldung listet 'primary_organization' als required auf, 
  // aber die Validierungsbedingung prüft nur name, prename, email.
  if (!name || !prename || !email) {
    return NextResponse.json(
      {
        error: "Missing required fields",
        required: ["name", "prename", "email", "primary_organization"],
      },
      { status: 400 }
    );
  }

  try {
    const result = await addExpert(body); 

    return NextResponse.json({
      success: true,
      expertId: result.expertId,
      fieldsAdded: result.fields.length
    });
  } catch (error: any) {
    console.error("Error creating expert:", error);

    return NextResponse.json(
      {
        error: "Failed to create expert",
        details: error.message,
      },
      { status: 500 }
    );
  }
}