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

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <DotsBackground />
      <MenuBar />
      <div className="flex-1 flex justify-center items-center">
        <div className="text-stone-900 text-center">
          <p className="text-8xl font-light">
            Hey <PiHandWaving size={84} className="wave inline align-middle" />{" "}
            I'm{" "}
            <motion.strong
              className="text-sky-900 font-bold"
              whileHover={{ scale: 1.1 }}
              style={{ display: "inline-block" }}
            >
              Jules Goy
            </motion.strong>
          </p>
          <p className="text-2xl text-stone-700">
            Turning croissants{" "}
            <LuCroissant size={28} className="inline align-middle" /> and coffee{" "}
            <LuCoffee size={28} className="inline align-middle" /> into code{" "}
            <LuCodeXml size={28} className="inline align-middle" />
          </p>
          <p className="text-lg text-stone-600">
            Junior French developer passionate about gameplay programming and
            creating clean code.
          </p>
          <Button variant="taupe_sky" className="my-6" asChild>
            <Link href="/projects">
              <span className="inline-flex items-center gap-2">
                View my projects
                <LuArrowBigRightDash />
              </span>
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex mb-3 justify-center align-center">
        <SocialLinks />
      </div>
    </main>
  );
}
