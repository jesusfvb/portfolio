export const ROUTES = {
  home: "/",
  projects: "/projects",
  education: "/education",
  contact: "/contact",
} as const;

export const ROUTE_SECTIONS: Record<string, string> = {
  [ROUTES.projects]: "projects",
  [ROUTES.education]: "education",
  [ROUTES.contact]: "contact",
};

export const SECTION_ROUTES: Record<string, string> = {
  hero: ROUTES.home,
  projects: ROUTES.projects,
  education: ROUTES.education,
  contact: ROUTES.contact,
};
