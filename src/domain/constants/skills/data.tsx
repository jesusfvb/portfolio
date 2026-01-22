import {
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaLinux,
  FaReact,
} from "react-icons/fa";
import { SiMongodb, SiMysql, SiPostgresql, SiSpring } from "react-icons/si";
import type { TechIconMap } from "./types";
import { createImageIcon } from "../../services/create-image-icon";
import { SpringSecurityIcon, JUnitIcon } from "../../../../icons";

export const SKILLS_ICONS: Record<string, TechIconMap> = {
  // Backend
  java: {
    icon: <FaJava style={{ color: "#ED8B00" }} />,
    keywords: ["java"],
    category: "backend",
    displayName: "Java",
    type: "language",
    url: "https://www.java.com",
  },
  spring: {
    icon: <SiSpring style={{ color: "#6DB33F" }} />,
    keywords: ["spring boot", "springboot"],
    category: "backend",
    displayName: "Spring Boot",
    type: "framework",
    url: "https://spring.io/projects/spring-boot",
  },
  "spring security": {
    icon: <SpringSecurityIcon />,
    keywords: ["spring security", "springsecurity"],
    category: "backend",
    displayName: "Spring Security",
    type: "framework",
    url: "https://spring.io/projects/spring-security",
    additionalInfo: "( JWT básico)",
  },

  "rest apis": {
    icon: createImageIcon(
      "/images/icons/rest-api-svgrepo-com.svg",
      "REST APIs",
    ),
    keywords: ["rest", "rest apis", "restful"],
    category: "backend",
    displayName: "REST APIs",
    type: "other",
    url: "https://restfulapi.net",
  },

  // Bases de datos
  postgresql: {
    icon: <SiPostgresql style={{ color: "#336791" }} />,
    keywords: ["postgresql", "postgres"],
    category: "database",
    displayName: "PostgreSQL",
    type: "other",
    url: "https://www.postgresql.org",
  },
  mysql: {
    icon: <SiMysql style={{ color: "#00758F" }} />,
    keywords: ["mysql"],
    category: "database",
    displayName: "MySQL",
    type: "other",
    url: "https://www.mysql.com",
  },
  mongodb: {
    icon: <SiMongodb style={{ color: "#47A248" }} />,
    keywords: ["mongodb", "mongo"],
    category: "database",
    displayName: "MongoDB",
    type: "other",
    url: "https://www.mongodb.com",
    additionalInfo: "(básico)",
  },

  // Herramientas y prácticas
  git: {
    icon: <FaGitAlt style={{ color: "#F05032" }} />,
    keywords: ["git"],
    category: "tools",
    displayName: "Git",
    type: "other",
    url: "https://git-scm.com",
  },
  github: {
    icon: <FaGithub style={{ color: "#FFFFFF" }} />,
    keywords: ["github"],
    category: "tools",
    displayName: "GitHub",
    type: "other",
    url: "https://github.com",
  },
  maven: {
    icon: createImageIcon(
      "https://maven.apache.org/images/maven-logo-black-on-white.png",
      "Maven",
    ),
    keywords: ["maven"],
    category: "tools",
    displayName: "Maven",
    type: "other",
    url: "https://maven.apache.org",
  },
  swagger: {
    icon: createImageIcon(
      "https://static1.smartbear.co/swagger/media/assets/swagger_fav.png",
      "Swagger",
    ),
    keywords: ["swagger", "openapi"],
    category: "tools",
    displayName: "Swagger",
    type: "other",
    url: "https://swagger.io",
  },
  junit: {
    icon: <JUnitIcon />,
    keywords: ["junit"],
    category: "tools",
    displayName: "JUnit",
    type: "framework",
    url: "https://junit.org",
    additionalInfo: "(básico)",
  },
  docker: {
    icon: <FaDocker style={{ color: "#2496ED" }} />,
    keywords: ["docker"],
    category: "tools",
    displayName: "Docker",
    type: "other",
    url: "https://www.docker.com",
    additionalInfo: "(básico)",
  },

  linux: {
    icon: <FaLinux style={{ color: "#FCC624" }} />,
    keywords: ["linux"],
    category: "tools",
    displayName: "Linux",
    type: "other",
    url: "https://www.linux.org",
    additionalInfo: "(básico)",
  },

  // Adicional
  react: {
    icon: <FaReact style={{ color: "#61DAFB" }} />,
    keywords: ["react"],
    category: "additional",
    displayName: "React",
    type: "framework",
    url: "https://react.dev",
    additionalInfo: "(básico)",
  },

  "react native": {
    icon: <FaReact style={{ color: "#61DAFB" }} />,
    keywords: ["react native", "reactnative"],
    category: "additional",
    displayName: "React Native",
    type: "framework",
    url: "https://react.dev",
    additionalInfo: "(básico)",
  },
};
