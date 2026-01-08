
export const ROUTES = {
  /** Ruta principal/home */
  HOME: "/",
  
  /** Ruta base para proyectos */
  PROJECTS: "/projects",
  
  /** Ruta para detalle de proyecto (usa con buildProjectRoute) */
  PROJECT_DETAIL: "/projects/:id",
  
  /** Ruta catch-all para páginas no encontradas */
  NOT_FOUND: "*",
} as const;

export const buildProjectRoute = (id: number | string): string => {
  return `${ROUTES.PROJECTS}/${id}`;
};
