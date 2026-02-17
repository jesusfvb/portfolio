import type { Project } from "../interfaces/project.interface";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "projects.items.serverMangas.title",
    description: "projects.items.serverMangas.description",
    technologies: [
      "Spring Boot",
      "MongoDB",
    ],
    banner: "/images/app_manga/AppManga Banner.webp",
    githubBackend: "https://github.com/jesusfvb/manga.server",
  },
];
