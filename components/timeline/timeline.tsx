"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import TimelineItem from "./timeline-item";

export interface TimelineEntry {
  title: string;
  content: ReactNode;
  date: string;
}

export interface TimelineProps {
  title: string;
  items: TimelineEntry[];
}

export default function Timeline({ title, items }: TimelineProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-10 sm:px-6 sm:py-12">
      <motion.header
        className="mb-8 sm:mb-10"
        initial={reduceMotion ? false : { opacity: 0, y: -14 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={
          reduceMotion
            ? undefined
            : { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
        }
      >
        <div className="flex items-center gap-3 mb-1.5">
          <h2 className="text-lg font-bold tracking-tight text-slate-800 sm:text-xl">
            {title}
          </h2>
        </div>

        <div className="mt-4 h-px bg-gradient-to-r from-sky-200 via-slate-200 to-transparent sm:mt-6 sm:ml-11" />
      </motion.header>

      <ol className="space-y-1 sm:space-y-0">
        {items.map((item, index) => (
          <TimelineItem
            key={index}
            title={item.title}
            content={item.content}
            date={item.date}
            isLast={index === items.length - 1}
          />
        ))}
      </ol>
    </section>
  );
}
