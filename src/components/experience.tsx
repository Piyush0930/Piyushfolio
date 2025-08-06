import React from "react";
import { experiences } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold font-headline">My Experience</h2>
        <p className="text-muted-foreground mt-4">A timeline of my professional journey and contributions.</p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-6 top-0 w-0.5 h-full bg-border"></div>
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-16 mb-12">
            <div className="absolute left-6 top-1 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
            <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-xl">{exp.title}</CardTitle>
                <CardDescription>{exp.company}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {exp.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
