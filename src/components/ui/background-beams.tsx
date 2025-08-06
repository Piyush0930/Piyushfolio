"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBeams = React.memo(
  ({ className }: { className?: string }) => {
    return (
      <div
        className={cn(
          "absolute -z-10 top-0 left-0 w-full h-full",
          className
        )}
      >
      </div>
    );
  },
);

BackgroundBeams.displayName = "BackgroundBeams";
