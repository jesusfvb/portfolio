import type { Project } from "@/domain/interfaces";

interface ProjectBannerProps {
  project: Project;
}

const ProjectBanner = ({ project }: ProjectBannerProps) => {
  return (
    <div className="relative h-[200px] w-full shrink-0 overflow-hidden bg-[#121212]">
      <div className="h-full w-full">
        {project.banner ? (
          <div className="relative h-full w-full">
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
        )}
      </div>
    </div>
  );
};

export default ProjectBanner;
