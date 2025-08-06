import React from "react";
import { experiences } from "@/lib/data.tsx";
import { Timeline } from "./ui/timeline";

export const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="text-center mb-10">
        <h2 className="text-4xl lg:text-5xl font-bold font-headline">My Experience</h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">A timeline of my professional journey.</p>
      </div>
      <Timeline items={experiences} />
    </section>
  );
};
