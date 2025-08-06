import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { education } from '@/lib/data';
import { GraduationCap } from 'lucide-react';

export const Education = () => {
  return (
    <section id="education" className="py-16 lg:py-24">
      <div className="text-center mb-10">
        <h2 className="text-4xl lg:text-5xl font-bold font-headline">My Education</h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          My academic journey and milestones.
        </p>
      </div>
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-6 top-0 w-0.5 h-full bg-border -translate-x-1/2"></div>
        {education.map((item, index) => (
          <div key={index} className="relative pl-16 mb-12">
            <div className="absolute left-6 top-1 -translate-x-1/2 w-10 h-10 bg-background rounded-full border-4 border-background flex items-center justify-center">
               <div className="w-4 h-4 bg-primary rounded-full"></div>
            </div>
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="font-headline text-xl">{item.degree}</CardTitle>
                    <CardDescription>{item.institution}</CardDescription>
                  </div>
                  <div className="text-sm text-muted-foreground text-right">
                    {item.period}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.details}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
