"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export default async function deleteJournalEntry(entryId: string) {
  try {
    await prisma.journalEntry.delete({
      where: {
        id: entryId,
      },
    });

    revalidatePath("/journal");
    redirect("/journal");
  } catch (error: unknown) {
    console.error("Error deleting journal entry:", error);
    return {
      status: "ERROR",
      message: "Failed to delete journal entry.",
    };
  }
}
