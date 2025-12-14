import { getTechInfo } from "@/domain/constants/skills.constants";
import SkillBadge from "@/presentation/components/sections/skills/components/SkillBadge";
import type { Project } from "@/domain/interfaces";

interface ProjectCardProps {
  project: Project;
  shouldCenter: boolean;
  onViewDetails: (project: Project) => void;
}

const ProjectCard = ({ project, shouldCenter, onViewDetails }: ProjectCardProps) => {
  return (
    <div
      className={`${
        shouldCenter
          ? "w-full md:w-[432px] lg:w-[412px]"
          : "min-w-full md:min-w-[calc(50%-1rem)] lg:min-w-[calc(33.333%-1.333rem)]"
      } px-4`}
    >
      <div
        className={`bg-[#1a1a1a] rounded-xl overflow-hidden border border-[rgba(255,255,255,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] group flex flex-col h-[600px] ${
          shouldCenter ? "w-full" : "w-full md:w-[400px] lg:w-[380px]"
        }`}
      >
        <div className="relative w-full h-[200px] overflow-hidden bg-[#121212] shrink-0">
          <div className="w-full h-full">
            {project.banner ? (
              <div className="relative w-full h-full">
                <img
                  src={project.banner}
                  alt={`${project.title} banner`}
                  className="object-contain"
                />
              </div>
            ) : (
              <svg
                viewBox="0 0 400 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <defs>
                  <linearGradient
                    id={`projectGradient-${project.id}`}
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      stopColor="#6366f1"
                      stopOpacity="0.1"
                    />
                    <stop
                      offset="100%"
                      stopColor="#8b5cf6"
                      stopOpacity="0.1"
                    />
                  </linearGradient>
                </defs>
                <rect
                  width="400"
                  height="300"
                  fill={`url(#projectGradient-${project.id})`}
                />
              </svg>
            )}
          </div>
          <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex gap-4 flex-col items-center">
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
                <div className="flex gap-3">
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
        </div>
        <div className="p-8 flex flex-col grow min-h-0">
          <h3 className="text-2xl font-semibold mb-3 text-white">
            {project.title}
          </h3>
          <p className="text-[#a0a0a0] leading-relaxed mb-4 text-sm line-clamp-4 overflow-hidden">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => {
              const techInfo = getTechInfo(tech);
              if (techInfo) {
                return (
                  <SkillBadge
                    key={index}
                    icon={techInfo.icon}
                    displayName={techInfo.displayName}
                    url={techInfo.url}
                  />
                );
              }
              // Fallback si no se encuentra la tecnología en las skills
              return (
                <span
                  key={index}
                  className="px-3.5 py-1.5 bg-[#121212] border border-[rgba(255,255,255,0.1)] rounded-full text-sm text-[#a0a0a0] transition-all duration-300 hover:bg-linear-to-r hover:from-[#6366f1] hover:to-[#8b5cf6] hover:text-white hover:border-transparent flex items-center gap-2"
                >
                  <span>{tech}</span>
                </span>
              );
            })}
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(project);
            }}
            className="mt-auto w-full px-6 py-3 bg-linear-to-r from-[#6366f1] to-[#8b5cf6] text-white rounded-lg font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(99,102,241,0.4)] flex items-center justify-center gap-2"
          >
            <span>Ver Detalles</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14"></path>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

