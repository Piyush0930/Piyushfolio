import React from 'react';
import { education } from '@/lib/data.tsx';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';


export const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="text-center mb-10">
        <h2 className="text-4xl lg:text-5xl font-bold font-headline">My Education</h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          My academic journey and milestones.
        </p>
      </div>
      <div className="max-w-4xl mx-auto space-y-8">
        {education.map((edu, index) => (
          <Card key={index} className="overflow-hidden transform hover:scale-105 transition-transform duration-300">
             <CardHeader className="flex flex-row items-start bg-card/90 p-4">
                <div className="bg-accent/20 p-3 rounded-full mr-4">
                    <GraduationCap className="w-6 h-6 text-accent" />
                </div>
                <div>
                    <CardTitle className="text-xl font-bold">{edu.degree}</CardTitle>
                    <CardDescription className="text-base text-accent">{edu.institution}</CardDescription>
                </div>
                <div className="ml-auto text-right">
                    <p className="text-sm text-muted-foreground font-medium">{edu.period}</p>
                    <p className="text-sm text-muted-foreground">{edu.details}</p>
                </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};
