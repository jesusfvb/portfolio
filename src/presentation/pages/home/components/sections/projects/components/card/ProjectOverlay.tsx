import type { Project } from "@/domain/interfaces/project.interface";
import { GitHubIcon } from "@/presentation/components/icons";

interface ProjectOverlayProps {
  project: Project;
}

const ProjectOverlay = ({ project }: ProjectOverlayProps) => {
  const hasBothRepos = project.githubFrontend && project.githubBackend;

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <div className="flex w-full flex-col items-center gap-4 px-4">
        {project.githubFrontend || project.githubBackend ? (
          <div
            className={`flex ${
              hasBothRepos
                ? "w-full justify-around px-4"
                : "justify-center gap-3"
            }`}
          >
            {project.githubFrontend && (
              <a
                href={project.githubFrontend}
                target="_blank"
                rel="noopener noreferrer"
                className="group/github flex h-12 w-12 items-center justify-center rounded-full bg-[#121212] text-white no-underline transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-[#6366f1] hover:to-[#8b5cf6] hover:text-white"
                aria-label="GitHub Frontend"
                title="Frontend"
                onClick={(e) => e.stopPropagation()}
              >
                <GitHubIcon size={20} className="text-white" />
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 rounded bg-[#1a1a1a] px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity group-hover/github:opacity-100">
                  Frontend
                </span>
              </a>
            )}

            {project.githubBackend && (
              <a
                href={project.githubBackend}
                target="_blank"
                rel="noopener noreferrer"
                className="group/github flex h-12 w-12 items-center justify-center rounded-full bg-[#121212] text-white no-underline transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-[#6366f1] hover:to-[#8b5cf6] hover:text-white"
                aria-label="GitHub Backend"
                title="Backend"
                onClick={(e) => e.stopPropagation()}
              >
                <GitHubIcon size={20} className="text-white" />
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 rounded bg-[#1a1a1a] px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity group-hover/github:opacity-100">
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
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#121212] text-white no-underline transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-[#6366f1] hover:to-[#8b5cf6] hover:text-white"
              aria-label="GitHub"
              onClick={(e) => e.stopPropagation()}
            >
              <GitHubIcon size={20} className="text-white" />
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default ProjectOverlay;
