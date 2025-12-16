import type { Project } from "@/domain/interfaces";
import { ExternalLinkIcon, GitHubIcon } from "@/presentation/components/shared/icons";

interface ProjectOverlayProps {
  project: Project;
}

const ProjectOverlay = ({ project }: ProjectOverlayProps) => {
  const hasBothRepos = project.githubFrontend && project.githubBackend;

  return (
    <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="flex gap-4 flex-col items-center w-full px-4">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#121212] flex items-center justify-center text-white no-underline transition-all duration-300 hover:scale-110 hover:bg-linear-to-r hover:from-[#6366f1] hover:to-[#8b5cf6]"
            aria-label="Ver proyecto"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLinkIcon size={20} />
          </a>
        )}

        {project.githubFrontend || project.githubBackend ? (
          <div
            className={`flex ${
              hasBothRepos
                ? "justify-around w-full px-4"
                : "gap-3 justify-center"
            }`}
          >
            {project.githubFrontend && (
              <a
                href={project.githubFrontend}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#121212] flex items-center justify-center text-white no-underline transition-all duration-300 hover:scale-110 hover:bg-linear-to-r hover:from-[#6366f1] hover:to-[#8b5cf6] group/github"
                aria-label="GitHub Frontend"
                title="Frontend"
                onClick={(e) => e.stopPropagation()}
              >
                <GitHubIcon size={20} />
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#1a1a1a] text-xs text-white px-2 py-1 rounded opacity-0 group-hover/github:opacity-100 transition-opacity whitespace-nowrap">
                  Frontend
                </span>
              </a>
            )}

            {project.githubBackend && (
              <a
                href={project.githubBackend}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#121212] flex items-center justify-center text-white no-underline transition-all duration-300 hover:scale-110 hover:bg-linear-to-r hover:from-[#6366f1] hover:to-[#8b5cf6] group/github"
                aria-label="GitHub Backend"
                title="Backend"
                onClick={(e) => e.stopPropagation()}
              >
                <GitHubIcon size={20} />
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#1a1a1a] text-xs text-white px-2 py-1 rounded opacity-0 group-hover/github:opacity-100 transition-opacity whitespace-nowrap">
                  Backend
                </span>
              </a>
            )}
          </div>
        ) : (
          project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#121212] flex items-center justify-center text-white no-underline transition-all duration-300 hover:scale-110 hover:bg-linear-to-r hover:from-[#6366f1] hover:to-[#8b5cf6]"
              aria-label="GitHub"
              onClick={(e) => e.stopPropagation()}
            >
              <GitHubIcon size={20} />
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default ProjectOverlay;

