import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { navItems, socialLinks } from "@/lib/data";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-clip mx-auto">
      <div className="w-full">
        <Header navItems={navItems} />
        <Hero />
        <div className="px-5 sm:px-10">
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
          <Footer socialLinks={socialLinks} />
        </div>
      </div>
    </main>
  );
}
