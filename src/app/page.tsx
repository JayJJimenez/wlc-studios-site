import { AboutSection } from "@/components/AboutSection";
import { AgentsSection } from "@/components/AgentsSection";
import { ContactSection } from "@/components/ContactSection";
import { HeroSection } from "@/components/HeroSection";
import { ManifestoSection } from "@/components/ManifestoSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ServicesSection } from "@/components/ServicesSection";
import { SiteNav } from "@/components/SiteNav";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <ScrollProgress />
      <SiteNav />
      <main className="relative">
        <HeroSection />
        <ManifestoSection />
        <ServicesSection />
        <AgentsSection />
        <ProcessSection />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
}
