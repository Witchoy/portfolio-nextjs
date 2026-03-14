import { Button } from "@/components/ui/button";
import { socialLinks } from "@/lib/data";

export default function SocialLinks() {
  return (
    <div className="flex">
      {socialLinks.map((item) => (
        <Button key={item.name} variant="link" asChild>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <item.icon className="text-slate-900 text-xl" />
            <span className="text-xl text-slate-900">{item.name}</span>
          </a>
        </Button>
      ))}
    </div>
  );
}
