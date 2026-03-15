import { Button } from "@/components/ui/button";
import { LuCopyright } from "react-icons/lu";
import { TbBrandGithub } from "react-icons/tb";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between gap-3 bg-taupe-900 text-white m-3 p-8 rounded-lg">
      <p className="inline-flex items-center gap-1">
        Jules Goy <LuCopyright size={16} aria-hidden="true" />
      </p>
      <p>Made with coffee and croissants</p>
      <Button variant="ghost_sky" asChild>
        <a
          href="https://github.com/Witchoy"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile (opens in a new tab)"
        >
          <TbBrandGithub className="text-white" aria-hidden="true" />
        </a>
      </Button>
    </footer>
  );
}
