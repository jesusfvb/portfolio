/**
 * Utilidades de validación para parámetros de ruta
 * 
 * Proporciona funciones para validar parámetros de ruta
 * como IDs de proyectos, asegurando que sean numéricos
 * y válidos antes de usarlos en la lógica de la aplicación.
 */

/**
 * Valida si un string es un ID numérico válido
 * @param id - El string a validar
 * @returns true si es un número válido y positivo
 */
export const isValidNumericId = (id: string | undefined): boolean => {
  if (!id) return false;
  
  // Verificar que sea un número válido
  const numId = Number(id);
  
  // Debe ser un número entero positivo
  return Number.isInteger(numId) && numId > 0;
};

/**
 * Valida un ID de proyecto
 * @param id - El ID a validar
 * @returns El ID como número si es válido, null si no
 */
export const validateProjectId = (id: string | undefined): number | null => {
  if (!isValidNumericId(id)) {
    return null;
  }
  
  return Number(id);
};

/**
 * Obtiene un mensaje de error descriptivo basado en el ID
 * @param id - El ID inválido
 * @returns Mensaje de error descriptivo
 */
export const getRouteValidationError = (id: string | undefined): string => {
  if (!id) {
    return "El ID del proyecto no fue proporcionado";
  }
  
  const numId = Number(id);
  
  if (isNaN(numId)) {
    return `El ID del proyecto debe ser un número. Recibido: "${id}"`;
  }
  
  if (!Number.isInteger(numId)) {
    return `El ID del proyecto debe ser un número entero. Recibido: ${id}`;
  }
  
  if (numId <= 0) {
    return `El ID del proyecto debe ser un número positivo. Recibido: ${id}`;
  }
  
  return "El ID del proyecto es inválido";
};

/**
 * Hook para validación de parámetros de ruta
 * Retorna el ID válido o null si no es válido
 */
export const useValidateProjectId = (
  id: string | undefined,
): { isValid: boolean; projectId: number | null; error: string | null } => {
  const isValid = isValidNumericId(id);
  const projectId = validateProjectId(id);
  const error = isValid ? null : getRouteValidationError(id);

  return { isValid, projectId, error };
};
