import { Button } from "@/components/ui/button";
import { LuCopyright } from "react-icons/lu";
import { TbBrandGithub } from "react-icons/tb";

export default function Footer() {
  return (
    <footer className="m-3 flex flex-col gap-3 rounded-lg bg-taupe-900 p-4 text-white sm:flex-row sm:items-center sm:justify-between sm:p-6 md:p-8">
      <p className="inline-flex items-center justify-center gap-1 text-sm sm:justify-start sm:text-base">
        Jules Goy <LuCopyright size={16} aria-hidden="true" />
      </p>
      <p className="text-center text-sm sm:text-base">
        Made with coffee and croissants
      </p>
      <Button variant="ghost_sky" className="self-center sm:self-auto" asChild>
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
