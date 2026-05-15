import { NextResponse } from "next/server";
import pool from "../../../../lib/db";

async function getListOfPeopleWithOrganization() {
  const result = await pool.query(
    `SELECT
       e.*,
       jsonb_build_object(
         'organization_id', o.organization_id,
         'name', o.name,
         'location', o.location,
         'field', o.field,
         'description', o.description
       ) AS organization
     FROM "Expert" e
     JOIN "Organization" o ON e.primary_organization_id = o.organization_id
     ORDER BY e.name ASC
     LIMIT 50`
  );
  return result.rows;
}

export async function GET() {
  console.log("Listing all people in database");

  try {
    const results = await getListOfPeopleWithOrganization();
    return NextResponse.json({
      success: true,
      experts: results,
      count: results.length,
    });
  } catch (error: any) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch users",
        details: error.message,
      },
      { status: 500 }
    );
  }
}