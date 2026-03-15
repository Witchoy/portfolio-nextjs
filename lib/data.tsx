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
import { Project } from "@/lib/types";

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

export const projectsData: Project[] = [
  {
    title: "StrasTaRoute - Níðhöggr",
    description:
      "A full-stack mobility app for the Strasbourg area, built as part of the Níðhöggr university project. The platform includes a React Native mobile app and a web interface, both powered by a shared backend. Features real-time data, CI/CD pipelines via GitLab, and a full test plan.",
    tags: [
      { label: "Nextjs" },
      { label: "React Native" },
      { label: "Angular" },
      { label: "TypeScript" },
      { label: "GitLab CI/CD" },
    ],
    links: [
      {
        label: "Mobile repo",
        url: "https://github.com/Witchoy/StrasTaRoute_Mobile",
      },
      {
        label: "Web repo",
        url: "https://github.com/Witchoy/StrasTaRoute_Web",
      },
      {
        label: "API repo",
        url: "https://github.com/Witchoy/STR-API",
      },
    ],
    image:
      "https://github.com/Witchoy/StrasTaRoute_Web/blob/prod/assets/Auth_Login.png?raw=true",
    featured: true,
    context: "IUT",
  },
  {
    title: "Torrington",
    description:
      "A serious game simulating university program selection, developed in C# with the Godot engine. Built with MVC architecture and the Observer pattern, it integrates a SQLite database and runs on Windows, Linux, and macOS. A team project that pushed me to apply software design principles in a game context for the first time.",
    tags: [
      { label: "Godot" },
      { label: "C#" },
      { label: "SQLite" },
      { label: "MVC" },
      { label: "UML" },
    ],
    links: [{ label: "GitHub", url: "https://github.com/Witchoy/Torrington" }],
    image:
      "https://raw.githubusercontent.com/Witchoy/Torrington/main/docs/images/gameScene.png",
    featured: false,
    context: "IUT",
  },
  {
    title: "WiMusic API",
    description:
      "A self-hosted music streaming backend built with Node.js, Express, and TypeScript. Supports MP3 uploads, audio streaming with range requests, and full CRUD for tracks, artists, albums, genres, and playlists. Uses Prisma ORM with SQLite and Superstruct for runtime validation.",
    tags: [
      { label: "Node.js" },
      { label: "TypeScript" },
      { label: "Express" },
      { label: "Prisma" },
      { label: "SQLite" },
    ],
    links: [{ label: "GitHub", url: "https://github.com/Witchoy/WiMusic_Api" }],
    image: undefined,
    featured: false,
    context: "Personal",
  },
  {
    title: "TankGame",
    description:
      "A personal 3D tank game built with Unity and C# to explore 3D game development. An early hands-on experiment with Unity's physics, camera systems, and VFX, the project that got me seriously interested in gameplay programming.",
    tags: [
      { label: "Unity" },
      { label: "C#" },
      { label: "3D" },
      { label: "ShaderLab" },
    ],
    links: [{ label: "GitHub", url: "https://github.com/Witchoy/TankGame" }],
    image: undefined,
    featured: false,
    context: "Personal",
  },
  {
    title: "Portfolio",
    description:
      "This very site, built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Designed and developed from scratch as both a personal branding exercise and a technical playground for trying out new UI patterns.",
    tags: [
      { label: "Next.js" },
      { label: "TypeScript" },
      { label: "Tailwind" },
      { label: "Framer Motion" },
    ],
    links: [
      { label: "GitHub", url: "https://github.com/Witchoy/portfolio-nextjs" },
    ],
    image:
      "https://raw.githubusercontent.com/Witchoy/portfolio-nextjs/b519e022a2bc4fa3d75741ff37cbc2aaafb7e465/public/home.png",
    featured: false,
    context: "Personal",
  },
];

export default tech;
