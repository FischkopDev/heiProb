import { NextResponse } from "next/server";
import pool from "../../../../lib/db";

async function getOrganization(request: Request) {
    return 0; //TODO 
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
    
    const result = await pool.query(
      `INSERT INTO Experts (name, prename, title, email, description, location, network, primary_organization_id)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [name, prename, title || null, email || null, description || null, location || null, network || null, getOrganization(request)]
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