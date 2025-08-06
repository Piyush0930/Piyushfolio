import React from "react";
import { projects } from "@/lib/data.tsx";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

export const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="mb-10 text-center">
        <h2 className="font-headline text-4xl font-bold lg:text-5xl">
          My <span className="text-accent">Projects</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Here are some of the projects I've worked on, showcasing my skills and
          passion for development.
        </p>
      </div>
      <BentoGrid>
        {projects.map((project, i) => (
          <BentoGridItem
            key={i}
            title={project.title}
            description={project.description}
            tech={project.tech}
            github={project.github}
            demo={project.demo}
            className=""
          />
        ))}
      </BentoGrid>
    </section>
  );
};
