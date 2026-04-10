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
import { features } from "node:process";

const techStack = [
  { nameKey: "Stack.items.nextjs", icon: TbBrandNextjs, category: "web" },
  { nameKey: "Stack.items.vuejs", icon: FaVuejs, category: "web" },
  {
    nameKey: "Stack.items.reactRn",
    icon: TbBrandReact,
    category: "web",
  },
  {
    nameKey: "Stack.items.typescript",
    icon: TbBrandTypescript,
    category: "web",
  },
  {
    nameKey: "Stack.items.tailwind",
    icon: TbBrandTailwind,
    category: "web",
  },
  { nameKey: "Stack.items.django", icon: TbBrandDjango, category: "web" },
  {
    nameKey: "Stack.items.postgresql",
    icon: TbDatabase,
    category: "web",
  },
  {
    nameKey: "Stack.items.unityCsharp",
    icon: TbBrandUnity,
    category: "gameDev",
  },
  {
    nameKey: "Stack.items.godot",
    icon: SiGodotengine,
    category: "gameDev",
  },
  { nameKey: "Stack.items.git", icon: TbBrandGit, category: "tools" },
  {
    nameKey: "Stack.items.gitlabCiCd",
    icon: TbBrandGitlab,
    category: "tools",
  },
  {
    nameKey: "Stack.items.androidStudio",
    icon: TbBrandAndroid,
    category: "tools",
  },
];

const tech = {
  stack: techStack,
  descriptionKey: "Stack.description",
};

export const socialLinks = [
  {
    nameKey: "SocialLinks.items.linkedin",
    icon: TbBrandLinkedin,
    url: "https://www.linkedin.com/in/jules-goy",
  },
  {
    nameKey: "SocialLinks.items.github",
    icon: TbBrandGithub,
    url: "https://github.com/Witchoy",
  },
  {
    nameKey: "SocialLinks.items.letterboxd",
    icon: TbBrandLetterboxd,
    url: "https://letterboxd.com/Jules_Goy/",
  },
];

export const menuBar = [
  {
    nameKey: "MenuBar.items.aboutMe",
    url: "/about",
  },
  {
    nameKey: "MenuBar.items.projects",
    url: "/projects",
  },
];

export const timelineData = [
  {
    dateKey: "Timeline.items.apprenticeship.date",
    titleKey: "Timeline.items.apprenticeship.title",
    contentKey: "Timeline.items.apprenticeship.content",
  },
  {
    dateKey: "Timeline.items.internship.date",
    titleKey: "Timeline.items.internship.title",
    contentKey: "Timeline.items.internship.content",
  },
  {
    dateKey: "Timeline.items.butInfo.date",
    titleKey: "Timeline.items.butInfo.title",
    contentKey: "Timeline.items.butInfo.content",
  },
];

export const projectsData = [
  {
    titleKey: "ProjectsData.items.strasTaRoute.title",
    descriptionKey: "ProjectsData.items.strasTaRoute.description",
    tags: [
      { labelKey: "ProjectsData.items.strasTaRoute.tags.nextjs" },
      { labelKey: "ProjectsData.items.strasTaRoute.tags.reactNative" },
      { labelKey: "ProjectsData.items.strasTaRoute.tags.angular" },
      { labelKey: "ProjectsData.items.strasTaRoute.tags.typescript" },
      { labelKey: "ProjectsData.items.strasTaRoute.tags.gitlabCiCd" },
    ],
    links: [
      {
        labelKey: "ProjectsData.items.strasTaRoute.links.mobileRepo",
        url: "https://github.com/Witchoy/StrasTaRoute_Mobile",
      },
      {
        labelKey: "ProjectsData.items.strasTaRoute.links.webRepo",
        url: "https://github.com/Witchoy/StrasTaRoute_Web",
      },
      {
        labelKey: "ProjectsData.items.strasTaRoute.links.apiRepo",
        url: "https://github.com/Witchoy/STR-API",
      },
    ],
    image:
      "https://github.com/Witchoy/StrasTaRoute_Web/blob/prod/assets/Auth_Login.png?raw=true",
    featured: true,
    contextKey: "ProjectsData.context.iut",
    toShowcase: true,
  },
  {
    titleKey: "ProjectsData.items.floppybird.title",
    descriptionKey: "ProjectsData.items.floppybird.description",
    tags: [
      { labelKey: "ProjectsData.items.floppybird.tags.unity" },
      { labelKey: "ProjectsData.items.floppybird.tags.csharp" },
    ],
    links: [
      {
        labelKey: "ProjectsData.items.floppybird.links.github",
        url: "https://github.com/Witchoy/FloppyBird",
      },
    ],
    image:
      "https://github.com/Witchoy/FloppyBird/blob/main/GithubAssets/TitleScreen.png?raw=true",
    featured: false,
    contextKey: "ProjectsData.context.personal",
    toShowcase: true,
  },
  {
    titleKey: "ProjectsData.items.torrington.title",
    descriptionKey: "ProjectsData.items.torrington.description",
    tags: [
      { labelKey: "ProjectsData.items.torrington.tags.godot" },
      { labelKey: "ProjectsData.items.torrington.tags.csharp" },
      { labelKey: "ProjectsData.items.torrington.tags.sqlite" },
      { labelKey: "ProjectsData.items.torrington.tags.mvc" },
      { labelKey: "ProjectsData.items.torrington.tags.uml" },
    ],
    links: [
      {
        labelKey: "ProjectsData.items.torrington.links.github",
        url: "https://github.com/Witchoy/Torrington",
      },
    ],
    image:
      "https://raw.githubusercontent.com/Witchoy/Torrington/main/docs/images/gameScene.png",
    featured: false,
    contextKey: "ProjectsData.context.iut",
  },
  {
    titleKey: "ProjectsData.items.wiMusicApi.title",
    descriptionKey: "ProjectsData.items.wiMusicApi.description",
    tags: [
      { labelKey: "ProjectsData.items.wiMusicApi.tags.nodejs" },
      { labelKey: "ProjectsData.items.wiMusicApi.tags.typescript" },
      { labelKey: "ProjectsData.items.wiMusicApi.tags.express" },
      { labelKey: "ProjectsData.items.wiMusicApi.tags.prisma" },
      { labelKey: "ProjectsData.items.wiMusicApi.tags.sqlite" },
    ],
    links: [
      {
        labelKey: "ProjectsData.items.wiMusicApi.links.github",
        url: "https://github.com/Witchoy/WiMusic_Api",
      },
    ],
    image: undefined,
    featured: false,
    contextKey: "ProjectsData.context.personal",
  },
  {
    titleKey: "ProjectsData.items.tankGame.title",
    descriptionKey: "ProjectsData.items.tankGame.description",
    tags: [
      { labelKey: "ProjectsData.items.tankGame.tags.unity" },
      { labelKey: "ProjectsData.items.tankGame.tags.csharp" },
      { labelKey: "ProjectsData.items.tankGame.tags.threeD" },
      { labelKey: "ProjectsData.items.tankGame.tags.shaderLab" },
    ],
    links: [
      {
        labelKey: "ProjectsData.items.tankGame.links.github",
        url: "https://github.com/Witchoy/TankGame",
      },
    ],
    image: undefined,
    featured: false,
    contextKey: "ProjectsData.context.personal",
    toShowcase: true,
  },
  {
    titleKey: "ProjectsData.items.portfolio.title",
    descriptionKey: "ProjectsData.items.portfolio.description",
    tags: [
      { labelKey: "ProjectsData.items.portfolio.tags.nextjs" },
      { labelKey: "ProjectsData.items.portfolio.tags.typescript" },
      { labelKey: "ProjectsData.items.portfolio.tags.tailwind" },
      { labelKey: "ProjectsData.items.portfolio.tags.framerMotion" },
    ],
    links: [
      {
        labelKey: "ProjectsData.items.portfolio.links.github",
        url: "https://github.com/Witchoy/portfolio-nextjs",
      },
    ],
    image:
      "https://github.com/Witchoy/portfolio-nextjs/blob/main/public/home.png?raw=true",
    featured: false,
    contextKey: "ProjectsData.context.personal",
    toShowcase: true,
  },
];

export default tech;
