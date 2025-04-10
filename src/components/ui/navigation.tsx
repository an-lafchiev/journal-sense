import Link from "next/link";
import { BookOpen } from "lucide-react";

export default function Navigation() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-teal-600" />
          <span className="text-xl font-bold">JournalSense</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 flex-1 mx-10">
          <Link
            href="#features"
            className="text-sm font-medium hover:text-teal-600 transition-colors"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-medium hover:text-teal-600 transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium hover:text-teal-600 transition-colors"
          >
            Testimonials
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="/signin"
            className="text-sm font-medium px-4 py-2 rounded-md hover:bg-gray-100"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="text-sm font-medium px-4 py-2 rounded-md bg-teal-600 text-white hover:bg-teal-700"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
