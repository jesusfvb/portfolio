import type { ReactElement } from "react";
import { SKILLS_ICONS } from "../constants/skills/data";
import type { TechInfo } from "../constants/skills/types";

/**
 * Ordena las entradas por especificidad para búsqueda correcta
 */
const getOrderedEntries = () => {
  return Object.entries(SKILLS_ICONS).sort((a, b) => {
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
};

/**
 * Verifica si una tecnología coincide con un caso especial
 */
const matchesSpecialCase = (key: string, techLower: string): boolean => {
  switch (key) {
    case "react native gesture handler":
      return (
        techLower.includes("react native gesture handler") ||
        techLower.includes("react-native-gesture-handler") ||
        techLower.includes("gesture handler")
      );

    case "react native reanimated":
      return (
        !techLower.includes("gesture handler") &&
        (techLower.includes("react native reanimated") ||
          techLower.includes("react-native-reanimated") ||
          techLower.includes("reanimated"))
      );

    case "react navigation":
      return (
        techLower.includes("react navigation") ||
        techLower.includes("react-navigation") ||
        techLower.includes("@react-navigation")
      );

    case "react native":
      return (
        !techLower.includes("reanimated") &&
        !techLower.includes("gesture handler") &&
        techLower.includes("react native")
      );

    case "react query":
      return (
        techLower.includes("react query") ||
        techLower.includes("react-query") ||
        techLower.includes("tanstack query")
      );

    case "react router":
      return (
        techLower.includes("react router") ||
        techLower.includes("react-router") ||
        techLower.includes("@remix-run/react-router")
      );

    case "react":
      return (
        !techLower.includes("react query") &&
        !techLower.includes("react-query") &&
        !techLower.includes("tanstack query") &&
        !techLower.includes("react router") &&
        !techLower.includes("react-router") &&
        !techLower.includes("react navigation") &&
        !techLower.includes("react-navigation") &&
        !techLower.includes("native") &&
        !techLower.includes("reanimated")
      );

    case "spring security":
      return techLower.includes("security");

    case "spring cloud":
      return techLower.includes("microservice") || techLower.includes("cloud");

    case "spring":
      return (
        !techLower.includes("security") &&
        !techLower.includes("microservice") &&
        !techLower.includes("cloud")
      );

    default:
      return false;
  }
};

/**
 * Función interna para obtener la información completa de una tecnología
 */
const getTechInfoInternal = (tech: string): TechInfo | null => {
  const techLower = tech.toLowerCase();
  const orderedEntries = getOrderedEntries();

  for (const [key, { icon, keywords, displayName, url }] of orderedEntries) {
    const matches = keywords.some((keyword) => techLower.includes(keyword));

    if (matches) {
      // Verificar casos especiales
      if (matchesSpecialCase(key, techLower)) {
        return { icon, displayName, url };
      }

      // Si no es un caso especial, verificar si necesita validación adicional
      const needsSpecialCheck = [
        "react native gesture handler",
        "react native reanimated",
        "react navigation",
        "react native",
        "react query",
        "react router",
        "react",
        "spring security",
        "spring cloud",
        "spring",
      ].includes(key);

      if (needsSpecialCheck) {
        continue;
      }

      // Para el resto, devolver la información completa
      return { icon, displayName, url };
    }
  }

  return null;
};

/**
 * Obtiene solo el icono de una tecnología
 */
export const getTechIcon = (tech: string): ReactElement | null => {
  const info = getTechInfoInternal(tech);
  return info ? info.icon : null;
};

/**
 * Obtiene la información completa de una tecnología (icono, nombre y URL)
 */
export const getTechInfo = (tech: string): TechInfo | null => {
  return getTechInfoInternal(tech);
};
