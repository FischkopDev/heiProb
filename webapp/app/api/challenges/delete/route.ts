import { NextResponse } from "next/server";
import pool from "../../../../lib/db";

// 3. Expert Delete Query
export async function deleteChallenge(id: number): Promise<boolean> {
  console.log(`Deleting challenge with ID: ${id}`);

  try {
    const result = await pool.query(
      `DELETE FROM "Problem" WHERE problem_id = $1 RETURNING problem_id`,
      [id]
    );

    // Wenn Zeilen gelöscht wurden, war es erfolgreich
    return result.rows.length > 0;
  } catch (error) {
    console.error("Error deleting challenge from database:", error);
    throw error; // Fehler weiterwerfen für den Handler
  }
}

// DELETE Handler
export async function DELETE(request: Request) {
  try {
    const body = await request.json();
    const { challenge_id } = body;

    // Validierung: Wurde eine ID mitgegeben?
    if (!challenge_id) {
      return NextResponse.json(
        { error: "Challenge ist nicht vorhanden" },
        { status: 400 }
      );
    }

    const isDeleted = await deleteChallenge(challenge_id);

    // Falls die ID in der DB nicht existiert
    if (!isDeleted) {
      return NextResponse.json(
        { error: `Challenge with ID ${challenge_id} nicht gefunden` },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Challenge with ID ${challenge_id} successfully deleted`
    });

  } catch (error: any) {
    console.error("Error in DELETE handler:", error);
    return NextResponse.json(
      { error: "Failed to delete challenge", details: error.message },
      { status: 500 }
    );
  }
}