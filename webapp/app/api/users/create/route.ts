import { NextResponse } from "next/server";
import pool from "../../../../lib/db";

async function addOrganization(name: string, location: string, field: string, description: string) {
     console.log("Adding new organization to database");

  try {
    
    const result = await pool.query(
      `INSERT INTO "Organization" (name, description, field, location)
       VALUES ($1, $2, $3, $4) RETURNING organization_id`,
      ["test","test","test","test"]
    );
    const id = result.rows[0].organization_id;
    return id;
  }
  catch(error){
    console.error("Error creating organization:", error);
  }
  return 0;
}

export async function POST(request: Request) {
  const body = await request.json();
  const { name, prename, title, email, description, location, network} = body;

  console.log("Adding new person to database");

  // Validate required fields
  if (!name || !prename || !email) {
    return NextResponse.json(
      {
        error: "Missing required fields",
        required: ["name", "prename", "email"],
      },
      { status: 400 }
    );
  }

  try {
    const organizationId = await addOrganization("Default Organization", "Unknown Location", "General", "Default organization for new experts");
    
    const result = await pool.query(
      `INSERT INTO "Expert" (name, prename, title, email, description, location, network, primary_organization_id)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [name, prename, title || null, email || null, description || null, location || null, network || null, organizationId]
    );

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