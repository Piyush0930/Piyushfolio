import React from "react";
import { projects } from "@/lib/data";
import { ProjectCard } from "./project-card";

export const Projects = () => {
  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="mb-12 text-center">
        <h2 className="font-headline text-4xl font-bold lg:text-5xl">
          My <span className="text-accent">Projects</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Here are some of the projects I've worked on, showcasing my
          skills and passion for development.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};