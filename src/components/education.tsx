import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { education } from '@/lib/data';

export const Education = () => {
  return (
    <section id="education" className="py-20 lg:py-32">
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold font-headline">Education</h2>
        <p className="text-muted-foreground mt-4">My academic journey.</p>
      </div>
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border"></div>
        <div className="space-y-12">
          {education.map((item, index) => (
            <div key={item.degree} className="relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
              <Card className={`w-[calc(50%-2rem)] ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{item.degree}</CardTitle>
                  <CardDescription>{item.institution}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.period}</p>
                  <p className="mt-2">{item.details}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
