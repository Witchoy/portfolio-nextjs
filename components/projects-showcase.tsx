import { projectsData } from "@/lib/data";
import { getTranslations } from "next-intl/server";
import { Project } from "@/lib/types";
import ProjectCard from "./project-card";

export default async function ProjectShowcase() {
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
    toShowcase: project.toShowcase,
  }));

  const toShow = localizedProjects.filter((p) => p.toShowcase);

  return (
    <section className="w-full px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {toShow.map((project) => (
          <div key={project.title} className={project.featured ? "col-span-full" : ""}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
