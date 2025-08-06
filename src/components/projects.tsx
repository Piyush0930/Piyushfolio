import React from "react";
import { projects } from "@/lib/data";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import Image from "next/image";

export const Projects = () => {
  return (
    <section id="projects" className="py-16 lg:py-24">
      <div className="mb-10 text-center">
        <h2 className="font-headline text-4xl font-bold lg:text-5xl">
          My <span className="text-accent">Projects</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Here are some of the projects I've worked on, showcasing my
          skills and passion for development.
        </p>
      </div>
      <BentoGrid className="max-w-4xl mx-auto">
        {projects.map((project, i) => (
          <BentoGridItem
            key={i}
            title={project.title}
            description={project.description}
            header={
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={200}
                className="flex-1 w-full h-full object-cover rounded-xl"
                data-ai-hint={`${project.title.split(' ')[0].toLowerCase()}`}
              />
            }
            className={i === 2 || i === 5 ? "md:col-span-2" : ""}
            github={project.github}
            demo={project.demo}
            tech={project.tech}
          />
        ))}
      </BentoGrid>
    </section>
  );
};
