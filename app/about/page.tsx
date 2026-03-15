import type { Metadata } from "next";

import { DotsBackground } from "@/components/dots-bg";
import Footer from "@/components/footer";
import MenuBar from "@/components/menu-bar";
import Stack from "@/components/stack";
import Timeline from "@/components/timeline/timeline";
import { timelineData } from "@/lib/data";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about me and my journey.",
};

export default function AboutMe() {
  return (
    <main id="main-content" className="flex flex-col">
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
                I am a third-year BUT Informatique student specializing in
                application design, development, and validation, currently
                working as a web developer apprentice at LDE. My time there,
                building production features with Vue.js, Django, and
                PostgreSQL, has taught me what it means to write code that
                actually ships, and confirmed that I genuinely love the craft of
                development.
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
          <div className="mt-8">
            <p className="text-lg text-stone-700 leading-relaxed">
              But my real goal lies in game development. I've always been both a
              player and a coder, and at some point the two naturally merged.
              What draws me to game dev is the challenge of crafting tight,
              precise gameplay, the kind where every input feels intentional,
              where mechanics carry the story, and where a well-designed puzzle
              can say more than a cutscene. I work mostly with Unity and C# on
              personal prototypes, exploring these ideas hands-on.
              <br />
              <br />
              After my BUT, I'm aiming to join a small indie studio as a
              gameplay developer, or pursue further studies in game development
              to get there. The web is a solid foundation and a genuine skill
              I'm building, but game dev is where I want to take it. Outside of
              code, I draw inspiration from cinema, music, and comics, not only as
              hobbies separate from my work, but as lenses through which I think
              about what makes an experience feel cohesive and meaningful.
            </p>
          </div>
        </div>
      </div>
      <Stack />
      <Timeline title="My Journey" items={timelineData} />
      <Footer />
    </main>
  );
}
