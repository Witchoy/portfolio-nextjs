import type { Metadata } from "next";
import HomePage from "@/components/pages/home-page";
import ProjectShowcase from "@/components/projects-showcase";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Metadata.home");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function Home() {
  return <HomePage projectShowcase={<ProjectShowcase />} />;
}
