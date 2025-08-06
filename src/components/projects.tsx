import React from "react";
import { projects } from "@/lib/data";
import { ProjectCard } from "./project-card";

export const Projects = () => {
  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold font-headline">My Projects</h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Here are some of the projects I&apos;ve worked on, showcasing my skills and passion for development.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};
