import React from 'react';
import { skills } from '@/lib/data.tsx';
import { Badge } from './ui/badge';
import {
  Code,
  Laptop,
  Database,
  Cloud,
  BarChart2,
  Cpu,
  Bot,
  Wrench,
} from "lucide-react";
import { HoverEffect } from './ui/card-hover-effect';

const iconMap: { [key: string]: React.ReactElement } = {
  Code: <Code className="w-8 h-8 text-accent" />,
  Laptop: <Laptop className="w-8 h-8 text-accent" />,
  Database: <Database className="w-8 h-8 text-accent" />,
  Cloud: <Cloud className="w-8 h-8 text-accent" />,
  BarChart2: <BarChart2 className="w-8 h-8 text-accent" />,
  Cpu: <Cpu className="w-8 h-8 text-accent" />,
  Bot: <Bot className="w-8 h-8 text-accent" />,
  Wrench: <Wrench className="w-8 h-8 text-accent" />,
};

export function Skills() {
  const skillItems = skills.map((skill, index) => ({
    title: (
      <div className="flex flex-col items-center text-center">
        {iconMap[skill.icon]}
        <h3 className="text-xl font-bold font-headline mt-4 mb-2">{skill.category}</h3>
      </div>
    ),
    description: (
      <div className="flex flex-wrap gap-2 justify-center">
        {skill.technologies.map((tech, j) => (
          <Badge key={j} variant="secondary">
            {tech}
          </Badge>
        ))}
      </div>
    ),
  }));

  return (
    <section id="skills" className="py-20">
       <div className="text-center mb-8">
        <h2 className="text-4xl lg:text-5xl font-bold font-headline">My <span className="text-accent">Skills</span></h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          A collection of technologies and tools I'm proficient in.
        </p>
      </div>
      <div className="max-w-5xl mx-auto">
        <HoverEffect items={skillItems} />
      </div>
    </section>
  );
}
