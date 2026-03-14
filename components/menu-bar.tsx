"use client";

import { Button } from "@/components/ui/button";
import { menuBar } from "@/lib/data";
import { usePathname } from "next/navigation";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

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
        >
          <a href={BASE_URL} className="text-2xl text-white">
            julesgoy.dev
          </a>
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
            <a href={item.url}>
              <span className="text-xl text-white">{item.name}</span>
            </a>
          </Button>
        ))}
      </div>
    </div>
  );
}
