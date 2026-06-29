import { PROJECTS } from "./projects.constants";
import type { Project } from "../interfaces/project.interface";

export const getProjectBySlug = (slug?: string): Project | undefined =>
  PROJECTS.find((project) => project.slug === slug);
