"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

export interface TimelineItemProps {
  title: string;
  content: ReactNode;
  date: string;
  isLast?: boolean;
}

export default function TimelineItem({
  title,
  content,
  date,
  isLast = false,
}: TimelineItemProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.li
      className="relative flex gap-3 sm:gap-5 group list-none"
      whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
      initial={reduceMotion ? false : { opacity: 0, x: -20 }}
      viewport={
        reduceMotion ? undefined : { once: true, margin: "-60px", amount: 0 }
      }
      transition={
        reduceMotion
          ? undefined
          : {
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }
      }
    >
      <div className="relative flex flex-col items-center shrink-0">
        <div className="mt-2 size-1.5 shrink-0 rounded-full bg-sky-300 z-10 sm:size-2" />
        {!isLast && (
          <div className="mt-1 flex-1 w-px bg-gradient-to-b from-slate-200 via-slate-100 to-transparent" />
        )}
      </div>

      <div className="pb-10 flex-1 min-w-0">
        <p className="mb-2 inline-flex items-center rounded-full border border-sky-100 px-2.5 py-0.5 text-xs font-semibold text-sky-500 sm:px-3 sm:text-sm">
          {date}
        </p>

        <motion.div className="relative overflow-hidden rounded-2xl border border-slate-100 bg-white px-4 py-3 sm:px-5 sm:py-4">
          <h3 className="mb-1 text-sm font-semibold text-slate-800 sm:text-base">
            {title}
          </h3>
          <div className="text-sm text-slate-500 leading-relaxed">
            {content}
          </div>
        </motion.div>
      </div>
    </motion.li>
  );
}
