import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { auth } from "@clerk/nextjs/server";

import HomeData from "@/../public/content_home.json";

export default async function CTA() {
  const { userId } = await auth();
  const href = userId ? "/journal" : "/new-user";

  const ctaData = HomeData.call_to_action;
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-teal-600 text-white rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">{ctaData.title}</h2>
          <p className="max-w-2xl mx-auto mb-8">{ctaData.description}</p>
          <Link
            href={href}
            className="inline-block px-6 py-3 rounded-md bg-white text-teal-600 hover:bg-gray-100 font-medium"
          >
            {ctaData.button.text}
            <ArrowRight className="ml-2 h-4 w-4 inline" />
          </Link>
        </div>
      </div>
    </section>
  );
}
