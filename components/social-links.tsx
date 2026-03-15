"use client";

import { Button } from "@/components/ui/button";
import { socialLinks } from "@/lib/data";
import { useTranslations } from "next-intl";

export default function SocialLinks() {
  const t = useTranslations();

  return (
    <nav
      aria-label={t("SocialLinks.ariaLabel")}
      className="m-3 flex flex-wrap items-center justify-center gap-2 rounded-lg bg-taupe-900 p-3"
    >
      {socialLinks.map((item) => (
        <Button
          key={item.nameKey}
          variant="ghost_sky"
          className="px-2 sm:px-3"
          asChild
        >
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("SocialLinks.openInNewTab", {
              name: t(item.nameKey),
            })}
          >
            <item.icon
              className="text-lg text-white sm:text-xl"
              aria-hidden="true"
            />
            <span className="text-sm text-white sm:text-base">
              {t(item.nameKey)}
            </span>
          </a>
        </Button>
      ))}
    </nav>
  );
}
