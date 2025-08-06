import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import type { SocialLink } from "@/lib/data.tsx";
import { Linkedin, Github } from "lucide-react";


export function Footer({ socialLinks }: { socialLinks: SocialLink[] }) {
  return (
    <footer className="w-full pt-20 pb-10" id="footer">
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light text-muted-foreground">
          Copyright © {new Date().getFullYear()} Piyush Patil
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialLinks.map((profile) => {
            return (
              <Link
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon">
                   <div className="h-5 w-5 text-muted-foreground hover:text-accent transition-colors">
                     {profile.icon}
                   </div>
                </Button>
              </Link>
            )
          })}
        </div>
      </div>
    </footer>
  );
};
