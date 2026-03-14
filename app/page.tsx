"use client";

import {
  LuArrowBigRightDash,
  LuCoffee,
  LuCodeXml,
  LuCroissant,
} from "react-icons/lu";
import { PiHandWaving } from "react-icons/pi";
import { motion } from "motion/react";
import SocialLinks from "@/components/social-links";
import MenuBar from "@/components/menu-bar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col background-vanilla-dust">
      <MenuBar />
      <div className="flex-1 flex justify-center items-center">
        <div className="text-stone-900 text-center">
          <p className="text-8xl font-light">
            Hey <PiHandWaving size={84} className="wave inline align-middle" />{" "}
            I'm{" "}
            <motion.strong
              className="text-sky-900 font-bold"
              whileHover={{ scale: 1.1 }}
              style={{ display: "inline-block" }}
            >
              Jules Goy
            </motion.strong>
          </p>
          <p className="text-2xl text-stone-700">
            Turning croissants{" "}
            <LuCroissant size={28} className="inline align-middle" /> and coffee{" "}
            <LuCoffee size={28} className="inline align-middle" /> into code{" "}
            <LuCodeXml size={28} className="inline align-middle" />
          </p>
          <p className="text-lg text-stone-600">
            Junior French developer passionate about gameplay programming and
            creating clean code.
          </p>
          <Button className="my-6 bg-sky-900">
            <a href="https://julesgoy.dev/projects">
              <span className="inline-flex items-center gap-2">
                View my projects
                <LuArrowBigRightDash />
              </span>
            </a>
          </Button>
        </div>
      </div>
      <div className="flex mb-12 justify-center align-center">
        <SocialLinks />
      </div>
    </main>
  );
}

// export default function Home() {
//   return (
//     <main className="hero-bg relative min-h-screen flex flex-col justify-center">
//       <div className="px-12 lg:px-32 2xl:px-128s">
//         <div className="flex items-center gap-8">
//           <div className="flex-1 text-slate-700 text-6xl">
//             <p className="leading-snug">
//               Hey{" "}
//               <HandWavingIcon
//                 size={64}
//                 className="wave text-cyan-800 inline align-middle"
//                 weight="duotone"
//               />{" "}
//               I&apos;m{" "}
//               <motion.strong
//                 className="text-cyan-800"
//                 whileHover={{ scale: 1.1 }}
//                 style={{ display: "inline-block" }}
//               >
//                 Jules Goy
//               </motion.strong>{" "}
//               {/* alias{" "}
//               <motion.strong
//                 className="text-cyan-800"
//                 whileHover={{ scale: 1.1 }}
//                 style={{ display: "inline-block" }}
//               >
//                 Witchoy
//               </motion.strong>{" "}
//               a Junior Software Developer. */}
//             </p>
//           </div>
//           {/* <Image
//             src="/no_background_ai_slop.svg"
//             width={1}
//             height={1}
//             alt="Placeholder ai slop image"
//             className="w-1/3 hidden md:block"
//           /> */}
//         </div>
//         <section className="py-8">
//           <div className="flex flex-col gap-3 text-slate-700">
//             <h4 className="text-2xl font-medium flex items-center flex-wrap gap-1">
//               Turning <strong>croissants</strong>
//               <Tooltip>
//                 <TooltipTrigger asChild>
//                   <button className="inline-flex items-center align-middle cursor-help">
//                     <CookieIcon
//                       size={28}
//                       weight="duotone"
//                       className="text-amber-700"
//                     />
//                   </button>
//                 </TooltipTrigger>
//                 <TooltipContent>
//                   <p>I couldn&apos;t find a croissant icon...</p>
//                 </TooltipContent>
//               </Tooltip>
//               and <strong>coffee</strong>
//               <CoffeeBeanIcon
//                 size={28}
//                 weight="duotone"
//                 className="text-amber-900"
//               />
//               into <strong>code</strong>{" "}
//               <CodeIcon size={28} weight="duotone" className="text-cyan-800" />.
//             </h4>
//             <p className="text-lg text-slate-600">
//               Junior French developer passionate about gameplay programming and
//               creating clean code.
//             </p>
//           </div>
//         </section>
//       </div>
//       <section className="absolute bottom-8 left-12 lg:left-32">
//         <SocialLinks />
//       </section>
//     </main>
//   );
// }
