import type { ReactElement } from "react";
import {
  FaCss3Alt,
  FaJava,
  FaReact
} from "react-icons/fa";
import {
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSpring,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
  SiVite
} from "react-icons/si";

interface TechIconMap {
  icon: ReactElement;
  keywords: string[];
}

export const SKILLS_ICONS: Record<string, TechIconMap> = {
  "react native": {
    icon: <SiReact style={{ color: "#61DAFB" }} />,
    keywords: ["react native", "reactnative"],
  },
  react: {
    icon: <FaReact style={{ color: "#61DAFB" }} />,
    keywords: ["react"],
  },
  typescript: {
    icon: <SiTypescript style={{ color: "#3178C6" }} />,
    keywords: ["typescript"],
  },
  css: {
    icon: <FaCss3Alt style={{ color: "#1572B6" }} />,
    keywords: ["css"],
  },
  node: {
    icon: <SiNodedotjs style={{ color: "#339933" }} />,
    keywords: ["node"],
  },
  mongodb: {
    icon: <SiMongodb style={{ color: "#47A248" }} />,
    keywords: ["mongodb"],
  },
  next: {
    icon: <SiNextdotjs style={{ color: "#FFFFFF" }} />,
    keywords: ["next"],
  },
  stripe: {
    icon: <SiStripe style={{ color: "#635BFF" }} />,
    keywords: ["stripe"],
  },
  postgresql: {
    icon: <SiPostgresql style={{ color: "#336791" }} />,
    keywords: ["postgresql", "postgres"],
  },
  tailwind: {
    icon: <SiTailwindcss style={{ color: "#06B6D4" }} />,
    keywords: ["tailwind"],
  },
  vite: {
    icon: <SiVite style={{ color: "#41D1FF" }} />,
    keywords: ["vite"],
  },
  java: {
    icon: <FaJava style={{ color: "#ED8B00" }} />,
    keywords: ["java"],
  },
  spring: {
    icon: <SiSpring style={{ color: "#6DB33F" }} />,
    keywords: ["spring"],
  },
};

export const getTechIcon = (tech: string): ReactElement | null => {
  const techLower = tech.toLowerCase();

  // Ordenar por especificidad: primero los casos más específicos
  const orderedEntries = Object.entries(SKILLS_ICONS).sort((a, b) => {
    // "react native" debe ir antes que "react"
    if (a[0] === "react native") return -1;
    if (b[0] === "react native") return 1;
    // "next" debe ir antes que "react" (porque "next.js" contiene "react")
    if (a[0] === "next") return -1;
    if (b[0] === "next") return 1;
    return 0;
  });

  for (const [key, { icon, keywords }] of orderedEntries) {
    const matches = keywords.some((keyword) => techLower.includes(keyword));

    if (matches) {
      // Casos especiales que necesitan verificación adicional
      if (key === "react native") {
        if (techLower.includes("react native")) {
          return icon;
        }
        continue;
      }

      if (key === "react") {
        // Solo coincidir si no es "next" ni "react native"
        if (!techLower.includes("next") && !techLower.includes("native")) {
          return icon;
        }
        continue;
      }

      // Para el resto, devolver el icono directamente
      return icon;
    }
  }

  return null;
};
