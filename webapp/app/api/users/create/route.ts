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

export async function addExpert(name: string, prename: string, title: string, email: string, description: string, primary_organization: string, location: string, network: string) {
  console.log("Adding new expert to database");

  //Check if organization exists
  let organizationId = await getOrganizationIdByName(primary_organization);
  if(organizationId === null){
    organizationId = await addOrganization(primary_organization, location, "", "");
  }
    
  //Add expert to database
  const result = await pool.query(
      `INSERT INTO "Expert" (name, prename, title, email, description, location, network, primary_organization_id)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [name, prename, title || null, email || null, description || null, location || null, network || null, 1]
    );
  return result;
}


//Add new user to database
export async function POST(request: Request) {
  const body = await request.json();
  const { name, prename, title, email, description, primary_organization, location, network} = body;

  console.log("Adding new person to database");

  // Validate required fields
  if (!name || !prename || !email || !primary_organization) {
    return NextResponse.json(
      {
        error: "Missing required fields",
        required: ["name", "prename", "email", "primary_organization"],
      },
      { status: 400 }
    );
  }

  try {
    const result = await addExpert(name, prename, title, email, description, primary_organization, location, network); 

    return NextResponse.json({
      success: true
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