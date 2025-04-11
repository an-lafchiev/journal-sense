"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { FormState, fromErrorToState, toFormState } from "@/utils/form";
import {
  journalEntryAnalysisSchema,
  journalSchema,
} from "@/validations/journalSchema";
import { getUserByClerkID } from "@/utils/auth";
import { analyzeJournalEntry } from "./analyzeJournalEntry";

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
    const newEntry = await prisma.journalEntry.create({
      data: {
        userId: user.id,
        title,
        content,
        tags: tags.split(",").map((tag) => tag.trim()),
      },
    });

    const analysisData = await analyzeJournalEntry(newEntry);
    const isAnalysisDataValid = await journalEntryAnalysisSchema.safeParseAsync(
      analysisData
    );

    if (isAnalysisDataValid.success) {
      const { mood, subject, negative, summary, color, sentimentScore } =
        isAnalysisDataValid.data;
      await prisma.journalEntry.update({
        where: { id: newEntry.id },
        data: {
          analysis: {
            create: {
              mood,
              userId: user.id,
              subject,
              negative,
              summary,
              color,
              sentimentScore,
            },
          },
        },
      });
    }

    revalidatePath("/journal");
    return toFormState("SUCCESS", "Journal entry created successfully!");
  } catch (error: unknown) {
    return fromErrorToState(error);
  }
}
