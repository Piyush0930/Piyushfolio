"use client";

import { socialLinks, userProfile } from "@/lib/data";
import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "./ui/button";
import { Download, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const iconMap: { [key: string]: React.ElementType } = {
  Linkedin,
  Github,
};

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold font-headline bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          {userProfile.name}
        </h1>
        
        <TextGenerateEffect words={userProfile.title} className="mt-4 text-accent" />

        <div className="mt-8 max-w-3xl mx-auto">
          <p className="text-muted-foreground leading-relaxed">
            {userProfile.intro}
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="/Piyush_Patil_Resume.pdf"
            download
            className={cn(
              "inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
              "bg-primary text-primary-foreground hover:bg-primary/90",
              "px-4 py-2"
            )}
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
          {socialLinks.map((social) => {
            const Icon = iconMap[social.icon as string];
            return Icon ? (
              <Link key={social.name} href={social.url} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon">
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </Button>
              </Link>
            ) : null
          })}
        </div>
      </div>
    </section>
  );
}
