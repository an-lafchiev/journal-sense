import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { ArrowLeft } from "lucide-react";
import { getUserByClerkID } from "@/utils/auth";
import { redirect } from "next/navigation";
import Analysis from "@/components/ui/dashboard/journal/analysis";
import JournalEntry from "@/components/ui/dashboard/journal/journalEntry";
import Controls from "@/components/ui/dashboard/journal/controls";

async function getEntry(id: string) {
  const user = await getUserByClerkID();
  const entry = await prisma.journalEntry.findUnique({
    where: {
      userId_id: {
        userId: user.id,
        id,
      },
    },
    include: {
      analysis: true,
    },
  });

  return entry;
}

export default async function JournalPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const journalEntry = await getEntry(id);
  if (!journalEntry) {
    redirect("/journal");
  }

  return (
    <div>
      <div className="mb-6">
        <Link
          href="/journal"
          className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-teal-600 mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Journals
        </Link>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h1 className="text-2xl font-bold">{journalEntry.title}</h1>
          <Controls entryId={id} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <JournalEntry entry={journalEntry} />
        <Analysis entry={journalEntry} />
      </div>
    </div>
  );
}
