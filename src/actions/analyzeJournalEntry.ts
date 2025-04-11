"use server";
import { JournalEntry } from "@/generated/prisma";
import { openai } from "@/lib/openai";

export async function analyzeJournalEntry(entry: JournalEntry) {
  const response = await openai.responses.create({
    model: "gpt-4o-mini-2024-07-18",
    input: [
      {
        role: "system",
        content:
          "Analyze the following journal entry. Follow the intrusctions and format your response to match the format instructions, no matter what!",
      },
      { role: "user", content: entry.content },
    ],
    text: {
      format: {
        type: "json_schema",
        name: "journal_entry_analysis",
        schema: {
          type: "object",
          properties: {
            mood: {
              type: "string",
              enum: [
                "Happy",
                "Sad",
                "Angry",
                "Excited",
                "Stressed",
                "Thoughtful",
                "Calm",
              ],
              description:
                "The mood of the person who wrote the journal entry.",
            },
            subject: {
              type: "string",
              description: "The subject of the journal entry.",
            },
            negative: {
              type: "boolean",
              description:
                "Is the journal entry negative? (i.e. does it contain negative emotions?)",
            },
            summary: {
              type: "array",
              items: { type: "string" },
              description:
                "A with 1-4 quick insights about the entry. These insights should give advice or suggestions or something profound to the user based on the content of the entry.",
            },
            color: {
              type: "string",
              description:
                "A hexadecimal color code that represents the mood of the entry. With brighter colors for positive moods and darker colors for negative moods.",
            },
            sentimentScore: {
              type: "number",
              description:
                "Sentiment of the text, rated from -10 (extremely negative) to 10 (extremely positive).",
            },
          },
          required: [
            "mood",
            "subject",
            "negative",
            "summary",
            "color",
            "sentimentScore",
          ],
          additionalProperties: false,
        },
        strict: true,
      },
    },
  });

  const data = JSON.parse(response.output_text);
  return data;
}
