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
    <div className="flex justify-between bg-taupe-900 rounded-lg p-3 m-3">
      <div>
        <Button
          variant={pathname === "/" ? "sky" : "ghost_sky"}
          className="p-3"
          asChild
        >
          <Link href="/">
            <span className="text-white text-xl">julesgoy.dev</span>
          </Link>
        </Button>
      </div>
      <div>
        {menuBar.map((item) => (
          <Button
            key={item.name}
            variant={isActive(item.url) ? "sky" : "ghost_sky"}
            className="p-3"
            asChild
          >
            <Link href={item.url}>
              <span className="text-white text-xl">{item.name}</span>
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
}
