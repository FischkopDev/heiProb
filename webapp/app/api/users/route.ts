import { NextResponse } from "next/server";
import pool from "../../../lib/db";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email } = body;

  console.log("POST received");

  try {
      const result = await pool.query(
        'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id', // Returning the id
        ["testsetsetest", "testsetgfdg"]
      );
      const userId = result.rows[0].id;
      console.log(`User created with ID: ${userId}`);
    return NextResponse.json({
      success: true,
    });
  } catch (error: any) {
    console.error("Error creating user:", error);

    return NextResponse.json(
      {
        error: "Failed to create user",
        details: error.message,
      },
      { status: 500 }
    );
  }
}