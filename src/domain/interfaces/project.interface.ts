export interface Project {
  id: number;
  title: string;
  description: ProjectDescription;
  technologies: string[];
  banner?: string;
  images?: string[];
  link?: string;
  github?: string;
  githubFrontend?: string;
  githubBackend?: string;
}

export interface ProjectDescription {
  short: string;
  full: string;
}