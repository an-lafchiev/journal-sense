import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { ArrowRight } from "lucide-react";
import HomeData from "@/../public/content_home.json";

export default async function Hero() {
  const { userId } = await auth();
  const href = userId ? "/journal" : "/new-user";

  const heroData = HomeData.hero_section;

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">
          {heroData.title}
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          {heroData.description}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href={href}
            className="px-6 py-3 rounded-md bg-teal-600 text-white hover:bg-teal-700 font-medium flex items-center justify-center"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="#about"
            className="px-6 py-3 rounded-md border border-gray-300 hover:bg-gray-50 font-medium"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
