import { NextResponse } from "next/server";
import pool from "../../../../lib/db";

export async function getListOfSandboxProjects() {
  const result = await pool.query(
    `SELECT
      p.id,
      p.title,
      p.description,
      p."startDate" AS "startDate",
      p."endDate" AS "endDate",
      p.state,
      p."project_state" AS project_state,
      p.location,
      p."websiteUrl" AS websiteUrl,
      p.details,
      p."lastUpdate" AS lastUpdate
     FROM "Project" p
     ORDER BY p."lastUpdate" DESC
     LIMIT 50`
  );

  return result.rows;
}

export async function GET() {
  console.log("Listing sandbox projects from database");

  try {
    const results = await getListOfSandboxProjects();
    return NextResponse.json({
      success: true,
      projects: results,
      count: results.length,
    });
  } catch (error: any) {
    console.error("Error fetching sandbox projects:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch sandbox projects",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
