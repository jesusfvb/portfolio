export const ROUTES = {
  home: "/",
  projects: "/projects",
  education: "/education",
  certifications: "/certifications",
  contact: "/contact",
} as const;

export const getProjectDetailRoute = (slug: string) =>
  `${ROUTES.projects}/${slug}`;

export const ROUTE_SECTIONS: Record<string, string> = {
  [ROUTES.projects]: "projects",
  [ROUTES.education]: "education",
  [ROUTES.certifications]: "certifications",
  [ROUTES.contact]: "contact",
};

export const SECTION_ROUTES: Record<string, string> = {
  hero: ROUTES.home,
  projects: ROUTES.projects,
  education: ROUTES.education,
  certifications: ROUTES.certifications,
  contact: ROUTES.contact,
};
