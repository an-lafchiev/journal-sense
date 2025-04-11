import { prisma } from "@/lib/prisma";
import { getUserByClerkID } from "@/utils/auth";
import Link from "next/link";
import { PlusCircle, Search } from "lucide-react";
import JournalGrid from "@/components/ui/dashboard/journalGrid";

const getEntries = async () => {
  const user = await getUserByClerkID();
  const data = await prisma.journalEntry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      analysis: true,
    },
  });

  return data;
};

export default async function Page() {
  const journalEntries = await getEntries();

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold">My Journals</h1>
          <p className="text-gray-600 mt-1">
            Capture your thoughts and get AI insights
          </p>
        </div>

        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search journals..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
            />
          </div>

          <Link
            href="/journal/new"
            className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
          >
            <PlusCircle className="h-4 w-4" />
            <span>New Journal</span>
          </Link>
        </div>
      </div>
      <JournalGrid entries={journalEntries} />
    </div>
  );
}
