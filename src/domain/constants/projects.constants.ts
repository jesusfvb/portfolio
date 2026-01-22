import type { Project } from "../interfaces/project.interface";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "NeoManga",
    description: {
      short: "/projects_descriptions/manga_app/short.md",
      full: "/projects_descriptions/manga_app/full.md",
    },
    technologies: [
      "React Native",
      "Spring Boot",
      "MongoDB",
    ],
    technologiesSecondary: [
      "TypeScript",
      "React Query",
      "Axios",
      "Java",
      "Docker",
      "JUnit",
      "MapStruct",
      "Lombok",
    ],
    banner: "/images/app_manga/AppManga Banner.webp",
    images: [
      "/images/app_manga/android/Screenshot_1764505157.webp",
      "/images/app_manga/android/Screenshot_1764505161.webp",
      "/images/app_manga/android/Screenshot_1764505169.webp",
      "/images/app_manga/android/Screenshot_1764505185.webp",
      "/images/app_manga/android/Screenshot_1764505197.webp",
      "/images/app_manga/android/Screenshot_1764505228.webp",
    ],
    githubFrontend: "https://github.com/jesusfvb/manga.app",
    githubBackend: "https://github.com/jesusfvb/manga.server",
  },
  {
    id: 2,
    title: "Portfolio Personal",
    description: {
      short: "/projects_descriptions/portfolio/short.md",
      full: "/projects_descriptions/portfolio/full.md",
    },
    technologies: ["React",],
    technologiesSecondary: [],
    banner: "/images/portfolio/portfolio_banner.webp",
    github: "https://github.com/jesusfv/portfolio",
  },
];
