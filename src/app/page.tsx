import Hero from "@/components/ui/home/hero";
import Features from "@/components/ui/home/features";
import Testimonials from "@/components/ui/home/testimonials";
import About from "@/components/ui/home/about";
import CTA from "@/components/ui/home/cta";
import Navigation from "@/components/ui/home/navigation";
import Footer from "@/components/ui/home/footer";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <Features />
        <About />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
