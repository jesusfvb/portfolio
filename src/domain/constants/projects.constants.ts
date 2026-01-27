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
  {
    id: 2,
    title: "Portfolio Personal",
    description: "Portfolio web personal desarrollado con React 19, TypeScript y Tailwind CSS v4. Incluye diseño moderno, arquitectura limpia, carrusel de proyectos interactivo, secciones de habilidades, educación y contacto. Totalmente responsive y optimizado para rendimiento.",
    technologies: ["React"],
    banner: "/images/portfolio/portfolio_banner.webp",
    github: "https://github.com/jesusfvb/portfolio",
    liveUrl: "https://jesusfvb.vercel.app",
  },
];
