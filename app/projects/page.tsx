import { DotsBackground } from "@/components/dots-bg";
import Footer from "@/components/footer";
import MenuBar from "@/components/menu-bar";

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col">
      <DotsBackground />
      <MenuBar />
      <div className="flex-1 flex items-center justify-center">
        <h1 className="text-2xl">This page is in development thank you for your understanding.</h1>
      </div>
      <Footer />
    </div>
  );
}
