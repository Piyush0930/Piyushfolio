"use client";

import { socialLinks, userProfile } from "@/lib/data";
import React from "react";
import { Button } from "./ui/button";
import { Download, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const iconMap: { [key: string]: React.ElementType } = {
  Linkedin,
  Github,
};

export function Hero() {
  return (
    <section id="home" className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      
      <div className="relative z-10 text-center my-20">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center mx-auto">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </h2>

          <TextGenerateEffect words={userProfile.name} className="text-center text-[40px] md:text-5xl lg:text-6xl" />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
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
