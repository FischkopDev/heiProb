'use server'

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod"; // Tool zur Validierung

// Schema für die Validierung
const ProjectSchema = z.object({
  title: z.string().min(3, "Titel muss mindestens 3 Zeichen lang sein"),
  description: z.string().optional(),
});

export async function createProjectAction(prevState: any, formData: FormData) {
  // 1. Daten validieren
  const validatedFields = ProjectSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
  });

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  // 2. In DB speichern
  try {
    await prisma.project.create({ data: validatedFields.data });
    revalidatePath("/projects");
    return { success: true };
  } catch (e) {
    return { error: "Datenbankfehler beim Speichern." };
  }
}