import { FaVuejs } from "react-icons/fa";
import {
  TbBrandDjango,
  TbBrandGithub,
  TbBrandLetterboxd,
  TbBrandLinkedin,
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

export const socialLinks = [
  {
    name: "Linkedin",
    icon: TbBrandLinkedin,
    url: "https://www.linkedin.com/in/jules-goy",
  },
  {
    name: "Github",
    icon: TbBrandGithub,
    url: "https://github.com/Witchoy",
  },
  {
    name: "Letterboxd",
    icon: TbBrandLetterboxd,
    url: "https://letterboxd.com/Jules_Goy/",
  },
];

export const menuBar = [
  {
    name: "About Me",
    url: "https://julesgoy.dev/about_me",
  },
  {
    name: "Projects",
    url: "https://julesgoy.dev/projects",
  },
];

export default tech;
