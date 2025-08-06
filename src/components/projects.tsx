import React from "react";
import { projects } from "@/lib/data";
import { HoverEffect } from "./ui/card-hover-effect";

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
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects.map(p => ({...p, link: p.demo || p.github || '#'}))} />
      </div>
    </section>
  );
};
