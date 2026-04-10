import { Button } from "@/components/ui/button";
import { Project } from "@/lib/types";
import { getTranslations } from "next-intl/server";

type ProjectCardProps = {
  project: Project;
};

export default async function ProjectCard({ project }: ProjectCardProps) {
  const t = await getTranslations();

  if (project.featured) {
    return (
      <div className="rounded-2xl border border-stone-200/70 bg-white/70 backdrop-blur-sm overflow-hidden flex flex-col md:flex-row">
        {/* Image zone */}
        <div className="md:w-1/2 bg-stone-100 min-h-48 flex items-center justify-center overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-stone-400 text-sm">
              {t("ProjectsPage.card.noPreviewYet")}
            </span>
          )}
        </div>
        {/* Content */}
        <div className="md:w-1/2 p-8 flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-sky-500 border border-sky-100 rounded-full px-3 py-0.5">
                {t("ProjectsPage.card.featured")} · {project.context}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-stone-900">
              {project.title}
            </h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-1">
              {project.tags.map((tag) => (
                <span
                  key={tag.label}
                  className="text-xs px-2.5 py-1 rounded-full bg-stone-100 text-stone-600 font-medium"
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.links.map((link) => (
              <Button key={link.label} variant="taupe_sky" asChild>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-stone-200/70 bg-white/70 backdrop-blur-sm overflow-hidden flex flex-col">
      {/* Image zone */}
      <div className="bg-stone-100 h-40 flex items-center justify-center overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-stone-400 text-sm">
            {t("ProjectsPage.card.noPreviewYet")}
          </span>
        )}
      </div>
      {/* Content */}
      <div className="p-5 flex flex-col gap-4 flex-1">
        <div className="flex flex-col gap-1.5 flex-1">
          <span className="text-xs font-semibold uppercase tracking-widest text-stone-400">
            {project.context}
          </span>
          <h2 className="text-lg font-bold text-stone-900">{project.title}</h2>
          <p className="text-stone-500 text-sm leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {project.tags.map((tag) => (
              <span
                key={tag.label}
                className="text-xs px-2.5 py-1 rounded-full bg-stone-100 text-stone-600 font-medium"
              >
                {tag.label}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.links.map((link) => (
            <Button key={link.label} variant="taupe_sky" size="sm" asChild>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
