import type { Project } from "../interfaces/project.interface";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "NeoManga",
    description: "Aplicación móvil multiplataforma desarrollada con React Native para lectura y gestión de mangas. Incluye lectura, búsqueda, gestión de favorito. Con un servidor backend desarrollado en Spring Boot que automatiza la detección de nuevos capítulos mediante web scraping.API REST, almacenamiento en MongoDB y automatización de navegadores con Playwright.",
    technologies: [
      "React Native",
      "Spring Boot",
      "MongoDB",
    ],
    banner: "/images/app_manga/AppManga Banner.webp",
    githubFrontend: "https://github.com/jesusfvb/manga.app",
    githubBackend: "https://github.com/jesusfvb/manga.server",
  },
];
