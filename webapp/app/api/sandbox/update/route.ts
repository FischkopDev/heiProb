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

async function synchronizeProjectMembers(projectId: number, members: any[]) {
  if (!Array.isArray(members)) {
    return;
  }

  if (members.length === 0) {
    await pool.query(
      `DELETE FROM "ProjectRelation" WHERE project_id = $1`,
      [projectId]
    );
    return;
  }

  const acceptedExpertIds: number[] = [];
  for (const member of members) {
    const expertId = member.expertId ?? (member.name ? await getExpertIdByName(member.name) : null);
    if (!expertId) {
      console.warn("Skipping project member because expert could not be resolved:", member);
      continue;
    }

    acceptedExpertIds.push(expertId);

    await pool.query(
      `INSERT INTO "ProjectRelation" (project_id, expert_id, role)
       VALUES ($1, $2, $3)
       ON CONFLICT (project_id, expert_id) DO UPDATE SET role = EXCLUDED.role`,
      [projectId, expertId, member.role]
    );
  }

  if (acceptedExpertIds.length > 0) {
    const placeholders = acceptedExpertIds.map((_, index) => `$${index + 2}`).join(", ");
    await pool.query(
      `DELETE FROM "ProjectRelation"
       WHERE project_id = $1
         AND expert_id NOT IN (${placeholders})`,
      [projectId, ...acceptedExpertIds]
    );
  }
}

async function updateProject(body: any) {
  const {
    project_id,
    title,
    description,
    startDate,
    endDate,
    state,
    location,
    websiteUrl,
    details,
  } = body;

  const result = await pool.query(
    `UPDATE "Project"
     SET title = COALESCE($1, title),
         description = COALESCE($2, description),
         "startDate" = COALESCE($3, "startDate"),
         "endDate" = COALESCE($4, "endDate"),
         state = COALESCE($5, state),
         location = COALESCE($6, location),
         "websiteUrl" = COALESCE($7, "websiteUrl"),
         details = COALESCE($8, details),
         "lastUpdate" = $9
     WHERE id = $10
     RETURNING id`,
    [
      title ?? null,
      description ?? null,
      startDate ? new Date(startDate) : null,
      endDate ? new Date(endDate) : null,
      state ?? null,
      location ?? null,
      websiteUrl ?? null,
      details ?? null,
      new Date(),
      project_id,
    ]
  );

  if (result.rows.length === 0) {
    return null;
  }

  if (Array.isArray(body.members)) {
    await synchronizeProjectMembers(project_id, body.members);
  }

  return result.rows[0];
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { project_id } = body;

    if (!project_id) {
      return NextResponse.json(
        { error: "project_id is required for updates" },
        { status: 400 }
      );
    }

    const updatedProject = await updateProject(body);

    if (!updatedProject) {
      return NextResponse.json(
        { error: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      projectId: updatedProject.id,
    });
  } catch (error: any) {
    console.error("Error updating project:", error);
    return NextResponse.json(
      { error: "Failed to update project", details: error.message },
      { status: 500 }
    );
  }
}
