export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  banner?: string;
  github?: string;
  githubFrontend?: string;
  githubBackend?: string;
  liveUrl?: string;
}
