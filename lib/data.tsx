import { FaVuejs } from "react-icons/fa";
import {
  TbBrandDjango,
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandTypescript,
  TbBrandUnity,
} from "react-icons/tb";

const techStack = [
  {
    name: "Nextjs",
    icon: TbBrandNextjs,
  },
  {
    name: "Vuejs",
    icon: FaVuejs,
  },
  {
    name: "TypeScript",
    icon: TbBrandTypescript,
  },
  {
    name: "Tailwind",
    icon: TbBrandTailwind,
  },
  {
    name: "Django",
    icon: TbBrandDjango,
  },
  {
    name: "Unity",
    icon: TbBrandUnity,
  },
];

const techStackDescription = `I'm currently working with ${techStack
  .slice(0, -1)
  .map((item) => item.name)
  .join(
    ", "
  )}, and ${techStack.slice(-1)[0].name}. I also have experience with Node.js and Express for backend development.`;

const tech = {
  stack: techStack,
  description: techStackDescription,
};

export default tech;
