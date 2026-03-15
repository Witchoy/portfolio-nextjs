"use client";

import {
  LuArrowBigRightDash,
  LuCoffee,
  LuCodeXml,
  LuCroissant,
} from "react-icons/lu";
import { PiHandWaving } from "react-icons/pi";
import { motion } from "motion/react";
import SocialLinks from "@/components/social-links";
import MenuBar from "@/components/menu-bar";
import { Button } from "@/components/ui/button";
import { DotsBackground } from "@/components/dots-bg";
import Link from "next/link";

export default function HomePage() {
  return (
    <main id="main-content" className="min-h-screen flex flex-col">
      <DotsBackground />
      <MenuBar />
      <div className="flex-1 flex items-center justify-center px-4 py-10 sm:px-6 sm:py-12">
        <div className="max-w-5xl text-stone-900 text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl xl:text-9xl font-light leading-tight">
            Hey{" "}
            <PiHandWaving
              className="wave inline align-middle text-4xl sm:text-6xl lg:text-7xl"
              aria-hidden="true"
            />{" "}
            I'm{" "}
            <motion.strong
              className="text-sky-900 font-bold"
              whileHover={{ scale: 1.1 }}
              style={{ display: "inline-block" }}
            >
              Jules Goy
            </motion.strong>
          </h1>
          <p className="mt-4 text-xl sm:text-3xl lg:text-5xl text-stone-700 leading-tight">
            Turning croissants{" "}
            <LuCroissant
              className="inline align-middle text-xl sm:text-2xl"
              aria-hidden="true"
            />{" "}
            and coffee{" "}
            <LuCoffee
              className="inline align-middle text-xl sm:text-2xl"
              aria-hidden="true"
            />{" "}
            into code{" "}
            <LuCodeXml
              className="inline align-middle text-xl sm:text-2xl"
              aria-hidden="true"
            />
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg lg:text-xl text-stone-600 leading-relaxed">
            Junior French developer passionate about gameplay programming and
            creating clean code.
          </p>
          <Button variant="taupe_sky" className="my-6 sm:my-8" asChild>
            <Link href="/projects">
              <span className="inline-flex items-center gap-2">
                View my projects
                <LuArrowBigRightDash />
              </span>
            </Link>
          </Button>
        </div>
      </div>
      <div className="mb-3 flex justify-center px-2 sm:px-0">
        <SocialLinks />
      </div>
    </main>
  );
}
