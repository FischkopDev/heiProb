import { NextResponse } from "next/server";
import pool from "../../../../lib/db";

export async function GET() {
  console.log("Listing all people in database");

  try {
    const result = await pool.query("SELECT * FROM Expert");
    return NextResponse.json({
      success: true,
      experts: result.rows,
      count: result.rows.length,
    });
  } catch (error: any) {
    console.error("Error fetching experts:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch experts",
        details: error.message,
      },
      { status: 500 }
    );
  }
}