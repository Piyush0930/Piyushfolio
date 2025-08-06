"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./button";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "./badge";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  github,
  demo,
  tech,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  github?: string;
  demo?: string;
  tech?: string[];
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div className="group-hover/bento:translate-x-2 transition duration-200 flex-grow flex flex-col justify-end">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 mb-4">
          {description}
        </div>
         <div className="flex flex-wrap gap-2 mb-4">
          {tech?.slice(0, 3).map((techItem, index) => (
            <Badge key={index} variant="secondary">
              {techItem}
            </Badge>
          ))}
          {tech && tech.length > 3 && (
            <Badge variant="secondary">+{tech.length - 3} more</Badge>
          )}
        </div>
        <div className="flex gap-2 mt-auto">
          {github && (
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </Link>
          )}
          {demo && (
            <Link href={demo} target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="sm">
                <ExternalLink className="mr-2 h-4 w-4" />
                Demo
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
