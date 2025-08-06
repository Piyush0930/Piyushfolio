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
    <footer className="w-full pt-20 pb-10" id="footer">
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light text-muted-foreground">
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
                  <Icon className="h-5 w-5 text-muted-foreground hover:text-accent transition-colors" />
                </Button>
              </Link>
            ) : null;
          })}
        </div>
      </div>
    </footer>
  );
};
