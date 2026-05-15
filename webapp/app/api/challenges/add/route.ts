"use server";

import  pool  from "../../../../lib/db";
import { NextResponse } from "next/server";

async function addChallenge(body: any){
   const { title, category, status, description} = body;
  try {
    const result = await pool.query(
      `INSERT INTO "Problem" (title, category, state, description)
       VALUES ($1, $2, $3, $4) RETURNING problem_id`,
       [title, category, status, description]
    );
    const id = result.rows[0].problem_id;
    return id;
  }
  catch(error){
    console.error("Error creating problem:", error);
  }
  return 0;
}

export async function POST(request: Request) {
  const body = await request.json();
  const { title, category, state, description} = body;
  
  console.log("Adding new challenge to database");

  // Validate required fields
  if (!title || !category || !state) {
    return NextResponse.json(
      {
        error: "Missing required fields",
        required: ["title", "category", "state"],
      },
      { status: 400 }
    );
  }

  try {
    const result = await addChallenge(body); 

    return NextResponse.json({
      success: true,
      status: 200
    });
  } catch (error: any) {
    console.error("Error adding challenge:", error);

    return NextResponse.json(
      {
        error: "Failed to add challenge",
        details: error.message,
      },
      { status: 500 }
    );
  }
}