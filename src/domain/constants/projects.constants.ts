import type { Project } from "../interfaces/project.interface";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Server Mangas",
    description: "Backend de plataforma de lectura de mangas y manhwas, desarrollado con Java y Spring Boot, que expone una API REST para la búsqueda de mangas, consulta de capítulos y entrega de imágenes.El proyecto está estructurado con casos de uso y separación de responsabilidades, priorizando mantenibilidad y escalabilidad.",
    technologies: [
      "Spring Boot",
      "MongoDB",
    ],
    banner: "/images/app_manga/AppManga Banner.webp",
    githubBackend: "https://github.com/jesusfvb/manga.server",
  },
];
