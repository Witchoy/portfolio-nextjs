import { Button } from "@/components/ui/button";
import { socialLinks } from "@/lib/data";

export default function SocialLinks() {
  return (
    <div className="flex">
      {socialLinks.map((item) => (
        <Button key={item.name} variant="ghost" asChild>
          <a
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="text-lg text-slate-700"
          >
            {item.name}
          </a>
        </Button>
      ))}
    </div>
  );
}
