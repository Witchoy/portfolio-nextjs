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
      className="relative flex gap-5 group list-none"
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
        <div className="size-2 rounded-full bg-sky-300 mt-2 shrink-0 z-10" />
        {!isLast && (
          <div className="flex-1 w-px mt-1 bg-gradient-to-b from-slate-200 via-slate-100 to-transparent" />
        )}
      </div>

      <div className="pb-10 flex-1 min-w-0">
        <p className="inline-flex items-center mb-2 font-semibold text-sky-500 border border-sky-100 rounded-full px-3 py-0.5">
          {date}
        </p>

        <motion.div className="relative rounded-2xl overflow-hidden border border-slate-100 bg-white px-5 py-4">
          <h3 className="text-sm font-semibold text-slate-800 mb-1">{title}</h3>
          <div className="text-sm text-slate-500 leading-relaxed">
            {content}
          </div>
        </motion.div>
      </div>
    </motion.li>
  );
}
