"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import type { Project, Experience, Education } from "@/lib/data.tsx";
import { Button } from "./button";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

type CardData = (Project | Experience | Education) & {
    src: string;
    content: React.ReactNode;
};


export function ExpandableCardList({ items }: { items: CardData[] }) {
  const [active, setActive] = useState<CardData | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${'title' in active ? active.title : active.degree}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${'title' in active ? active.title : active.degree}-${id}`}
              ref={ref}
              className="w-full max-w-[600px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-card sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${'title' in active ? active.title : active.degree}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={'title' in active ? active.title : active.degree}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${'title' in active ? active.title : active.degree}-${id}`}
                      className="font-bold text-foreground"
                    >
                      {'title' in active ? active.title : active.degree}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${'description' in active ? active.description : ('company' in active ? active.company: active.institution)}-${id}`}
                      className="text-muted-foreground"
                    >
                      {'description' in active ? active.description : ('company' in active ? active.company: active.institution)}
                    </motion.p>
                  </div>
                    <div className="flex gap-2">
                        {'github' in active && active.github && (
                            <Link href={active.github} target="_blank">
                                <Button size="icon" variant="outline"><Github/></Button>
                            </Link>
                        )}
                        {'demo' in active && active.demo && (
                            <Link href={active.demo} target="_blank">
                                <Button size="icon"><ExternalLink/></Button>
                            </Link>
                        )}
                    </div>

                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-muted-foreground text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((card) => {
            const cardTitle = 'title' in card ? card.title : card.degree;
            const cardDescription = 'description' in card ? card.description : ('company' in card ? card.company : card.institution);
            return (
                <motion.li
                    layoutId={`card-${cardTitle}-${id}`}
                    key={`card-${cardTitle}-${id}`}
                    onClick={() => setActive(card)}
                    className="p-4 flex flex-col items-center text-center bg-card hover:bg-card/90 rounded-xl cursor-pointer"
                >
                    <motion.div layoutId={`image-${cardTitle}-${id}`}>
                        <img
                        width={100}
                        height={100}
                        src={card.src}
                        alt={cardTitle}
                        className="h-24 w-24 rounded-lg object-cover"
                        />
                    </motion.div>
                    <div className="mt-4">
                        <motion.h3
                        layoutId={`title-${cardTitle}-${id}`}
                        className="font-medium text-foreground"
                        >
                        {cardTitle}
                        </motion.h3>
                        <motion.p
                        layoutId={`description-${cardDescription}-${id}`}
                        className="text-muted-foreground"
                        >
                        {cardDescription}
                        </motion.p>
                    </div>
                    <motion.button
                    layoutId={`button-${cardTitle}-${id}`}
                    className="px-4 py-2 text-sm rounded-full font-bold bg-primary/80 hover:bg-primary text-primary-foreground mt-4"
                    >
                        Learn More
                    </motion.button>
                </motion.li>
            )
        })}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
