"use client";

import DeveloperProfile from "@/app/components/developer-profile";
import Image from "next/image";
import { HandWavingIcon } from "@phosphor-icons/react";

export default function Home() {
  return (
    <main
      className="bg-gray-400 min-h-screen flex flex-col items-center justify-center p-6"
      style={{
        background:
          "linear-gradient(49deg,rgba(252, 198, 122, 1) 23%, rgba(49, 65, 88, 1) 100%)",
      }}
    >
      <div className="flex">
        <div className="flex items-center text-slate-700 text-6xl">
          <p className="leading-snug">
            Hey{" "}
            <HandWavingIcon
              size={64}
              className="wave text-cyan-800 inline align-middle"
              weight="duotone"
            />{" "}
            I&apos;m <strong className="text-cyan-800">Jules Goy</strong> alias{" "}
            <strong className="text-cyan-800">Witchoy,</strong> a Junior
            Software Developer.
          </p>
        </div>
        <Image
          src="/no_background_ai_slop.svg"
          width={1000}
          height={760}
          alt="Placeholder ai slop image"
          className="w-full hidden md:block"
        />
      </div>
      <div className="w-full">
        <DeveloperProfile />
      </div>
    </main>
  );
}
