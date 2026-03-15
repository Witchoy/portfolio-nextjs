import type { Metadata } from "next";
import { DotsBackground } from "@/components/dots-bg";
import Footer from "@/components/footer";
import MenuBar from "@/components/menu-bar";

export const metadata: Metadata = {
  title: "Projects",
  description: "My projects and experiments.",
};

export default function Projects() {
  return (
    <main id="main-content" className="min-h-screen flex flex-col">
      <DotsBackground />
      <MenuBar />
      <div className="flex-1 flex items-center justify-center px-4 py-10 sm:px-6">
        <h1 className="max-w-2xl text-center text-xl text-stone-800 sm:text-2xl">
          This page is in development thank you for your understanding.
        </h1>
      </div>
      <Footer />
    </main>
  );
}
