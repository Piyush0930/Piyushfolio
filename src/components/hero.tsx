
"use client";

import { socialLinks, userProfile } from "@/lib/data.tsx";
import React from "react";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { FloatingDock } from "./ui/floating-dock";

export function Hero() {
  const dockItems = socialLinks.map(link => ({
    title: link.name,
    icon: link.icon,
    href: link.url
  }));
  return (
    <section id="home" className="py-20">
      <BackgroundBeamsWithCollision className="absolute top-0 left-0 w-full h-full z-0" />
      <div className="relative z-10 text-center mt-12 mb-4">
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

        <div className="mt-10 flex flex-col items-center gap-8">
          <a
            href="/Piyush_Patil_Resume.pdf"
            download
          >
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </a>
          <FloatingDock items={dockItems} />
        </div>
      </div>
    </section>
  );
}
