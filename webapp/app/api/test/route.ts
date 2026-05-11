"use server";

import  pool  from "../../../lib/db";
import { NextResponse } from "next/server";

export async function POST() {
   console.log("DB-POST-Request erhalten");
  try {
    // Direktes SQL-Query
    const result = await pool.query('SELECT * FROM "Test"');
    
    return NextResponse.json(result.rows);
  } catch (errorMsg) {
    console.error(errorMsg);
    return NextResponse.json({ error: errorMsg }, { status: 500 });
  }
}