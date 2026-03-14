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

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

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
    url: BASE_URL + "about",
  },
  {
    name: "Projects",
    url: BASE_URL + "projects",
  },
];

export const timelineData = [
  {
    date: "2025-2026",
    title: "Apprenticeship - LDE",
    content: (
      <p>
        Junior web developer apprentice working on production features with
        Vue.js, Django, Git, ClickUp, and PostgreSQL.
      </p>
    ),
  },
  {
    date: "Apr-Jul 2025",
    title: "Internship - Pouey International",
    content: (
      <p>
        Java intership working on the company CRM with Java servlets and XML. 
      </p>
    )
  },
  {
    date: "2023-2026",
    title: "BUT Informatique - Iut Robert Schuman, Strasbourg",
    content: (
      <p>
        University program focused on learning development (C, C#, C++, Java, React, 
        React-Native, Android Studio), testing, and collaborative project work.
      </p>
    ),
  },
];

export default tech;
