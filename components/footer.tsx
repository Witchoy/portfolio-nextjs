import { Button } from "@/components/ui/button";
import { LuCopyright } from "react-icons/lu";
import { TbBrandGithub } from "react-icons/tb";

export default function Footer() {
  return (
    <section className="flex items-center justify-between gap-3 bg-taupe-900 text-white m-3 p-8 rounded-lg">
      <p className="inline-flex items-center gap-1">
        Jules Goy <LuCopyright size={16} />
      </p>
      <p>Made with coffee and croissants</p>
      <Button variant="ghost_sky">
        <a href="github.com/Witchoy">
          <TbBrandGithub className="text-white" />
        </a>
      </Button>
    </section>
  );
}
