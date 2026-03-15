"use client";

import { Button } from "@/components/ui/button";
import { menuBar } from "@/lib/data";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

export default function MenuBar() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations();

  const toggleLocale = () => {
    const nextLocale = locale === "fr" ? "en" : "fr";
    document.cookie = `locale=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
    router.refresh();
  };

  const isActive = (url: string) => {
    const path = url.split("/").pop() || "";
    return pathname === "/" + path || (path === "" && pathname === "/");
  };

  return (
    <header className="m-3">
      <nav
        aria-label={t("MenuBar.ariaPrimary")}
        className="rounded-lg bg-taupe-900 p-3"
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex justify-center sm:justify-start">
            <Button
              variant={pathname === "/" ? "sky" : "ghost_sky"}
              className="p-2 sm:p-3"
              asChild
            >
              <Link href="/" aria-label={t("MenuBar.homeAria")}>
                <span className="text-base text-white sm:text-xl">
                  {t("MenuBar.homeLabel")}
                </span>
              </Link>
            </Button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-end">
            {menuBar.map((item) => (
              <Button
                key={item.nameKey}
                variant={isActive(item.url) ? "sky" : "ghost_sky"}
                className="p-2 sm:p-3"
                asChild
              >
                <Link
                  href={item.url}
                  aria-current={isActive(item.url) ? "page" : undefined}
                >
                  <span className="text-sm text-white sm:text-lg md:text-xl">
                    {t(item.nameKey)}
                  </span>
                </Link>
              </Button>
            ))}
            <Button
              variant="ghost_sky"
              className="p-2 sm:p-3"
              onClick={toggleLocale}
              aria-label={t("MenuBar.switchLanguageAria", {
                locale: t(
                  `MenuBar.localeShort.${locale === "fr" ? "en" : "fr"}`
                ),
              })}
            >
              <span className="text-sm text-white sm:text-lg md:text-xl">
                {t("MenuBar.switchLanguageButton", {
                  locale: t(
                    `MenuBar.localeShort.${locale === "fr" ? "en" : "fr"}`
                  ),
                })}
              </span>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
