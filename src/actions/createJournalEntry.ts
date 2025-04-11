"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { FormState, fromErrorToState, toFormState } from "@/utils/form";
import { journalSchema } from "@/validations/journalSchema";
import { getUserByClerkID } from "@/utils/auth";

export async function createJournalEntry(
  formState: FormState,
  formData: FormData
) {
  try {
    const isValid = await journalSchema.parse({
      title: formData.get("title"),
      content: formData.get("content"),
      tags: formData.get("tags"),
    });
    const { title, content, tags } = isValid;

    const user = await getUserByClerkID();
    await prisma.journalEntry.create({
      data: {
        userId: user.id,
        title,
        content,
        tags: tags.split(",").map((tag) => tag.trim()),
      },
    });

    revalidatePath("/journal");
    return toFormState("SUCCESS", "Journal entry created successfully!");
  } catch (error: unknown) {
    return fromErrorToState(error);
  }
}
