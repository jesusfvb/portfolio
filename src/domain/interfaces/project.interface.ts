export interface Project {
  id: number;
  slug: string;
  i18nKey: string;
  title: string;
  description: string;
  technologies: string[];
  banner?: string;
  bannerFit?: "cover" | "contain";
  screenshots?: string[];
  github?: string;
  githubFrontend?: string;
  githubBackend?: string;
  liveUrl?: string;
}
