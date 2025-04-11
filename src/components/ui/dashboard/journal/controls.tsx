"use client";
import deleteJournalEntry from "@/actions/deleteJournalEntry";
import { Button } from "@/components/forms";
import { Edit, Trash2 } from "lucide-react";

export default function Controls({ entryId }: { entryId: string }) {
  return (
    <div className="flex items-center gap-3">
      <Button
        text="Edit"
        icon={<Edit className="h-4 w-4" />}
        className="inline-flex items-center gap-2 px-3 py-1.5 border border-gray-300 rounded-md text-sm hover:bg-gray-50 cursor-pointer"
      />
      <Button
        icon={<Trash2 className="h-4 w-4" />}
        text="Delete"
        onClick={async () => await deleteJournalEntry(entryId)}
        className="inline-flex items-center gap-2 px-3 py-1.5 border border-red-200 rounded-md text-sm text-red-600 hover:bg-red-50 cursor-pointer"
      />
    </div>
  );
}
