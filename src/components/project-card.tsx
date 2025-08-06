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
    <Card className={cn("flex flex-col overflow-hidden h-full group", className)}>
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          data-ai-hint={project.aiHint}
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow">
        <p className="text-muted-foreground text-sm mb-4 flex-grow">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 5).map((tech, index) => (
            <Badge key={index} variant="secondary">
              {tech}
            </Badge>
          ))}
          {project.tech.length > 5 && (
            <Badge variant="secondary">+{project.tech.length - 5} more</Badge>
          )}
        </div>
        <div className="mt-auto flex gap-2">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </Link>
          )}
          {project.demo && (
            <Link href={project.demo} target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="sm">
                <ExternalLink className="mr-2 h-4 w-4" />
                Demo
              </Button>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
