import { NextResponse } from "next/server";
import pool from "../../../../lib/db";

async function getListOfPeople() {
  const result = await pool.query('SELECT * FROM "Expert" ORDER BY name ASC LIMIT 50');
  return result.rows;
}

export async function GET() {
  console.log("Listing all people in database");

  try {
    const results = await getListOfPeople();
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