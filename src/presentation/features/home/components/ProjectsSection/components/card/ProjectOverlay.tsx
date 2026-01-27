import type { Project } from "@/domain/interfaces/project.interface";
import { GitHubIcon } from "@/presentation/shared/icons";

interface ProjectOverlayProps {
  project: Project;
}

const ProjectOverlay = ({ project }: ProjectOverlayProps) => {
  const hasBothRepos = project.githubFrontend && project.githubBackend;

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/80">
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
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#121212] text-white no-underline"
                aria-label="GitHub Frontend"
                title="Frontend"
                onClick={(e) => e.stopPropagation()}
              >
                <GitHubIcon size={20} className="text-white" />
              </a>
            )}

            {project.githubBackend && (
              <a
                href={project.githubBackend}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#121212] text-white no-underline"
                aria-label="GitHub Backend"
                title="Backend"
                onClick={(e) => e.stopPropagation()}
              >
                <GitHubIcon size={20} className="text-white" />
              </a>
            )}
          </div>
        ) : (
          project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#121212] text-white no-underline"
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
