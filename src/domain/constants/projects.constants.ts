import type { Project } from "../interfaces/project.interface";

export const PROJECTS: Project[] = [
  {
    id: 1,
    slug: "auto-contact",
    i18nKey: "autoContact",
    title: "projects.items.autoContact.title",
    description: "projects.items.autoContact.description",
    technologies: [
      "TypeScript",
      "React Native",
      "Expo",
      "REST APIs",
      "Jest",
    ],
    banner: "/projects/auto-contact/icon.png",
    bannerFit: "contain",
    screenshots: [
      "/projects/auto-contact/Auto-Contact1.webp",
      "/projects/auto-contact/Auto-Contact2.webp",
    ],
  },
  {
    id: 2,
    slug: "congresso-terciarios",
    i18nKey: "congressoTerciarios",
    title: "projects.items.congressoTerciarios.title",
    description: "projects.items.congressoTerciarios.description",
    technologies: ["Flutter", "Dart", "Hive", "MySQL", "Docker", "GetX"],
    banner: "/projects/congresso-terciarios/icon.webp",
    bannerFit: "contain",
    screenshots: [
      "/projects/congresso-terciarios/Screenshot_pantalla principal.webp",
      "/projects/congresso-terciarios/Screenshot_lector de qr sin qr.webp",
      "/projects/congresso-terciarios/Screenshot_lector de qr resultado balido.webp",
      "/projects/congresso-terciarios/Screenshot_lector de qr resultado invaliod.webp",
      "/projects/congresso-terciarios/Screenshot_resultados despues de leer barios qrs.webp",
      "/projects/congresso-terciarios/Screenshot_exportacion de resultados.webp",
    ],
  },
];
