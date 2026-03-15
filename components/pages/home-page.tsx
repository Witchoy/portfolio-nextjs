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
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <main id="main-content" className="min-h-screen flex flex-col">
      <DotsBackground />
      <MenuBar />
      <div className="flex-1 flex items-center justify-center px-4 py-10 sm:px-6 sm:py-12">
        <div className="max-w-5xl text-stone-900 text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight">
            {t("greeting")}{" "}
            <PiHandWaving
              className="wave inline align-middle text-4xl sm:text-5xl lg:text-6xl"
              aria-hidden="true"
            />{" "}
            {t("intro")}{" "}
            <motion.strong
              className="text-sky-900 font-bold"
              whileHover={{ scale: 1.1 }}
              style={{ display: "inline-block" }}
            >
              {t("name")}
            </motion.strong>
          </h1>
          <p className="mt-4 text-xl sm:text-3xl lg:text-4xl text-stone-700 leading-tight">
            {t("taglinePart1")}{" "}
            <LuCroissant
              className="inline align-middle text-xl sm:text-2xl"
              aria-hidden="true"
            />{" "}
            {t("taglinePart2")}{" "}
            <LuCoffee
              className="inline align-middle text-xl sm:text-2xl"
              aria-hidden="true"
            />{" "}
            {t("taglinePart3")}{" "}
            <LuCodeXml
              className="inline align-middle text-xl sm:text-2xl"
              aria-hidden="true"
            />
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg lg:text-xl text-stone-600 leading-relaxed">
            {t("description")}
          </p>
          <Button variant="taupe_sky" className="my-6 sm:my-8" asChild>
            <Link href={t("projectsHref")}>
              <span className="inline-flex items-center gap-2">
                {t("viewProjects")}
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
