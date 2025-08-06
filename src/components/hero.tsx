"use client";

import { personalizeBio } from "@/ai/flows/personalize-bio";
import { socialLinks, userProfile } from "@/lib/data";
import { cn } from "@/lib/utils";
import React, { useState, useTransition } from "react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Sparkles, Download, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export function Hero() {
  const [tone, setTone] = useState("Professional");
  const [personalizedBio, setPersonalizedBio] = useState(userProfile.intro);
  const [isPending, startTransition] = useTransition();

  const handlePersonalize = () => {
    startTransition(async () => {
      try {
        const result = await personalizeBio({
          bio: userProfile.intro,
          tone: tone,
        });
        setPersonalizedBio(result.personalizedBio);
      } catch (error) {
        console.error("Failed to personalize bio:", error);
      }
    });
  };

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
            {isPending ? "Generating..." : personalizedBio}
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Select onValueChange={setTone} defaultValue={tone}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Select Tone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Professional">Professional</SelectItem>
                <SelectItem value="Casual">Casual</SelectItem>
                <SelectItem value="Friendly">Friendly</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={handlePersonalize} disabled={isPending} className="w-full sm:w-auto">
              <Sparkles className="mr-2 h-4 w-4" />
              Personalize with AI
            </Button>
          </div>
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
          {socialLinks.map(social => (
            <Link key={social.name} href={social.url} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <social.icon className="h-5 w-5" />
                <span className="sr-only">{social.name}</span>
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
