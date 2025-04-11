import CurrentUser from "@/components/ui/dashboard/currentUser";
import { BookOpen } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 hidden md:block">
      <div className="h-full flex flex-col">
        <div className="p-6 border-b">
          <Link href="/journal" className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-teal-600" />
            <span className="text-xl font-bold">JournalSense</span>
          </Link>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-1">
            <li>
              <Link
                href="/journal"
                className="flex items-center px-4 py-3 text-sm font-medium rounded-md bg-teal-50 text-teal-700"
              >
                Journals
              </Link>
            </li>
            <li>
              <Link
                href="/history"
                className="flex items-center px-4 py-3 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50"
              >
                History
              </Link>
            </li>
          </ul>
        </nav>
        <CurrentUser />
      </div>
    </aside>
  );
}
