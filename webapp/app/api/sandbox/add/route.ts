"use server";

import { NextResponse } from "next/server";
import pool from "../../../../lib/db";

async function getExpertIdByName(name: string): Promise<number | null> {
  try {
    const result = await pool.query(
      `SELECT expert_id FROM "Expert" WHERE name = $1 LIMIT 1`,
      [name]
    );

    return result.rows.length > 0 ? result.rows[0].expert_id : null;
  } catch (error) {
    console.error("Error fetching expert ID:", error);
    return null;
  }
}

async function addProject(body: any) {
  const {
    title,
    description,
    startDate,
    endDate,
    state,
    location,
    websiteUrl,
    details,
    members,
  } = body;

  try {
    const projectResult = await pool.query(
      `INSERT INTO "Project" (title, description, "startDate", "endDate", state, location, "websiteUrl", details, "lastUpdate")
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id`,
      [
        title,
        description || null,
        startDate ? new Date(startDate) : null,
        endDate ? new Date(endDate) : null,
        state || null,
        location || null,
        websiteUrl || null,
        details || null,
        new Date(),
      ]
    );

    const projectId = projectResult.rows[0].id;

    if (Array.isArray(members) && members.length > 0) {
      for (const member of members) {
        const expertId = member.expertId ?? await getExpertIdByName(member.name);
        if (!expertId) {
          console.warn('Skipping project member because expert could not be resolved:', member);
          continue;
        }

        await pool.query(
          `INSERT INTO "ProjectRelation" (project_id, expert_id, role)
           VALUES ($1, $2, $3)
           ON CONFLICT (project_id, expert_id) DO UPDATE SET role = EXCLUDED.role`,
          [projectId, expertId, member.role]
        );
      }
    }

    return projectId;
  } catch (error) {
    console.error("Error creating project:", error);
    throw error;
  }
}

export async function POST(request: Request) {
  const body = await request.json();
  const { title, state } = body;

  console.log("Adding new project to database");

  if (!title || !state) {
    return NextResponse.json(
      {
        error: "Missing required fields",
        required: ["title", "state"],
      },
      { status: 400 }
    );
  }

  try {
    const projectId = await addProject(body);

    return NextResponse.json({
      success: true,
      projectId,
    });
  } catch (error: any) {
    console.error("Error adding project:", error);

    return NextResponse.json(
      {
        error: "Failed to create project",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
