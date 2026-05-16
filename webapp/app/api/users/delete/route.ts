import { NextResponse } from "next/server";
import pool from "../../../../lib/db";

// 3. Expert Delete Query
export async function deleteExpert(id: number): Promise<boolean> {
  console.log(`Deleting expert with ID: ${id}`);

  try {
    const result = await pool.query(
      `DELETE FROM "Expert" WHERE expert_id = $1 RETURNING expert_id`,
      [id]
    );

    // Wenn Zeilen gelöscht wurden, war es erfolgreich
    return result.rows.length > 0;
  } catch (error) {
    console.error("Error deleting expert from database:", error);
    throw error; // Fehler weiterwerfen für den Handler
  }
}

// DELETE Handler
export async function DELETE(request: Request) {
  try {
    const body = await request.json();
    const { expert_id } = body;

    // Validierung: Wurde eine ID mitgegeben?
    if (!expert_id) {
      return NextResponse.json(
        { error: "User ist nicht vorhanden" },
        { status: 400 }
      );
    }

    const isDeleted = await deleteExpert(expert_id);

    // Falls die ID in der DB nicht existiert
    if (!isDeleted) {
      return NextResponse.json(
        { error: `Expert with ID ${expert_id} nicht gefunden` },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Expert with ID ${expert_id} successfully deleted`
    });

  } catch (error: any) {
    console.error("Error in DELETE handler:", error);
    return NextResponse.json(
      { error: "Failed to delete expert", details: error.message },
      { status: 500 }
    );
  }
}