import { Prisma } from "@/generated/prisma";
import { moodEmojis } from "@/lib/constants";

export default function Analysis({
  entry,
}: {
  entry: Prisma.JournalEntryGetPayload<{ include: { analysis: true } }>;
}) {
  if (!entry.analysis) {
    return null;
  }

  return (
    <div className="lg:col-span-1">
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h2 className="text-lg font-medium mb-4">AI Insights</h2>
        <h3 className="text-md font-medium text-gray-500 mb-2">
          {entry.analysis.subject}
        </h3>
        <ul className="space-y-4">
          {entry.analysis.summary.map((insight, index) => (
            <li key={index} className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center text-teal-600">
                <span className="text-xs font-medium">{index + 1}</span>
              </div>
              <p className="text-sm text-gray-600">{insight}</p>
            </li>
          ))}
        </ul>

        <div className="mt-6 pt-6 border-t border-gray-100">
          <h3 className="text-sm font-medium text-gray-500 mb-2">
            Mood Analysis
          </h3>
          <div className="flex items-center gap-2 mb-4">
            <div className="text-2xl">
              {moodEmojis[entry.analysis.mood as keyof typeof moodEmojis]}
            </div>
            <div>
              <p className="text-sm font-medium">{entry.analysis.mood}</p>
              <p className="text-xs text-gray-500">Primary emotion detected</p>
            </div>
          </div>

          <div className="w-full bg-gray-100 rounded-full h-2.5 mb-2">
            <div
              className=" h-2.5 rounded-full"
              style={{ width: "100%%", background: entry.analysis.color }}
            ></div>
          </div>
          <h3 className="text-sm font-medium text-gray-500 mb-2">
            Sentiment score {entry.analysis.sentimentScore}
          </h3>
          <h3 className="text-sm font-medium text-gray-500 mb-2">
            Overall {entry.analysis.negative ? "Negative" : "Positive"}
          </h3>
        </div>
      </div>
    </div>
  );
}
