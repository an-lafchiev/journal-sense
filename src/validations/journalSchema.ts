import { z } from "zod";

export const journalSchema = z.object({
  title: z.string().min(5, "Title must contain at least 5 characters"),
  content: z.string().min(10, "Content must contain at least 10 characters"),
  tags: z.string(),
});
