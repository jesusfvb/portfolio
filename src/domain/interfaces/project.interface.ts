export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  banner?: string;
  bannerFit?: "cover" | "contain";
  github?: string;
  githubFrontend?: string;
  githubBackend?: string;
  liveUrl?: string;
}
