import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Hero from "@/components/ui/home/hero";
import Features from "@/components/ui/home/features";
import Testimonials from "@/components/ui/home/testimonials";
import About from "@/components/ui/home/about";
export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Features />
      <About />
      <Testimonials />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-teal-600 text-white rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to transform your journaling experience?
            </h2>
            <p className="max-w-2xl mx-auto mb-8">
              Join thousands of users who are discovering new insights about
              themselves through AI-powered journaling.
            </p>
            <Link
              href="/signup"
              className="inline-block px-6 py-3 rounded-md bg-white text-teal-600 hover:bg-gray-100 font-medium"
            >
              Get Started for Free
              <ArrowRight className="ml-2 h-4 w-4 inline" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
