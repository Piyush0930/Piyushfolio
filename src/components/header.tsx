"use client";

import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, Code } from "lucide-react";
import type { NavItem } from "@/lib/data";

export function Header({ navItems }: { navItems: NavItem[] }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="flex-1 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Code className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">
              Piyush
            </span>
          </Link>
        </div>

        <div className="hidden md:flex flex-1 justify-center">
          <nav className="flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.link}
                href={item.link}
                className="text-sm font-medium text-muted-foreground transition-colors px-3 py-2 rounded-md hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-2 py-6">
                <Link href="/" className="flex items-center space-x-2 px-3 py-2">
                  <Code className="h-6 w-6" />
                  <span className="font-bold">
                    Piyush
                  </span>
                </Link>
                {navItems.map((item) => (
                  <Link
                    key={item.link}
                    href={item.link}
                    className="flex w-full items-center py-2 px-3 rounded-md text-lg font-semibold transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}