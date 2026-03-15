import type { Metadata } from "next";

import { DotsBackground } from "@/components/dots-bg";
import Footer from "@/components/footer";
import MenuBar from "@/components/menu-bar";
import Stack from "@/components/stack";
import Timeline from "@/components/timeline/timeline";
import { timelineData } from "@/lib/data";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Metadata.about");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function AboutMe() {
  const t = await getTranslations();
  const timelineItems = timelineData.map((item) => ({
    date: t(item.dateKey),
    title: t(item.titleKey),
    content: <p>{t(item.contentKey)}</p>,
  }));

  return (
    <main id="main-content" className="flex flex-col">
      <DotsBackground />
      <MenuBar />
      <div className="flex-1 px-4 py-8 sm:px-6 sm:py-12">
        <div className="mx-auto w-full max-w-4xl">
          <div className="flex flex-col-reverse gap-8 md:flex-row md:items-center md:gap-10">
            <div className="flex-1">
              <h1 className="mb-6 text-4xl font-bold text-stone-900 sm:text-5xl">
                {t("AboutPage.heading")}
              </h1>
              <p className="text-base text-stone-700 leading-relaxed sm:text-lg">
                {t("AboutPage.paragraph1")}
              </p>
            </div>
            <div className="mx-auto shrink-0 md:mx-0">
              <Image
                src="/me.jpg"
                width={300}
                height={300}
                alt={t("AboutPage.photoAlt")}
                className="h-52 w-52 rounded-lg object-cover sm:h-64 sm:w-64 md:h-[300px] md:w-[300px]"
              />
            </div>
          </div>
          <div className="mt-6 sm:mt-8">
            <p className="text-base text-stone-700 leading-relaxed sm:text-lg">
              {t("AboutPage.paragraph2Part1")}
              <br />
              <br />
              {t("AboutPage.paragraph2Part2")}
            </p>
          </div>
        </div>
      </div>
      <Stack />
      <Timeline title={t("AboutPage.timelineTitle")} items={timelineItems} />
      <Footer />
    </main>
  );
}
