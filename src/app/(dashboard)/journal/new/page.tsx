"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { ArrowLeft, Save } from "lucide-react";
import { InputField, TextAreaField } from "@/components/forms";
import { SubmitButton } from "@/components/forms/submit-button";
import { createJournalEntry } from "@/actions/createJournalEntry";
import { EMPTY_FORM_STATE } from "@/utils/form";

export default function NewJournalPage() {
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
        <h1 className="text-2xl font-bold">New Journal Entry</h1>
      </div>

      <section className="bg-white p-6 rounded-lg border border-gray-200">
        <CreateJournalForm />
      </section>
    </div>
  );
}

function CreateJournalForm() {
  const [{ status, fieldErrors }, formAction] = useActionState(
    createJournalEntry,
    EMPTY_FORM_STATE
  );
  const router = useRouter();

  useEffect(() => {
    if (status === "SUCCESS") {
      router.push("/journal");
    }
  }, [status, router]);

  return (
    <form className="space-y-6" action={formAction}>
      <InputField
        label="Title"
        id="title"
        required
        aria-invalid={!!fieldErrors["title"]?.length}
        minLength={5}
        placeholder="Give your journal entry a title"
      />
      <TextAreaField
        label="Journal Entry"
        id="content"
        minLength={10}
        aria-invalid={!!fieldErrors["content"]?.length}
        required
        placeholder="Write your thoughts here..."
      />
      <InputField
        label="Tags (separated by commas)"
        id="tags"
        placeholder="e.g., work, reflection, goals"
      />

      <SubmitButton text="Save Journal" icon={<Save className="h-4 w-4" />} />
    </form>
  );
}
