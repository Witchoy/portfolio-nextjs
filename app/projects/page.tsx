import type { Metadata } from "next";
import { DotsBackground } from "@/components/dots-bg";
import Footer from "@/components/footer";
import MenuBar from "@/components/menu-bar";
import { projectsData } from "@/lib/data";
import ProjectCard from "@/components/project-card";

export const metadata: Metadata = {
  title: "Projects - Jules Goy",
  description: "A selection of my web and game development projects.",
};

export default function Projects() {
  const featured = projectsData.filter((p) => p.featured);
  const rest = projectsData.filter((p) => !p.featured);

  return (
    <main id="main-content" className="min-h-screen flex flex-col">
      <DotsBackground />
      <MenuBar />
      <div className="flex-1 px-4 py-10 sm:px-6 max-w-5xl mx-auto w-full">
        <h1 className="text-4xl font-bold text-stone-900 mb-10">Projects</h1>
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
