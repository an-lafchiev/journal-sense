import Link from "next/link";
import EmptyJournal from "./emptyJournal";
import { Prisma } from "@/generated/prisma";
import { moodEmojis } from "@/lib/constants";

interface JournalGridProps {
  entries: Prisma.JournalEntryGetPayload<{ include: { analysis: true } }>[];
}

export default function JournalGrid({ entries }: JournalGridProps) {
  if (!entries.length) {
    return <EmptyJournal />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {entries.map((entry) => (
        <Link href={`/journal/${entry.id}`} key={entry.id}>
          <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-semibold text-lg">{entry.title}</h3>
              <span className="text-xl" title={entry.analysis?.mood}>
                {moodEmojis[entry.analysis?.mood as keyof typeof moodEmojis]}
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {entry.content}
            </p>
            <div className="flex justify-between items-center text-xs text-gray-500">
              <span>
                {new Date(entry.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
              <span className="px-2 py-1 bg-gray-100 rounded-full">
                {entry.analysis?.mood}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
