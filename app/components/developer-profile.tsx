"use client";

import { CodeIcon, CoffeeBeanIcon, CookieIcon } from "@phosphor-icons/react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/app/components/ui/tooltip";

export default function DeveloperProfile() {
  return (
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
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="inline-flex items-center cursor-help">
                <CoffeeBeanIcon
                  size={28}
                  weight="duotone"
                  className="text-amber-900"
                />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Espresso, obviously.</p>
            </TooltipContent>
          </Tooltip>{" "}
          into <strong>code</strong>{" "}
          <CodeIcon size={28} weight="duotone" className="text-cyan-800" />.
        </h4>
        <p className="text-lg text-slate-600">
          Junior French developer passionate about gameplay programming and
          creating clean code.
        </p>
      </div>
    </section>
  );
}
