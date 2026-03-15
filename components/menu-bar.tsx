"use client";

import { Button } from "@/components/ui/button";
import { menuBar } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuBar() {
  const pathname = usePathname();

  const isActive = (url: string) => {
    const path = url.split("/").pop() || "";
    return pathname === "/" + path || (path === "" && pathname === "/");
  };

  return (
    <header className="m-3">
      <nav aria-label="Primary" className="rounded-lg bg-taupe-900 p-3">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex justify-center sm:justify-start">
            <Button
              variant={pathname === "/" ? "sky" : "ghost_sky"}
              className="p-2 sm:p-3"
              asChild
            >
              <Link href="/" aria-label="Go to homepage">
                <span className="text-base text-white sm:text-xl">
                  julesgoy.dev
                </span>
              </Link>
            </Button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-end">
            {menuBar.map((item) => (
              <Button
                key={item.name}
                variant={isActive(item.url) ? "sky" : "ghost_sky"}
                className="p-2 sm:p-3"
                asChild
              >
                <Link
                  href={item.url}
                  aria-current={isActive(item.url) ? "page" : undefined}
                >
                  <span className="text-sm text-white sm:text-lg md:text-xl">
                    {item.name}
                  </span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
