import { BookOpen } from "lucide-react";
import Link from "next/link";

export default function MobileSidebar() {
  return (
    <div className="md:hidden fixed top-0 left-0 right-0 z-10 bg-white border-b border-gray-200 p-4">
      <div className="flex items-center justify-between">
        <Link href="/journal" className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-teal-600" />
          <span className="text-xl font-bold">AI Journal</span>
        </Link>
        <div className="flex gap-4">
          <Link
            href="/journal"
            className="px-3 py-1 text-sm font-medium rounded-md bg-teal-50 text-teal-700"
          >
            Journals
          </Link>
          <Link
            href="/history"
            className="px-3 py-1 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50"
          >
            History
          </Link>
        </div>
      </div>
    </div>
  );
}
