"use client";

import { DotsBackground } from "@/components/dots-bg";
import Footer from "@/components/footer";
import MenuBar from "@/components/menu-bar";
import Timeline from "@/components/timeline/timeline";
import { timelineData } from "@/lib/data";
import Image from "next/image";

export default function AboutMe() {
  return (
    <main className="flex flex-col">
      <DotsBackground />
      <MenuBar />
      <div className="flex-1 flex justify-center items-center px-6 py-12">
        <div className="max-w-4xl w-full">
          <div className="flex gap-8 items-center">
            <div className="flex flex-col">
              <h1 className="text-5xl font-bold text-stone-900 mb-8">
                Who am I
              </h1>
              <p className="text-lg text-stone-700 leading-relaxed flex-1">
                I am a second-year BUT Informatique student specializing in
                application design, development, and validation. I have a strong
                interest in full-stack web development and game development, and
                I enjoy building reliable and well-designed software. I
                currently work with technologies such as Node.js, TypeScript,
                and Unity, and I am always eager to learn new tools and improve
                my development skills. Outside programming, I draw inspiration
                from cinema, music, and comics, which nurture my creativity.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/me.jpg"
                width={300}
                height={300}
                alt="Picture of me"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 py-12">
        <Timeline title="My Journey" items={timelineData} />
      </div>
      <Footer />
    </main>
  );
}
