import type { Project } from "@/domain/interfaces";

interface ProjectBannerProps {
  project: Project;
}

const ProjectBanner = ({ project }: ProjectBannerProps) => {
  const isIconBanner = project.bannerFit === "contain";

  return (
    <div className="relative w-full overflow-hidden rounded-lg border border-gray-800/50">
      <div className="w-full aspect-video bg-[#0a0a0a]">
        {project.banner ? (
          <img
            src={project.banner}
            alt={`${project.title} banner`}
            loading="lazy"
            className={`h-full w-full ${
              isIconBanner
                ? "object-contain p-10"
                : "object-cover"
            }`}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <svg
              viewBox="0 0 400 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
            >
              <defs>
                <linearGradient
                  id={`projectGradient-${project.id}`}
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <rect
                width="400"
                height="300"
                fill={`url(#projectGradient-${project.id})`}
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectBanner;
