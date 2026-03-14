"use client";

import { motion, LazyMotion, domAnimation } from "framer-motion";
import { RiTimeLine } from "react-icons/ri";
import TimelineItem from "./timeline-item";
import { TimelineProps } from "@/types/types";

export default function Timeline({ title, subtitle, items }: TimelineProps) {
  return (
    <LazyMotion features={domAnimation}>
      <section className="w-full max-w-2xl mx-auto px-4 py-12">
        {(title || subtitle) && (
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            suppressHydrationWarning
          >
            {title && (
              <div className="flex items-center gap-2.5 mb-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-sky-50 border border-sky-100 text-sky-500">
                  <RiTimeLine size={16} />
                </span>
                <h2 className="text-xl font-bold tracking-tight text-slate-800">
                  {title}
                </h2>
              </div>
            )}
            {subtitle && (
              <p className="text-sm text-slate-400 ml-[2.625rem] leading-relaxed">
                {subtitle}
              </p>
            )}
            <div className="mt-6 ml-[2.625rem] h-px bg-gradient-to-r from-slate-200 via-sky-100 to-transparent" />
          </motion.div>
        )}

        <div>
          {items.map((item, index) => (
            <TimelineItem
              key={index}
              title={item.title}
              content={item.content}
              date={item.date}
              icon={item.icon}
              isLast={index === items.length - 1}
              index={index}
            />
          ))}
        </div>
      </section>
    </LazyMotion>
  );
}
