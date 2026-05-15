import { NextResponse } from "next/server";
import pool from "../../../../lib/db";

export async function getListOfChallenges() {
  const result = await pool.query(
    `SELECT * FROM "Problem"
     ORDER BY title ASC
     LIMIT 50`
  );
  return result.rows;
}

export async function GET() {
  console.log("Listing all challenges in database");

  try {
    const results = await getListOfChallenges();
    return NextResponse.json({
      success: true,
      challenges: results,
      count: results.length,
    });
  } catch (error: any) {
    console.error("Error fetching challenges:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch challenges",
        details: error.message,
      },
      { status: 500 }
    );
  }
}