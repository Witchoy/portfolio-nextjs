"use client";

import Image from "next/image";
import {
  CodeIcon,
  CoffeeBeanIcon,
  CookieIcon,
  HandWavingIcon,
} from "@phosphor-icons/react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center">
      <div className="flex items-center gap-8">
        <div className="flex-1 text-slate-700 text-6xl">
          <p className="leading-snug">
            Hey{" "}
            <HandWavingIcon
              size={64}
              className="wave text-cyan-800 inline align-middle"
              weight="duotone"
            />{" "}
            I&apos;m{" "}
            <motion.strong
              className="text-cyan-800"
              whileHover={{ scale: 1.1 }}
              style={{ display: "inline-block" }}
            >
              Jules Goy
            </motion.strong>{" "}
            alias{" "}
            <motion.strong
              className="text-cyan-800"
              whileHover={{ scale: 1.1 }}
              style={{ display: "inline-block" }}
            >
              Witchoy
            </motion.strong>{" "}
            a Junior Software Developer.
          </p>
        </div>
        <Image
          src="/no_background_ai_slop.svg"
          width={1}
          height={1}
          alt="Placeholder ai slop image"
          className="w-1/3 hidden md:block"
        />
      </div>
      <section className="py-8">
        <div className="flex flex-col gap-3 text-slate-700">
          <h4 className="text-2xl font-medium flex items-center flex-wrap gap-1">
            Turning <strong>croissants</strong>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="inline-flex items-center align-middle cursor-help">
                  <CookieIcon
                    size={28}
                    weight="duotone"
                    className="text-amber-700"
                  />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>I couldn&apos;t find a croissant icon...</p>
              </TooltipContent>
            </Tooltip>
            and <strong>coffee</strong>
            <CoffeeBeanIcon
              size={28}
              weight="duotone"
              className="text-amber-900"
            />
            into <strong>code</strong>{" "}
            <CodeIcon size={28} weight="duotone" className="text-cyan-800" />.
          </h4>
          <p className="text-lg text-slate-600">
            Junior French developer passionate about gameplay programming and
            creating clean code.
          </p>
        </div>
      </section>
    </section>
  );
}
