import { Button } from "@/components/ui/button";
import { socialLinks } from "@/lib/data";

export default function SocialLinks() {
  return (
    <nav
      aria-label="Social links"
      className="m-3 flex flex-wrap items-center justify-center gap-2 rounded-lg bg-taupe-900 p-3"
    >
      {socialLinks.map((item) => (
        <Button
          key={item.name}
          variant="ghost_sky"
          className="px-2 sm:px-3"
          asChild
        >
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${item.name} (opens in a new tab)`}
          >
            <item.icon
              className="text-lg text-white sm:text-xl"
              aria-hidden="true"
            />
            <span className="text-sm text-white sm:text-base">{item.name}</span>
          </a>
        </Button>
      ))}
    </nav>
  );
}
