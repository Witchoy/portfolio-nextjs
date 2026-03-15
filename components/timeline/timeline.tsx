"use client";

import { ReactNode } from "react";
import { motion } from "motion/react";
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
  return (
    <section className="w-full max-w-2xl mx-auto px-4 py-12">
      <motion.header
        className="mb-10"
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center gap-3 mb-1.5">
          <h2 className="text-xl font-bold tracking-tight text-slate-800">
            {title}
          </h2>
        </div>

        <div className="mt-6 ml-11 h-px bg-gradient-to-r from-sky-200 via-slate-200 to-transparent" />
      </motion.header>

      <ol>
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
