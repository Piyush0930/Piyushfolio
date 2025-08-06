import React from 'react';
import { skills } from '@/lib/data';
import { BentoGrid, BentoGridItem } from './ui/bento-grid';

export function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-32">
       <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold font-headline">My Skills</h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          A collection of technologies and tools I'm proficient in.
        </p>
      </div>
      <BentoGrid className="max-w-4xl mx-auto">
        {skills.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.category}
            description={
              <div className="flex flex-wrap gap-2 mt-2">
                {item.technologies.map((tech, j) => (
                  <span key={j} className="text-xs bg-muted text-muted-foreground rounded-full px-2 py-1">
                    {tech}
                  </span>
                ))}
              </div>
            }
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </section>
  );
}
