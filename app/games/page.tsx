import type { Metadata } from "next";
import MenuBar from "@/components/menu-bar";
import Footer from "@/components/footer";
import FloppyBirdSection from "@/components/floppy-bird-section";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Metadata.games");
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function GamesPage() {
  const t = await getTranslations("GamesPage");

  return (
    <main id="main-content" className="min-h-screen flex flex-col">
      <MenuBar />
      <div className="flex-1 px-4 py-10 sm:px-6 max-w-5xl mx-auto w-full">
        <h1 className="text-4xl font-bold text-stone-900 mb-2">
          {t("heading")}
        </h1>
        <p className="text-base text-stone-500 mb-10">
          {t("floppyBird.description")}
        </p>
        <FloppyBirdSection />
      </div>
      <Footer />
    </main>
  );
}
