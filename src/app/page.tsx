import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { navItems, socialLinks } from "@/lib/data.tsx";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <main className="relative bg-background flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
      <div className="max-w-7xl w-full relative z-10">
        <Header navItems={navItems} />
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer socialLinks={socialLinks} />
      </div>
    </main>
  );
}
