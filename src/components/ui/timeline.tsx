"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

type Experience = {
  title: string;
  company: string;
  period: string;
  tasks: string[];
};

export function Timeline({ items }: { items: Experience[] }) {
  return (
    <div className="relative">
      <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border"></div>
      {items.map((item, index) => (
        <div key={index} className="relative mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-background rounded-full border-2 border-accent flex items-center justify-center"
          >
            <Briefcase className="w-4 h-4 text-accent" />
          </motion.div>
          <div
            className={`flex items-center w-full ${
              index % 2 === 0 ? 'justify-start' : 'justify-end'
            }`}
          >
            <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`p-6 bg-card rounded-lg shadow-md ${
                  index % 2 === 0 ? 'text-right' : 'text-left'
                }`}
              >
                <h3 className="text-xl font-bold font-headline">{item.title}</h3>
                <p className="text-accent mb-2">{item.company}</p>
                <p className="text-muted-foreground text-sm mb-4">{item.period}</p>
                <ul className="space-y-2 text-muted-foreground">
                  {item.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
