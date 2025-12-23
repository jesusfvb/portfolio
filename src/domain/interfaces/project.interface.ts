export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  banner?: string;
  images?: string[];
  link?: string;
  github?: string;
  githubFrontend?: string;
  githubBackend?: string;
}
