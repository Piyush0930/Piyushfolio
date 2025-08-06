"use client";

import { socialLinks, userProfile } from "@/lib/data";
import React from "react";
import { Button } from "./ui/button";
import { Download, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

const iconMap: { [key: string]: React.ElementType } = {
  Linkedin,
  Github,
};

export function Hero() {
  return (
    <section id="home" className="py-8">
       <BackgroundBeamsWithCollision className="absolute top-0 left-0 w-full h-full z-0" />
      <div className="relative z-10 text-center mt-20 mb-16">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center mx-auto">
          <TextGenerateEffect
            words={userProfile.name}
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider my-4 text-sm md:text-lg lg:text-2xl">
            {userProfile.title}
          </p>
        </div>

        <div className="mt-8 max-w-3xl mx-auto">
          <p className="text-muted-foreground leading-relaxed">
            {userProfile.intro}
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="/Piyush_Patil_Resume.pdf"
            download
          >
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
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
