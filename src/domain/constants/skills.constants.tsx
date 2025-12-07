import type { ReactElement } from "react";
import {
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaReact
} from "react-icons/fa";
import {
  SiMongodb,
  SiMongoose,
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

export type SkillCategory = "frontend" | "backend" | "database" | "tools" | "mobile";

interface TechIconMap {
  icon: ReactElement;
  keywords: string[];
  category: SkillCategory;
  displayName: string;
}

export const SKILLS_ICONS: Record<string, TechIconMap> = {
  "react native": {
    icon: <SiReact style={{ color: "#61DAFB" }} />,
    keywords: ["react native", "reactnative"],
    category: "mobile",
    displayName: "React Native",
  },
  react: {
    icon: <FaReact style={{ color: "#61DAFB" }} />,
    keywords: ["react"],
    category: "frontend",
    displayName: "React",
  },
  typescript: {
    icon: <SiTypescript style={{ color: "#3178C6" }} />,
    keywords: ["typescript", "ts"],
    category: "frontend",
    displayName: "TypeScript",
  },
  css: {
    icon: <FaCss3Alt style={{ color: "#1572B6" }} />,
    keywords: ["css"],
    category: "frontend",
    displayName: "CSS",
  },
  node: {
    icon: <SiNodedotjs style={{ color: "#339933" }} />,
    keywords: ["node"],
    category: "backend",
    displayName: "Node.js",
  },
  mongodb: {
    icon: <SiMongodb style={{ color: "#47A248" }} />,
    keywords: ["mongodb", "mongo"],
    category: "database",
    displayName: "MongoDB",
  },
  next: {
    icon: <SiNextdotjs style={{ color: "#FFFFFF" }} />,
    keywords: ["next"],
    category: "frontend",
    displayName: "Next.js",
  },
  stripe: {
    icon: <SiStripe style={{ color: "#635BFF" }} />,
    keywords: ["stripe"],
    category: "tools",
    displayName: "Stripe",
  },
  postgresql: {
    icon: <SiPostgresql style={{ color: "#336791" }} />,
    keywords: ["postgresql", "postgres"],
    category: "database",
    displayName: "PostgreSQL",
  },
  tailwind: {
    icon: <SiTailwindcss style={{ color: "#06B6D4" }} />,
    keywords: ["tailwind"],
    category: "frontend",
    displayName: "Tailwind CSS",
  },
  vite: {
    icon: <SiVite style={{ color: "#41D1FF" }} />,
    keywords: ["vite"],
    category: "frontend",
    displayName: "Vite",
  },
  java: {
    icon: <FaJava style={{ color: "#ED8B00" }} />,
    keywords: ["java"],
    category: "backend",
    displayName: "Java",
  },
  spring: {
    icon: <SiSpring style={{ color: "#6DB33F" }} />,
    keywords: ["spring", "spring boot"],
    category: "backend",
    displayName: "Spring Boot",
  },
  html: {
    icon: <FaHtml5 style={{ color: "#E34F26" }} />,
    keywords: ["html"],
    category: "frontend",
    displayName: "HTML",
  },
  git: {
    icon: <FaGitAlt style={{ color: "#F05032" }} />,
    keywords: ["git"],
    category: "tools",
    displayName: "Git",
  },
  github: {
    icon: <FaGithub style={{ color: "#FFFFFF" }} />,
    keywords: ["github"],
    category: "tools",
    displayName: "GitHub",
  },
  docker: {
    icon: <FaDocker style={{ color: "#2496ED" }} />,
    keywords: ["docker"],
    category: "tools",
    displayName: "Docker",
  },
  javascript: {
    icon: <FaJs style={{ color: "#F05032" }} />,
    keywords: ["javascript"],
    category: "frontend",
    displayName: "JavaScript",
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
