import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { navItems, socialLinks, userProfile, projects } from "@/lib/data";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  Globe,
  Code,
  GraduationCap,
  Briefcase,
  Mails,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  const featuredProjects = projects.slice(0, 2);

  const items = [
    {
      title: userProfile.name,
      description: userProfile.title,
      className: "md:col-span-2",
      header: (
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold font-headline">{userProfile.name}</h1>
          <p className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
            {userProfile.title}
          </p>
        </div>
      ),
      icon: <Globe className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Skills",
      description: "A collection of my technical skills.",
      className: "md:col-span-1",
      header: <SkillsHeader />,
      icon: <Code className="h-4 w-4 text-neutral-500" />,
    },
    ...featuredProjects.map((project, i) => ({
      title: project.title,
      description: project.description,
      className: "md:col-span-1",
      header: <ProjectHeader project={project} />,
      icon: <Briefcase className="h-4 w-4 text-neutral-500" />,
    })),
    {
      title: "Education",
      description: "My academic journey.",
      className: "md:col-span-1",
      header: <EducationHeader />,
      icon: <GraduationCap className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Get in Touch",
      description: "Let's build something amazing together.",
      className: "md:col-span-2",
      header: <ContactHeader />,
      icon: <Mails className="h-4 w-4 text-neutral-500" />,
    },
  ];

  return (
    <main className="relative bg-background flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Header navItems={navItems} />
        <div className="py-20">
          <BentoGrid className="max-w-4xl mx-auto">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                className={item.className}
                icon={item.icon}
              />
            ))}
          </BentoGrid>
        </div>
        <Footer socialLinks={socialLinks} />
      </div>
    </main>
  );
}

const SkillsHeader = () => (
  <div className="flex flex-col gap-4 h-full">
    <h3 className="text-xl font-bold font-headline">Skills</h3>
    <div className="flex flex-wrap gap-2">
      <span className="bg-blue-100/10 text-blue-300 text-xs px-2 py-1 rounded-full">React</span>
      <span className="bg-green-100/10 text-green-300 text-xs px-2 py-1 rounded-full">Node.js</span>
      <span className="bg-yellow-100/10 text-yellow-300 text-xs px-2 py-1 rounded-full">Next.js</span>
      <span className="bg-red-100/10 text-red-300 text-xs px-2 py-1 rounded-full">DevOps</span>
      <span className="bg-purple-100/10 text-purple-300 text-xs px-2 py-1 rounded-full">GenAI</span>
    </div>
    <Link href="/#skills" className="mt-auto text-sm flex items-center text-accent">
      View all skills <ArrowRight className="ml-1 w-4 h-4" />
    </Link>
  </div>
);

const ProjectHeader = ({ project }: { project: typeof projects[0] }) => (
  <div className="flex flex-col h-full">
    <Image src={project.image} alt={project.title} width={400} height={200} className="rounded-lg object-cover w-full h-32" data-ai-hint={project.aiHint} />
    <div className="flex flex-col flex-grow mt-2">
      <h3 className="text-lg font-bold font-headline mt-2">{project.title}</h3>
      <p className="text-sm text-muted-foreground flex-grow">{project.description}</p>
      <Link href="/#projects" className="mt-auto text-sm flex items-center text-accent">
        View all projects <ArrowRight className="ml-1 w-4 h-4" />
      </Link>
    </div>
  </div>
);

const EducationHeader = () => (
   <div className="flex flex-col gap-4 h-full">
    <h3 className="text-xl font-bold font-headline">Education</h3>
    <p className="text-muted-foreground text-sm">BE in Information Technology from Zeal College of Engineering, Pune.</p>
     <Link href="/#education" className="mt-auto text-sm flex items-center text-accent">
      View details <ArrowRight className="ml-1 w-4 h-4" />
    </Link>
  </div>
);

const ContactHeader = () => (
   <div className="flex flex-col gap-4 h-full">
    <h3 className="text-xl font-bold font-headline">Ready to Collaborate?</h3>
    <p className="text-muted-foreground text-sm">I'm currently available for freelance work and open to discussing new projects. Let's connect!</p>
    <div className="mt-auto">
      <a href="mailto:piyushpatil922004@gmail.com">
        <Button>
          Email Me <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </a>
    </div>
  </div>
);
