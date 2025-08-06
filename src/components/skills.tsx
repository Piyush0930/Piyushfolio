import React from 'react';
import { skills } from '@/lib/data';
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
  return (
    <section id="skills" className="py-20 lg:py-32">
       <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold font-headline">My <span className="text-accent">Skills</span></h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          A collection of technologies and tools I'm proficient in.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((item, i) => (
          <div key={i} className="bg-card/50 backdrop-blur-sm p-6 rounded-lg flex flex-col items-center text-center">
            {iconMap[item.icon]}
            <h3 className="text-xl font-bold font-headline mt-4 mb-2">{item.category}</h3>
            <div className="flex flex-wrap gap-2 justify-center">
                {item.technologies.map((tech, j) => (
                  <Badge key={j} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
          </div>
        ))}
      </div>
    </section>
  );
}
