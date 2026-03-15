import { Button } from "@/components/ui/button";
import { socialLinks } from "@/lib/data";

export default function SocialLinks() {
  return (
    <nav
      aria-label="Social links"
      className="flex bg-taupe-900 m-3 p-3 rounded-lg"
    >
      {socialLinks.map((item) => (
        <Button key={item.name} variant="ghost_sky" asChild>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${item.name} (opens in a new tab)`}
          >
            <item.icon className="text-white text-xl" aria-hidden="true" />
            <span className="text-xl text-white">{item.name}</span>
          </a>
        </Button>
      ))}
    </nav>
  );
}
