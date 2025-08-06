import React from "react";
import { experiences } from "@/lib/data";
import { ExpandableCardList } from "./ui/expandable-card";

export const Experience = () => {
  return (
    <section id="experience" className="py-16 lg:py-24">
      <div className="text-center mb-10">
        <h2 className="text-4xl lg:text-5xl font-bold font-headline">My Experience</h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">A timeline of my professional journey. Click on an experience to learn more.</p>
      </div>
      <ExpandableCardList items={experiences} />
    </section>
  );
};
