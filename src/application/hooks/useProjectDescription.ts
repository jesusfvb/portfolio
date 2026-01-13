import { useState, useEffect } from "react";
import { loadMarkdownDescription } from "@/domain/services/description-loader.service";
import type { ProjectDescription } from "@/domain/interfaces/project.interface";

interface UseProjectDescriptionReturn {
  data: ProjectDescription;
  loading: boolean;
  error: Error | null;
  retry: () => void;
}

export function useProjectDescription(
  description: ProjectDescription
): UseProjectDescriptionReturn {
  const [loadedDescription, setLoadedDescription] =
    useState<ProjectDescription>(description);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const loadDescriptions = async () => {
      setLoading(true);
      setError(null);

      try {
        const newDescription: ProjectDescription = { short: "", full: "" };
        const errors: Error[] = [];

        // Cargar descripción corta
        if (description.short.startsWith("/")) {
          try {
            newDescription.short = await loadMarkdownDescription(
              description.short
            );
          } catch (err) {
            const error =
              err instanceof Error
                ? err
                : new Error("Failed to load short description");
            errors.push(error);
            console.warn("Short description error:", error.message);
            // Usar una descripción por defecto si falla
            newDescription.short = "Descripción no disponible";
          }
        } else {
          newDescription.short = description.short;
        }

        // Cargar descripción completa
        if (description.full.startsWith("/")) {
          try {
            newDescription.full = await loadMarkdownDescription(
              description.full
            );
          } catch (err) {
            const error =
              err instanceof Error
                ? err
                : new Error("Failed to load full description");
            errors.push(error);
            console.warn("Full description error:", error.message);
            // Usar una descripción por defecto si falla
            newDescription.full =
              "Descripción completa no disponible en este momento";
          }
        } else {
          newDescription.full = description.full;
        }

        setLoadedDescription(newDescription);

        // Si hay errores, guardar el primero como el error del hook
        if (errors.length > 0) {
          setError(errors[0]);
        }
      } catch (err) {
        const error =
          err instanceof Error ? err : new Error("Unknown error");
        setError(error);
        console.error("Unexpected error loading descriptions:", error);
        setLoadedDescription({
          short: "Error al cargar la descripción",
          full: "Ocurrió un error al cargar la descripción completa del proyecto",
        });
      } finally {
        setLoading(false);
      }
    };

    loadDescriptions();
  }, [description, retryCount]);

  const retry = () => {
    setRetryCount((prev) => prev + 1);
  };

  return {
    data: loadedDescription,
    loading,
    error,
    retry,
  };
}


