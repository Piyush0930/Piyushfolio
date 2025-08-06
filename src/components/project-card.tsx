import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/data";
import { cn } from "@/lib/utils";

export const ProjectCard = ({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "group/bento row-span-1 flex flex-col justify-between space-y-4 overflow-hidden rounded-xl border border-white/[0.2] bg-black p-4 shadow-input transition duration-200 hover:shadow-xl",
        className
      )}
    >
      <div>
        <div className="relative h-40 w-full overflow-hidden rounded-xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            data-ai-hint={project.aiHint}
          />
        </div>
        <div className="mt-4 font-sans font-bold text-neutral-200">
          {project.title}
        </div>
        <div className="font-sans text-xs font-normal text-neutral-300">
          {project.description}
        </div>
      </div>
      <div className="flex items-end justify-between">
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.tech.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{project.tech.length - 3}
            </Badge>
          )}
        </div>
        <div className="flex gap-2">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/[0.2] p-2 hover:bg-white/[0.1]"
            >
              <Github className="h-4 w-4" />
            </Link>
          )}
          {project.demo && (
            <Link
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/[0.2] p-2 hover:bg-white/[0.1]"
            >
              <ExternalLink className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
