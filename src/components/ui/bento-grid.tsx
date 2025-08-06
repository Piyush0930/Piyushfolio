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
  tech,
  github,
  demo,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  tech?: string[];
  github?: string;
  demo?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 transform hover:scale-105",
        className
      )}
    >
      <div className="group-hover/bento:translate-x-2 transition duration-200 flex-grow flex flex-col justify-between">
        <div>
          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
            {title}
          </div>
          <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
            {description}
          </div>
        </div>
        <div>
          <div className="flex flex-wrap gap-2 my-4">
            {tech?.map((techItem, index) => (
              <Badge key={index} variant="secondary">
                {techItem}
              </Badge>
            ))}
          </div>
          <div className="flex gap-2 mt-auto">
            {github && (
              <Link
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm" className="w-full">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </Link>
            )}
            {demo && (
              <Link href={demo} target="_blank" rel="noopener noreferrer">
                <Button variant="default" size="sm" className="w-full">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
