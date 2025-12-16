import type { Project } from "@/domain/interfaces";

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
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
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
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
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
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
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
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default ProjectOverlay;

