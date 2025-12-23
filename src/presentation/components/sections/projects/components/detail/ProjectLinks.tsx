import {
  ExternalLinkIcon,
  GitHubIcon,
} from "@/presentation/components/shared/icons";
import type { Project } from "@/domain/interfaces";

interface ProjectLinksProps {
  project: Project;
}

const ProjectLinks = ({ project }: ProjectLinksProps) => {
  return (
    <div className="flex flex-col gap-4">
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-2 rounded-lg bg-linear-to-r from-[#6366f1] to-[#8b5cf6] px-6 py-3 font-semibold text-white no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(99,102,241,0.4)]"
        >
          <ExternalLinkIcon size={20} />
          Ver Proyecto
        </a>
      )}

      {project.githubFrontend || project.githubBackend ? (
        <div
          className={`flex ${
            project.githubFrontend && project.githubBackend
              ? "justify-between"
              : "gap-4"
          }`}
        >
          {project.githubFrontend && (
            <a
              href={project.githubFrontend}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[rgba(255,255,255,0.1)] bg-[#121212] px-6 py-3 font-semibold text-white no-underline transition-all duration-300 hover:border-[#6366f1] hover:bg-[#1a1a1a]"
            >
              <GitHubIcon size={20} />
              Frontend
            </a>
          )}

          {project.githubBackend && (
            <a
              href={project.githubBackend}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[rgba(255,255,255,0.1)] bg-[#121212] px-6 py-3 font-semibold text-white no-underline transition-all duration-300 hover:border-[#6366f1] hover:bg-[#1a1a1a]"
            >
              <GitHubIcon size={20} />
              Backend
            </a>
          )}
        </div>
      ) : null}

      {project.github && !project.githubFrontend && !project.githubBackend && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-[rgba(255,255,255,0.1)] bg-[#121212] px-6 py-3 font-semibold text-white no-underline transition-all duration-300 hover:border-[#6366f1] hover:bg-[#1a1a1a]"
        >
          <GitHubIcon size={20} />
          GitHub
        </a>
      )}
    </div>
  );
};

export default ProjectLinks;
