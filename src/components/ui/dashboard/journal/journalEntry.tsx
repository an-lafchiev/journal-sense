import { Prisma } from "@prisma/client";
import { Calendar, Clock } from "lucide-react";
import Tags from "./tags";
import { moodEmojis } from "@/lib/constants";

export default function JournalEntry({
  entry,
}: {
  entry: Prisma.JournalEntryGetPayload<{ include: { analysis: true } }>;
}) {
  const mood = entry.analysis?.mood || "Neutral";
  return (
    <div className="lg:col-span-2">
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center text-gray-500 text-sm">
              <Calendar className="h-4 w-4 mr-1" />
              <span>
                {new Date(entry.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <Clock className="h-4 w-4 mr-1" />
              <span>{entry.createdAt.toTimeString().slice(0, 5)}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl" title={mood}>
              {moodEmojis[mood]}
            </span>
            <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
              {mood}
            </span>
          </div>
        </div>

        <div className="prose max-w-none">
          {entry.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>

        <Tags tags={entry.tags} />
      </div>
    </div>
  );
}
