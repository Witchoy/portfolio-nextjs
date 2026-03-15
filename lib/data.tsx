import { FaVuejs } from "react-icons/fa";
import {
  TbBrandAndroid,
  TbBrandDjango,
  TbBrandGit,
  TbBrandGithub,
  TbBrandGitlab,
  TbBrandLetterboxd,
  TbBrandLinkedin,
  TbBrandNextjs,
  TbBrandReact,
  TbBrandTailwind,
  TbBrandTypescript,
  TbBrandUnity,
  TbDatabase,
} from "react-icons/tb";
import { SiGodotengine } from "react-icons/si";

const techStack = [
  { name: "Next.js", icon: TbBrandNextjs, category: "Web" },
  { name: "Vue.js", icon: FaVuejs, category: "Web" },
  { name: "React / RN", icon: TbBrandReact, category: "Web" },
  { name: "TypeScript", icon: TbBrandTypescript, category: "Web" },
  { name: "Tailwind", icon: TbBrandTailwind, category: "Web" },
  { name: "Django", icon: TbBrandDjango, category: "Web" },
  { name: "PostgreSQL", icon: TbDatabase, category: "Web" },
  { name: "Unity / C#", icon: TbBrandUnity, category: "Game Dev" },
  { name: "Godot", icon: SiGodotengine, category: "Game Dev" },
  { name: "Git", icon: TbBrandGit, category: "Tools" },
  { name: "GitLab CI/CD", icon: TbBrandGitlab, category: "Tools" },
  { name: "Android Studio", icon: TbBrandAndroid, category: "Tools" },
];

const techStackDescription = `My stack reflects two complementary paths. On the web side, I work daily with Vue.js, Django and PostgreSQL at my apprenticeship, and use Next.js and TypeScript for personal projects. On the game dev side, Unity (C#) is my main tool for prototyping gameplay mechanics, with Godot as an occasional alternative for smaller experiments. Java and Android Studio round out my academic background from the BUT.`;

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
    url: "/about",
  },
  {
    name: "Projects",
    url: "/projects",
  },
];

export const timelineData = [
  {
    date: "2025 - 2026",
    title: "Apprenticeship - LDE",
    content: (
      <p>
        Junior web developer apprentice building and shipping production
        features with Vue.js, Django, and PostgreSQL. Working within an agile
        team taught me what it really means to write code that others depend on,
        readable, tested, and maintainable.
      </p>
    ),
  },
  {
    date: "Apr - Jul 2025",
    title: "Internship - Pouey International",
    content: (
      <p>
        Worked on the company's internal CRM using Java Servlets and XML. A
        deliberate step outside my comfort zone that strengthened my ability to
        navigate unfamiliar codebases and legacy stacks.
      </p>
    ),
  },
  {
    date: "2023 - 2026",
    title: "BUT Informatique - IUT Robert Schuman, Strasbourg",
    content: (
      <p>
        Three-year university programme covering software development (C, C++,
        C#, Java, React, React Native, Android Studio), testing, and
        collaborative project work. It's here that I discovered Unity and C#,
        which sparked my interest in game development and shaped the direction I
        want to take professionally.
      </p>
    ),
  },
];

export default tech;
