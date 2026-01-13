/**
 * Servicio para cargar descripciones de proyectos desde archivos markdown
 */

const descriptionCache = new Map<string, string>();

/**
 * Carga el contenido de un archivo markdown desde la carpeta public
 * @param path - Ruta al archivo markdown (ej: "/projects_descriptions/portfolio/short.md")
 * @returns Promise con el contenido del archivo
 */
export async function loadMarkdownDescription(
    path: string
): Promise<string> {
    // Verificar si ya está en caché
    const cached = descriptionCache.get(path);
    if (cached !== undefined) {
        return cached;
    }

    try {
        const response = await fetch(path);
        if (!response.ok) {
            throw new Error(`Failed to load description from ${path}`);
        }
        const content = await response.text();
        // Limpiar el contenido (remover saltos de línea finales)
        const cleanedContent = content.trim();
        // Guardar en caché
        descriptionCache.set(path, cleanedContent);
        return cleanedContent;
    } catch (error) {
        console.error(`Error loading description from ${path}:`, error);
        return "";
    }
}

/**
 * Carga las descripciones corta y completa de un proyecto
 * @param projectName - Nombre del proyecto (ej: "portfolio")
 * @returns Promise con las descripciones
 */
export async function loadProjectDescriptions(projectName: string): Promise<{
    short: string;
    full: string;
}> {
    const [short, full] = await Promise.all([
        loadMarkdownDescription(
            `/projects_descriptions/${projectName}/short.md`
        ),
        loadMarkdownDescription(
            `/projects_descriptions/${projectName}/full.md`
        ),
    ]);

    return { short, full };
}

