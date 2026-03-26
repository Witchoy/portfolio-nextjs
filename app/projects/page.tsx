import type { Metadata } from "next";
import { DotsBackground } from "@/components/dots-bg";
import Footer from "@/components/footer";
import MenuBar from "@/components/menu-bar";
import { projectsData } from "@/lib/data";
import ProjectCard from "@/components/project-card";
import { getTranslations } from "next-intl/server";
import { Project } from "@/lib/types";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Metadata.projects");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function Projects() {
  const t = await getTranslations();
  const localizedProjects: Project[] = projectsData.map((project) => ({
    title: t(project.titleKey),
    description: t(project.descriptionKey),
    tags: project.tags.map((tag) => ({
      label: t(tag.labelKey),
    })),
    links: project.links.map((link) => ({
      label: t(link.labelKey),
      url: link.url,
    })),
    image: project.image,
    featured: project.featured,
    context: t(project.contextKey),
  }));

  const featured = localizedProjects.filter((p) => p.featured);
  const rest = localizedProjects.filter((p) => !p.featured);

  return (
    <main id="main-content" className="min-h-screen flex flex-col">
      {/* <DotsBackground /> */}
      <MenuBar />
      <div className="flex-1 px-4 py-10 sm:px-6 max-w-5xl mx-auto w-full">
        <h1 className="text-4xl font-bold text-stone-900 mb-10">
          {t("ProjectsPage.heading")}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
          {rest.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
