import { NextResponse } from "next/server";
import pool from "../../../../lib/db";

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

// UPDATE Handler (PATCH)
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