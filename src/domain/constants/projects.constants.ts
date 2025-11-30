import type { Project } from "../interfaces/project.interface";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Portfolio Personal",
    description:
      "Portfolio web personal desarrollado con React y TypeScript. Incluye diseño moderno con Tailwind CSS v4, arquitectura limpia, carrusel de proyectos interactivo, secciones de habilidades, educación y contacto. Totalmente responsive y optimizado para rendimiento.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    github: "https://github.com/jesusfv/porfolio_jesusfvb",
  },
  {
    id: 2,
    title: "App de Manga",
    description:
      "Aplicación móvil multiplataforma para lectura y gestión de mangas. Backend robusto desarrollado con Java y Spring Boot, API REST completa. Frontend móvil en React Native con TypeScript. Incluye catálogo de mangas, sistema de favoritos, lectura online, búsqueda avanzada y recomendaciones personalizadas.",
    technologies: [
      "React Native",
      "TypeScript",
      "Java",
      "Spring Boot",
      "MongoDB",
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
    githubFrontend: "https://github.com/jesusfv/manga-app-frontend",
    githubBackend: "https://github.com/jesusfv/manga-app-backend",
  },
];
