import { useState, useEffect } from "react";
import { loadMarkdownDescription } from "@/domain/services/description-loader.service";
import type { ProjectDescription } from "@/domain/interfaces/project.interface";

/**
 * Hook para cargar descripciones de proyectos desde archivos markdown
 * @param description - Objeto con las descripciones (puede ser texto o ruta a archivo)
 * @returns Objeto con las descripciones cargadas
 */
export function useProjectDescription(
  description: ProjectDescription
): ProjectDescription {
  const [loadedDescription, setLoadedDescription] =
    useState<ProjectDescription>(description);

  useEffect(() => {
    const loadDescriptions = async () => {
      const newDescription: ProjectDescription = { short: "", full: "" };

      // Cargar descripción corta
      if (description.short.startsWith("/")) {
        // Es una ruta a un archivo
        newDescription.short = await loadMarkdownDescription(description.short);
      } else {
        // Es texto directo
        newDescription.short = description.short;
      }

      // Cargar descripción completa
      if (description.full.startsWith("/")) {
        // Es una ruta a un archivo
        newDescription.full = await loadMarkdownDescription(description.full);
      } else {
        // Es texto directo
        newDescription.full = description.full;
      }

      setLoadedDescription(newDescription);
    };

    loadDescriptions();
  }, [description]);

  return loadedDescription;
}

