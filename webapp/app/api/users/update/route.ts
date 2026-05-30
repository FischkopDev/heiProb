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
 * - Logs Fehler an die Konsole, wirft aber keine Exception, um den Aufrufer nicht zu blockieren.
 * - Die Rückgabe von `0` bei Fehlern erfordert eine explizite Prüfung durch den Aufrufer.
 */
export async function addOrganization(name: string, location: string, field: string, description: string) {
  console.log("Adding new organization to database");

  try {
    const result = await pool.query(
      `INSERT INTO "Organization" (name, description, field, location)
       VALUES ($1, $2, $3, $4) RETURNING organization_id`,
      [name, description, field, location]
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
 * Aktualisiert die Daten eines Experten in der Datenbank.
 * 
 * Dieser Prozess beinhaltet:
 * 1. Prüfung und ggf. automatische Erstellung der angegebenen `primary_organization`.
 * 2. Aktualisierung der Expertenfelder unter Verwendung von `COALESCE`, um nicht übergebene Werte beizubehalten.
 * 
 * @param id - Die ID des zu aktualisierenden Experten (`expert_id`).
 * @param body - Das Objekt mit den zu aktualisierenden Daten.
 * @param body.name - Neuer Vorname (optional).
 * @param body.prename - Neuer Nachname (optional).
 * @param body.title - Neuer Titel (optional).
 * @param body.email - Neue E-Mail-Adresse (optional).
 * @param body.description - Neue Beschreibung (optional).
 * @param body.primary_organization - Name der neuen Hauptorganisation (optional).
 * @param body.location - Neuer Standort (optional).
 * @param body.economic - Flag für wirtschaftlichen Fokus (optional).
 * @param body.science - Flag für wissenschaftlichen Fokus (optional).
 * @param body.social - Flag für sozialen Fokus (optional).
 * 
 * @returns Das aktualisierte Experten-Objekt (inkl. aller Felder) bei Erfolg.
 *          Gibt `undefined` zurück, wenn kein Experte mit der angegebenen ID existiert.
 * 
 * @remarks
 * - Wenn `primary_organization` angegeben ist, wird geprüft, ob sie existiert. Falls nicht, 
 *   wird sie mit dem aktuellen `location` (falls vorhanden) und leeren Feldern für `field`/`description` erstellt.
 * - Die SQL-Abfrage nutzt `COALESCE($1, column)`, um nur übermittelte Werte zu überschreiben.
 * - Falls `primary_organization` nicht im Body ist, bleibt die bisherige Zuordnung erhalten.
 */
export async function updateExpert(id: number, body: any) {
  const { 
    name, prename, title, email, description, 
    primary_organization, location, economic, science, social 
  } = body;

  console.log(`Updating expert with ID: ${id}`);

  // 1. Organisation prüfen/erstellen falls ein Name mitgegeben wurde
  let organizationId = null;
  if (primary_organization) {
    organizationId = await getOrganizationIdByName(primary_organization);
    if (organizationId === null) {
      // Organisation wird automatisch erstellt, falls nicht vorhanden
      // Hinweis: Hier wird der aktuelle 'location' des Updates verwendet, falls vorhanden
      organizationId = await addOrganization(primary_organization, location || "", "", "");
    }
  }

  // 2. Expert Update Query
  // Wir nutzen COALESCE, um bestehende Werte zu behalten, falls Felder im Body fehlen
  const query = `
    UPDATE "Expert"
    SET 
      name = COALESCE($1, name),
      prename = COALESCE($2, prename),
      title = COALESCE($3, title),
      email = COALESCE($4, email),
      description = COALESCE($5, description),
      location = COALESCE($6, location),
      economic = COALESCE($7, economic),
      science = COALESCE($8, science),
      social = COALESCE($9, social),
      primary_organization_id = COALESCE($10, primary_organization_id)
    WHERE expert_id = $11
    RETURNING *;
  `;

  const values = [
    name, prename, title, email, description, 
    location, economic, science, social, organizationId, id
  ];

  const result = await pool.query(query, values);
  return result.rows[0];
}

/**
 * Handler für HTTP PATCH-Anfragen zum Aktualisieren eines bestehenden Experten.
 * 
 * Extrahiert die `expert_id` aus dem Request-Body, trennt sie von den Update-Daten 
 * und delegiert die Aktualisierung an `updateExpert()`.
 * 
 * @param request - Die eingehende HTTP-Anfrage.
 * @returns Ein JSON-Antwortobjekt:
 *   - `200`: Erfolg mit dem aktualisierten Experten-Objekt in `data`.
 *   - `400`: Fehlende `expert_id`.
 *   - `404`: Kein Experte mit der angegebenen ID gefunden.
 *   - `500`: Interner Serverfehler bei der Datenbankabfrage.
 * 
 * @example
 * // Erwarteter Request-Body:
 * {
 *   "expert_id": 123,
 *   "title": "Dr.",
 *   "primary_organization": "Neue Firma AG"
 * }
 * 
 * @remarks
 * - Nur die im Body enthaltenen Felder werden aktualisiert; alle anderen bleiben unverändert.
 * - Die Fehlermeldung bei fehlender ID ist auf Englisch, während andere Teile des Codes 
 *   teils Deutsch verwenden (Konsistenz könnte verbessert werden).
 */
export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { expert_id, ...updateData } = body;

    if (!expert_id) {
      return NextResponse.json(
        { error: "expert_id is required for updates" },
        { status: 400 }
      );
    }

    const updatedExpert = await updateExpert(expert_id, updateData);

    if (!updatedExpert) {
      return NextResponse.json(
        { error: "Expert not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: updatedExpert
    });

  } catch (error: any) {
    console.error("Error updating expert:", error);
    return NextResponse.json(
      { error: "Failed to update expert", details: error.message },
      { status: 500 }
    );
  }
}