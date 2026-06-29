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
];
