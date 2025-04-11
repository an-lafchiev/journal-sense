import { JournalEntry } from "@/generated/prisma";

export default function Tags({ tags }: { tags: JournalEntry["tags"] }) {
  if (!tags.length) {
    return null;
  }
  return (
    <div className="mt-6 pt-6 border-t border-gray-100">
      <h3 className="text-sm font-medium text-gray-500 mb-2">Tags</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}
