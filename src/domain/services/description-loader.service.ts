/**
 * Servicio para cargar descripciones de proyectos desde archivos markdown
 */

const descriptionCache = new Map<string, string>();
const descriptionErrors = new Map<string, Error>();

export async function loadMarkdownDescription(
  path: string,
  maxRetries: number = 3
): Promise<string> {
  // Verificar si ya está en caché
  const cached = descriptionCache.get(path);
  if (cached !== undefined) {
    return cached;
  }

  // Verificar si ya hay un error cacheado
  const cachedError = descriptionErrors.get(path);
  if (cachedError !== undefined) {
    throw cachedError;
  }

  let lastError: Error | null = null;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(path);
      
      if (!response.ok) {
        throw new Error(
          `HTTP ${response.status}: Failed to load description from ${path}`
        );
      }

      const content = await response.text();
      
      if (!content || content.trim().length === 0) {
        throw new Error(
          `Empty content from ${path}. The file may be missing or empty.`
        );
      }

      // Limpiar el contenido (remover saltos de línea finales)
      const cleanedContent = content.trim();
      
      // Guardar en caché
      descriptionCache.set(path, cleanedContent);
      
      return cleanedContent;
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      
      console.warn(
        `Attempt ${attempt}/${maxRetries} failed to load ${path}:`,
        lastError.message
      );

      // No reintentar si es un error HTTP 404
      if (lastError.message.includes("HTTP 404")) {
        break;
      }

      // Esperar antes de reintentar (backoff exponencial)
      if (attempt < maxRetries) {
        await new Promise((resolve) => setTimeout(resolve, 1000 * attempt));
      }
    }
  }

  // Si llegamos aquí, todos los intentos fallaron
  const finalError = new Error(
    `Failed to load ${path} after ${maxRetries} attempts: ${lastError?.message}`
  );
  
  // Cachear el error para no reintentar inmediatamente
  descriptionErrors.set(path, finalError);
  
  throw finalError;
}

/**
 * Carga las descripciones corta y completa de un proyecto
 * @param projectName - Nombre del proyecto (ej: "portfolio")
 * @returns Promise con las descripciones
 * @throws Error si falla la carga de ambas descripciones
 */
export async function loadProjectDescriptions(
  projectName: string
): Promise<{
  short: string;
  full: string;
}> {
  const [short, full] = await Promise.all([
    loadMarkdownDescription(
      `/projects_descriptions/${projectName}/short.md`
    ).catch(() => ""),
    loadMarkdownDescription(
      `/projects_descriptions/${projectName}/full.md`
    ).catch(() => ""),
  ]);

  return { short, full };
}

/**
 * Limpia el caché de descripciones
 * Útil para testing o para forzar una recarga
 */
export function clearDescriptionCache(): void {
  descriptionCache.clear();
  descriptionErrors.clear();
}


