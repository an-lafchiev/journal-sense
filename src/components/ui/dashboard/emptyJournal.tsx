import Link from "next/link";
import { PlusCircle, BookOpen } from "lucide-react";

export default function EmptyJournal() {
  return (
    <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
      <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
        <BookOpen className="h-8 w-8 text-gray-400" />
      </div>
      <h3 className="text-lg font-medium mb-2">No journals yet</h3>
      <p className="text-gray-600 mb-6">
        Start writing your first journal entry
      </p>
      <Link
        href="/journal/new"
        className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
      >
        <PlusCircle className="h-4 w-4" />
        <span>Create Journal</span>
      </Link>
    </div>
  );
}
