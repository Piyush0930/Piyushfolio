import React from "react";
import { projects } from "@/lib/data";
import { ProjectCard } from "./project-card";

export const Projects = () => {
  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="mb-12 text-center">
        <h2 className="font-headline text-4xl font-bold lg:text-5xl">
          My Projects
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Here are some of the projects I&apos;ve worked on, showcasing my
          skills and passion for development.
        </p>
      </div>
      <div className="grid auto-rows-[22rem] grid-cols-1 gap-4 md:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.title}
            project={project}
            className={
              i === 0 || i === 3 ? "md:col-span-2" : ""
            }
          />
        ))}
      </div>
    </section>
  );
};
