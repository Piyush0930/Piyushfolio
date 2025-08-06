import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import type { SocialLink } from "@/lib/data";
import { Linkedin, Github } from "lucide-react";

const iconMap: { [key: string]: React.ElementType } = {
  Linkedin,
  Github,
};

export function Footer({ socialLinks }: { socialLinks: Omit<SocialLink, 'icon'> & { icon: string }[] }) {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
          data-ai-hint="footer grid"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="font-headline text-4xl lg:text-5xl font-bold text-center max-w-2xl">
          Ready to build something amazing?
        </h1>
        <p className="text-muted-foreground mt-5 my-10 text-center">
          Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
        </p>
        <a href="mailto:piyushpatil922004@gmail.com">
          <Button>Get in Touch</Button>
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © {new Date().getFullYear()} Piyush Patil
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialLinks.map((profile) => {
            const Icon = iconMap[profile.icon as string];
            return Icon ? (
              <Link
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon">
                  <Icon className="h-5 w-5" />
                </Button>
              </Link>
            ) : null;
          })}
        </div>
      </div>
    </footer>
  );
};
