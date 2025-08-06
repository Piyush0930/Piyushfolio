import React from 'react';
import { education } from '@/lib/data.tsx';
import { ExpandableCardList } from './ui/expandable-card';


export const Education = () => {
  return (
    <section id="education" className="py-16 lg:py-24">
      <div className="text-center mb-10">
        <h2 className="text-4xl lg:text-5xl font-bold font-headline">My Education</h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          My academic journey and milestones. Click on an item to learn more.
        </p>
      </div>
      <ExpandableCardList items={education} />
    </section>
  );
};
