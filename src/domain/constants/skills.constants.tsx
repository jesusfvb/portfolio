import type { ReactElement } from "react";
import {
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaReact,
} from "react-icons/fa";
import {
  SiMongodb,
  SiPostgresql,
  SiReact,
  SiSpring,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export type SkillCategory =
  | "frontend"
  | "backend"
  | "database"
  | "tools"
  | "mobile";

export type SkillType = "language" | "framework" | "other";

interface TechIconMap {
  icon: ReactElement;
  keywords: string[];
  category: SkillCategory;
  displayName: string;
  type: SkillType;
  url?: string;
}

export const SKILLS_ICONS: Record<string, TechIconMap> = {
  "react native": {
    icon: <SiReact style={{ color: "#61DAFB" }} />,
    keywords: ["react native", "reactnative"],
    category: "mobile",
    displayName: "React Native",
    type: "framework",
    url: "https://reactnative.dev",
  },
  expo: {
    icon: (
      <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "20px", height: "20px" }}>
        <img
          src="https://docs.expo.dev/static/images/favicon.ico"
          alt="Expo"
          width="20"
          height="20"
          style={{ objectFit: "contain", display: "block", maxWidth: "100%", maxHeight: "100%" }}
        />
      </span>
    ),
    keywords: ["expo", "expo-dev"],
    category: "mobile",
    displayName: "Expo",
    type: "framework",
    url: "https://expo.dev",
  },
  "react navigation": {
    icon: (
      <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "20px", height: "20px" }}>
        <img
          src="https://reactnavigation.org/img/favicon.ico"
          alt="React Navigation"
          width="20"
          height="20"
          style={{ objectFit: "contain", display: "block", maxWidth: "100%", maxHeight: "100%" }}
        />
      </span>
    ),
    keywords: ["react navigation", "react-navigation", "@react-navigation"],
    category: "mobile",
    displayName: "React Navigation",
    type: "framework",
    url: "https://reactnavigation.org",
  },
  "react native reanimated": {
    icon: (
      <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "20px", height: "20px" }}>
        <img
          src="https://docs.swmansion.com/react-native-reanimated/img/favicon.ico"
          alt="React Native Reanimated"
          width="20"
          height="20"
          style={{ objectFit: "contain", display: "block", maxWidth: "100%", maxHeight: "100%" }}
        />
      </span>
    ),
    keywords: ["react native reanimated", "react-native-reanimated", "reanimated"],
    category: "mobile",
    displayName: "React Native Reanimated",
    type: "other",
    url: "https://docs.swmansion.com/react-native-reanimated",
  },
  "react native gesture handler": {
    icon: (
      <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "20px", height: "20px" }}>
        <img
          src="https://docs.swmansion.com/react-native-gesture-handler/img/favicon.ico"
          alt="React Native Gesture Handler"
          width="20"
          height="20"
          style={{ objectFit: "contain", display: "block", maxWidth: "100%", maxHeight: "100%" }}
        />
      </span>
    ),
    keywords: ["react native gesture handler", "react-native-gesture-handler", "gesture handler"],
    category: "mobile",
    displayName: "React Native Gesture Handler",
    type: "other",
    url: "https://docs.swmansion.com/react-native-gesture-handler",
  },
  nativewind: {
    icon: (
      <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "20px", height: "20px" }}>
        <img
          src="https://www.nativewind.dev/favicon.svg"
          alt="NativeWind"
          width="20"
          height="20"
          style={{ objectFit: "contain", display: "block", maxWidth: "100%", maxHeight: "100%" }}
        />
      </span>
    ),
    keywords: ["nativewind", "native-wind"],
    category: "mobile",
    displayName: "NativeWind",
    type: "other",
    url: "https://www.nativewind.dev",
  },
  react: {
    icon: <FaReact style={{ color: "#61DAFB" }} />,
    keywords: ["react"],
    category: "frontend",
    displayName: "React",
    type: "framework",
    url: "https://react.dev",
  },
  typescript: {
    icon: <SiTypescript style={{ color: "#3178C6" }} />,
    keywords: ["typescript", "ts"],
    category: "frontend",
    displayName: "TypeScript",
    type: "language",
    url: "https://www.typescriptlang.org",
  },
  css: {
    icon: <FaCss3Alt style={{ color: "#1572B6" }} />,
    keywords: ["css"],
    category: "frontend",
    displayName: "CSS",
    type: "language",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  mongodb: {
    icon: <SiMongodb style={{ color: "#47A248" }} />,
    keywords: ["mongodb", "mongo"],
    category: "database",
    displayName: "MongoDB",
    type: "other",
    url: "https://www.mongodb.com",
  },
  postgresql: {
    icon: <SiPostgresql style={{ color: "#336791" }} />,
    keywords: ["postgresql", "postgres"],
    category: "database",
    displayName: "PostgreSQL",
    type: "other",
    url: "https://www.postgresql.org",
  },
  axios: {
    icon: (
      <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "20px", height: "20px" }}>
        <img
          src="https://axios-http.com/assets/favicon.ico"
          alt="Axios"
          width="20"
          height="20"
          style={{ objectFit: "contain", display: "block", maxWidth: "100%", maxHeight: "100%" }}
        />
      </span>
    ),
    keywords: ["axios"],
    category: "frontend",
    displayName: "Axios",
    type: "other",
    url: "https://axios-http.com",
  },
  "react query": {
    icon: (
      <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "20px", height: "20px" }}>
        <img
          src="https://tanstack.com/favicon.ico"
          alt="React Query"
          width="20"
          height="20"
          style={{ objectFit: "contain", display: "block", maxWidth: "100%", maxHeight: "100%" }}
        />
      </span>
    ),
    keywords: [
      "react query",
      "react-query",
      "tanstack query",
      "@tanstack/react-query",
    ],
    category: "frontend",
    displayName: "React Query",
    type: "other",
    url: "https://tanstack.com/query",
  },
  jest: {
    icon: (
      <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "20px", height: "20px" }}>
        <img
          src="https://jestjs.io/img/favicon/favicon.ico"
          alt="Jest"
          width="20"
          height="20"
          style={{ objectFit: "contain", display: "block", maxWidth: "100%", maxHeight: "100%" }}
        />
      </span>
    ),
    keywords: ["jest"],
    category: "frontend",
    displayName: "Jest",
    type: "framework",
    url: "https://jestjs.io",
  },
  "react router": {
    icon: (
      <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "20px", height: "20px" }}>
        <img
          src="https://reactrouter.com/favicon.ico"
          alt="React Router"
          width="20"
          height="20"
          style={{ objectFit: "contain", display: "block", maxWidth: "100%", maxHeight: "100%" }}
        />
      </span>
    ),
    keywords: ["react router", "react-router", "@remix-run/react-router"],
    category: "frontend",
    displayName: "React Router",
    type: "framework",
    url: "https://reactrouter.com",
  },
  zustand: {
    icon: (
      <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "20px", height: "20px" }}>
        <img
          src="https://zustand-demo.pmnd.rs/favicon.ico"
          alt="Zustand"
          width="20"
          height="20"
          style={{ objectFit: "contain", display: "block", maxWidth: "100%", maxHeight: "100%" }}
        />
      </span>
    ),
    keywords: ["zustand"],
    category: "frontend",
    displayName: "Zustand",
    type: "other",
    url: "https://zustand-demo.pmnd.rs",
  },
  redux: {
    icon: (
      <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "20px", height: "20px" }}>
        <img
          src="https://redux.js.org/img/favicon/favicon.ico"
          alt="Redux"
          width="20"
          height="20"
          style={{ objectFit: "contain", display: "block", maxWidth: "100%", maxHeight: "100%" }}
        />
      </span>
    ),
    keywords: ["redux", "@reduxjs/toolkit"],
    category: "frontend",
    displayName: "Redux",
    type: "other",
    url: "https://redux.js.org",
  },
  tailwind: {
    icon: <SiTailwindcss style={{ color: "#06B6D4" }} />,
    keywords: ["tailwind"],
    category: "frontend",
    displayName: "Tailwind CSS",
    type: "framework",
    url: "https://tailwindcss.com",
  },
  vite: {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 410 404"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M399.641 59.5246L215.643 388.545C211.844 395.338 202.084 395.378 198.228 388.618L10.5817 59.5563C6.38087 52.1896 12.6802 43.2665 21.0281 44.7586L205.223 77.6824C206.398 77.8924 207.601 77.8904 208.776 77.6763L389.119 44.8058C397.439 43.2894 403.768 52.1434 399.641 59.5246Z"
          fill="url(#paint0_linear_vite)"
        />
        <path
          d="M292.965 1.5744L156.801 28.2552C154.563 28.6937 152.906 30.5903 152.771 32.8664L144.395 174.33C144.198 177.662 147.258 180.248 150.51 179.498L188.42 170.749C191.967 169.931 195.172 173.055 194.443 176.622L183.18 231.775C182.422 235.487 185.907 238.661 189.532 237.56L212.947 230.446C216.577 229.344 220.065 232.527 219.297 236.242L201.398 322.875C200.278 328.294 207.486 331.249 210.492 326.603L212.5 323.5L323.454 102.072C325.312 98.3645 322.108 94.137 318.036 94.9228L279.014 102.454C275.347 103.161 272.227 99.746 273.262 96.1583L298.731 7.86689C299.767 4.27314 296.636 0.855181 292.965 1.5744Z"
          fill="url(#paint1_linear_vite)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_vite"
            x1="6.00017"
            y1="32.9999"
            x2="235"
            y2="344"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#41D1FF" />
            <stop offset="1" stopColor="#BD34FE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_vite"
            x1="194.651"
            y1="8.81818"
            x2="236.076"
            y2="292.989"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFEA83" />
            <stop offset="0.0833333" stopColor="#FFDD35" />
            <stop offset="1" stopColor="#FFA800" />
          </linearGradient>
        </defs>
      </svg>
    ),
    keywords: ["vite"],
    category: "frontend",
    displayName: "Vite",
    type: "framework",
    url: "https://vite.dev",
  },
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
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 108.08 150.97"
        width="20"
        height="20"
        style={{ fill: "#6bb344" }}
      >
        <path d="M108.08,13,54,0,0,13V54.6H28.67a23.94,23.94,0,0,0,0,6H0V80.14C0,125,54,151,54,151s54-26,54-70.83V60.62H79.4a22.75,22.75,0,0,0,0-6h28.68ZM54,77.15A19.54,19.54,0,1,1,73.58,57.61,19.54,19.54,0,0,1,54,77.15Z" />
        <path d="M54,48.34a5.06,5.06,0,0,0-2.32,9.56v1.31l1.49,1.49v1l1,1v1l-.88.88.94,1.55v1l-1,1.19,1.4,1.4,1.55-1.55V58A5.06,5.06,0,0,0,54,48.34Zm0,5.26a1.88,1.88,0,1,1,1.88-1.88A1.88,1.88,0,0,1,54,53.6Z" />
      </svg>
    ),
    keywords: ["spring security", "springsecurity"],
    category: "backend",
    displayName: "Spring Security",
    type: "framework",
    url: "https://spring.io/projects/spring-security",
  },
  "spring cloud": {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 157.91 107.14"
        width="20"
        height="20"
        style={{ fill: "#6db33f" }}
      >
        <path d="M52.75,87.2a3.21,3.21,0,1,1-.47-4.52A3.21,3.21,0,0,1,52.75,87.2Zm51-11.25C94.45,88.3,74.66,84.14,62,84.73c0,0-2.25.13-4.52.5,0,0,.86-.36,1.95-.74C68.32,81.41,72.53,80.79,78,78c10.17-5.21,20.3-16.56,22.36-28.36C96.44,61,84.66,70.75,73.93,74.72c-7.34,2.7-20.62,5.34-20.62,5.34l-.54-.28c-9-4.39-9.29-24,7.11-30.26,7.19-2.76,14.07-1.24,21.84-3.09,8.29-2,17.89-8.19,21.8-16.32C107.89,43.09,113.15,63.39,103.72,76Z" />
        <path d="M122.33,107.14H39.79A39.79,39.79,0,0,1,33.86,28C39,20.88,45.42,12.88,54.74,7.42a54.21,54.21,0,0,1,61.53,4.69l.1.09a77.49,77.49,0,0,1,11.68,12.51,39,39,0,0,1,6.64,12.74c.09.33.17.52.21.64.2.1.55.25.83.37l1.07.47a36.37,36.37,0,0,1,13.57,10.71,35.59,35.59,0,0,1-28,57.5ZM82.08,8a46.23,46.23,0,0,0-23.3,6.32c-8.05,4.72-13.86,12-18.47,18.41l-.19.28A5.61,5.61,0,0,1,36,35.78a31.79,31.79,0,0,0,3.8,63.36h82.54a27.59,27.59,0,0,0,21.73-44.58,28.58,28.58,0,0,0-6.55-6.1,29,29,0,0,0-4-2.26l-.89-.39A10.19,10.19,0,0,1,129.47,44,8.89,8.89,0,0,1,127,39.61a31,31,0,0,0-5.37-10.14A70,70,0,0,0,111.2,18.3,46.05,46.05,0,0,0,82.08,8Z" />
      </svg>
    ),
    keywords: [
      "spring microservices",
      "spring microservice",
      "microservices",
      "spring cloud",
    ],
    category: "backend",
    displayName: "Spring Cloud",
    type: "framework",
    url: "https://spring.io/projects/spring-cloud",
  },
  lombok: {
    icon: (
      <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "20px", height: "20px" }}>
        <img
          src="https://projectlombok.org/favicon.ico"
          alt="Lombok"
          width="20"
          height="20"
          style={{ objectFit: "contain", display: "block", maxWidth: "100%", maxHeight: "100%" }}
        />
      </span>
    ),
    keywords: ["lombok"],
    category: "backend",
    displayName: "Lombok",
    type: "other",
    url: "https://projectlombok.org",
  },
  junit: {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 283.4"
        width="20"
        height="20"
        style={{ filter: "drop-shadow(0 0 2px rgba(255,255,255,0.3))" }}
      >
        <path
          style={{ fill: "#E0E0E0" }}
          d="M419.62,167.74c0,15.53-2.69,26.14-8.07,31.81-5.38,5.67-15.83,8.51-31.36,8.51-6.18,0-11.65-.2-16.43-.6-4.78-.4-9.26-1.09-13.44-2.09v32.86c4.18,1.2,9.11,2.09,14.79,2.69,5.68.6,12.1.9,19.27.9,25.29,0,43.46-5.62,54.52-16.88,11.05-11.25,16.58-29.62,16.58-55.11V51.84h-35.84v115.9Z"
        />
        <path
          style={{ fill: "#E0E0E0" }}
          d="M607.8,162.37c0,17.32-2.99,29.27-8.96,35.84-5.97,6.57-16.93,9.86-32.86,9.86s-26.58-3.24-32.56-9.71c-5.97-6.47-8.96-18.47-8.96-35.99V51.84h-35.84v110.52c0,27.88,6.17,48.09,18.52,60.64,12.34,12.55,31.96,18.82,58.84,18.82s45.8-6.52,58.55-19.57c12.74-13.04,19.12-33.01,19.12-59.89V51.84h-35.85v110.52Z"
        />
        <path
          style={{ fill: "#E0E0E0" }}
          d="M758.35,88.58c-10.95,0-20.46,1.45-28.53,4.33-8.06,2.89-15.58,7.42-22.55,13.59h-.9l-1.49-14.94h-29.87v147.56h34.65v-109.33c5.38-3.38,11.15-5.92,17.32-7.62,6.17-1.69,12.55-2.54,19.12-2.54,9.16,0,16.08,1.84,20.76,5.53,4.68,3.69,7.02,9.11,7.02,16.28v97.68h34.65v-102.16c0-15.93-4.28-27.98-12.85-36.14-8.56-8.16-21.01-12.25-37.34-12.25Z"
        />
        <rect
          style={{ fill: "#E0E0E0" }}
          x="839.3"
          y="40.49"
          width="36.74"
          height="30.17"
        />
        <rect
          style={{ fill: "#E0E0E0" }}
          x="840.49"
          y="91.57"
          width="34.65"
          height="147.56"
        />
        <path
          style={{ fill: "#E0E0E0" }}
          d="M988.95,208.82c-4.58.5-8.56.75-11.95.75-9.76,0-16.53-1.59-20.31-4.78-3.79-3.18-5.68-9.16-5.68-17.92v-66.31h47.2v-28.97h-47.2v-35.25h-28.97l-4.78,35.25h-20.61v28.97h19.71v67.51c0,19.32,4.08,33.11,12.25,41.37,8.16,8.27,21.7,12.4,40.62,12.4,4.97,0,10.5-.55,16.58-1.64,6.07-1.09,10.8-2.34,14.19-3.73v-29.57c-2.79.8-6.47,1.45-11.05,1.94Z"
        />
        <path
          style={{ fill: "#FF5252" }}
          d="M197.75,196.87l-56.05,56.05L30.48,141.7l38.27-38.27-20.61-20.61L7.57,123.39c-10.1,10.1-10.1,26.52,0,36.62l115.82,115.82c5.05,5.05,11.68,7.57,18.31,7.57s13.26-2.53,18.31-7.57l58.35-58.35-20.61-20.61Z"
        />
        <path
          style={{ fill: "#4CAF50" }}
          d="M203.1,50.66L160.01,7.57c-10.09-10.09-26.52-10.09-36.62,0l-57.6,57.6,20.61,20.61,55.31-55.31,40.79,40.8,20.61-20.61Z"
        />
        <path
          style={{ fill: "#4CAF50" }}
          d="M252.25,99.82l-20.61,20.61,21.27,21.27-37.53,37.52,20.61,20.61,39.82-39.82c4.89-4.89,7.58-11.39,7.58-18.31s-2.69-13.42-7.58-18.31l-23.57-23.57Z"
        />
        <path
          style={{ fill: "#E0E0E0" }}
          d="M141.7,175.91c-3.73,0-7.46-1.42-10.3-4.27l-39.28-39.28,20.61-20.61,28.98,28.98,99.97-99.97,20.61,20.61-110.28,110.28c-2.85,2.85-6.57,4.27-10.3,4.27Z"
        />
      </svg>
    ),
    keywords: ["junit"],
    category: "backend",
    displayName: "JUnit",
    type: "framework",
    url: "https://junit.org",
  },
  mockito: {
    icon: (
      <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "20px", height: "20px" }}>
        <img
          src="https://site.mockito.org/favicon.ico"
          alt="Mockito"
          width="20"
          height="20"
          style={{ objectFit: "contain", display: "block", maxWidth: "100%", maxHeight: "100%" }}
        />
      </span>
    ),
    keywords: ["mockito"],
    category: "backend",
    displayName: "Mockito",
    type: "framework",
    url: "https://site.mockito.org",
  },
  mapstruct: {
    icon: (
      <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "20px", height: "20px" }}>
        <img
          src="https://mapstruct.org/images/favicon.ico"
          alt="MapStruct"
          width="20"
          height="20"
          style={{ objectFit: "contain", display: "block", maxWidth: "100%", maxHeight: "100%" }}
        />
      </span>
    ),
    keywords: ["mapstruct", "map struct"],
    category: "backend",
    displayName: "MapStruct",
    type: "other",
    url: "https://mapstruct.org",
  },
  html: {
    icon: <FaHtml5 style={{ color: "#E34F26" }} />,
    keywords: ["html"],
    category: "frontend",
    displayName: "HTML",
    type: "language",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
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
  docker: {
    icon: <FaDocker style={{ color: "#2496ED" }} />,
    keywords: ["docker"],
    category: "tools",
    displayName: "Docker",
    type: "other",
    url: "https://www.docker.com",
  },
  vscode: {
    icon: (
      <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "20px", height: "20px" }}>
        <img
          src="https://code.visualstudio.com/favicon.ico"
          alt="Visual Studio Code"
          width="20"
          height="20"
          style={{ objectFit: "contain", display: "block", maxWidth: "100%", maxHeight: "100%" }}
        />
      </span>
    ),
    keywords: ["vscode", "visual studio code", "vs code"],
    category: "tools",
    displayName: "Visual Studio Code",
    type: "other",
    url: "https://code.visualstudio.com",
  },
  cursor: {
    icon: (
      <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "20px", height: "20px" }}>
        <img
          src="https://cursor.sh/favicon.ico"
          alt="Cursor"
          width="20"
          height="20"
          style={{ objectFit: "contain", display: "block", maxWidth: "100%", maxHeight: "100%" }}
        />
      </span>
    ),
    keywords: ["cursor"],
    category: "tools",
    displayName: "Cursor",
    type: "other",
    url: "https://cursor.sh",
  },
  "intellij idea": {
    icon: (
      <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "20px", height: "20px" }}>
        <img
          src="https://www.jetbrains.com/favicon.ico"
          alt="IntelliJ IDEA"
          width="20"
          height="20"
          style={{ objectFit: "contain", display: "block", maxWidth: "100%", maxHeight: "100%" }}
        />
      </span>
    ),
    keywords: ["intellij idea", "intellij", "idea", "jetbrains intellij"],
    category: "tools",
    displayName: "IntelliJ IDEA",
    type: "other",
    url: "https://www.jetbrains.com/idea",
  },
  neovim: {
    icon: (
      <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "20px", height: "20px" }}>
        <img
          src="https://neovim.io/favicon.ico"
          alt="Neovim"
          width="20"
          height="20"
          style={{ objectFit: "contain", display: "block", maxWidth: "100%", maxHeight: "100%" }}
        />
      </span>
    ),
    keywords: ["neovim", "nvim"],
    category: "tools",
    displayName: "Neovim",
    type: "other",
    url: "https://neovim.io",
  },
  vim: {
    icon: (
      <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "20px", height: "20px" }}>
        <img
          src="https://www.vim.org/images/vim_shortcut.ico"
          alt="Vim"
          width="20"
          height="20"
          style={{ objectFit: "contain", display: "block", maxWidth: "100%", maxHeight: "100%" }}
        />
      </span>
    ),
    keywords: ["vim"],
    category: "tools",
    displayName: "Vim",
    type: "other",
    url: "https://www.vim.org",
  },
  javascript: {
    icon: <FaJs style={{ color: "#F05032" }} />,
    keywords: ["javascript"],
    category: "frontend",
    displayName: "JavaScript",
    type: "language",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
};

export const getTechIcon = (tech: string): ReactElement | null => {
  const techLower = tech.toLowerCase();

  // Ordenar por especificidad: primero los casos más específicos
  const orderedEntries = Object.entries(SKILLS_ICONS).sort((a, b) => {
    // "react native gesture handler" debe ir antes que "react native reanimated" y "react native"
    if (a[0] === "react native gesture handler") return -1;
    if (b[0] === "react native gesture handler") return 1;
    // "react native reanimated" debe ir antes que "react native"
    if (a[0] === "react native reanimated") return -1;
    if (b[0] === "react native reanimated") return 1;
    // "react navigation" debe ir antes que "react" y "react native"
    if (a[0] === "react navigation") return -1;
    if (b[0] === "react navigation") return 1;
    // "react native" debe ir antes que "react"
    if (a[0] === "react native") return -1;
    if (b[0] === "react native") return 1;
    // "react query" debe ir antes que "react" (porque "react query" contiene "react")
    if (a[0] === "react query") return -1;
    if (b[0] === "react query") return 1;
    // "react router" debe ir antes que "react" (porque "react router" contiene "react")
    if (a[0] === "react router") return -1;
    if (b[0] === "react router") return 1;
    // Spring específicos deben ir antes que "spring" genérico
    if (a[0] === "spring security" || a[0] === "spring cloud") return -1;
    if (b[0] === "spring security" || b[0] === "spring cloud") return 1;
    return 0;
  });

  for (const [key, { icon, keywords }] of orderedEntries) {
    const matches = keywords.some((keyword) => techLower.includes(keyword));

    if (matches) {
      // Casos especiales que necesitan verificación adicional
      if (key === "react native gesture handler") {
        if (
          techLower.includes("react native gesture handler") ||
          techLower.includes("react-native-gesture-handler") ||
          techLower.includes("gesture handler")
        ) {
          return icon;
        }
        continue;
      }

      if (key === "react native reanimated") {
        // Solo coincidir si no es "react native gesture handler"
        if (
          !techLower.includes("gesture handler") &&
          (techLower.includes("react native reanimated") ||
            techLower.includes("react-native-reanimated") ||
            techLower.includes("reanimated"))
        ) {
          return icon;
        }
        continue;
      }

      if (key === "react navigation") {
        if (
          techLower.includes("react navigation") ||
          techLower.includes("react-navigation") ||
          techLower.includes("@react-navigation")
        ) {
          return icon;
        }
        continue;
      }

      if (key === "react native") {
        // Solo coincidir si no es "react native reanimated" ni "react native gesture handler"
        if (
          !techLower.includes("reanimated") &&
          !techLower.includes("gesture handler") &&
          techLower.includes("react native")
        ) {
          return icon;
        }
        continue;
      }

      if (key === "react query") {
        if (
          techLower.includes("react query") ||
          techLower.includes("react-query") ||
          techLower.includes("tanstack query")
        ) {
          return icon;
        }
        continue;
      }

      if (key === "react router") {
        if (
          techLower.includes("react router") ||
          techLower.includes("react-router") ||
          techLower.includes("@remix-run/react-router")
        ) {
          return icon;
        }
        continue;
      }

      if (key === "react") {
        // Solo coincidir si no es "react query", "react router", "react navigation", "react native" ni "react native reanimated"
        if (
          !techLower.includes("react query") &&
          !techLower.includes("react-query") &&
          !techLower.includes("tanstack query") &&
          !techLower.includes("react router") &&
          !techLower.includes("react-router") &&
          !techLower.includes("react navigation") &&
          !techLower.includes("react-navigation") &&
          !techLower.includes("native") &&
          !techLower.includes("reanimated")
        ) {
          return icon;
        }
        continue;
      }

      if (key === "spring security") {
        if (techLower.includes("security")) {
          return icon;
        }
        continue;
      }

      if (key === "spring cloud") {
        if (techLower.includes("microservice") || techLower.includes("cloud")) {
          return icon;
        }
        continue;
      }

      if (key === "spring") {
        // Solo coincidir si no es "spring security" ni "spring cloud"
        if (
          !techLower.includes("security") &&
          !techLower.includes("microservice") &&
          !techLower.includes("cloud")
        ) {
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
