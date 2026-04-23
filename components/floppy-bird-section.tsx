"use client";

import dynamic from "next/dynamic";

const FloppyBirdGame = dynamic(() => import("@/components/floppy-bird-game"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center w-[540px] h-[960px] bg-stone-100 rounded-lg">
      <p className="text-sm text-stone-400">Loading game…</p>
    </div>
  ),
});

export default function FloppyBirdSection() {
  return (
    <div className="flex justify-center">
      <FloppyBirdGame />
    </div>
  );
}
