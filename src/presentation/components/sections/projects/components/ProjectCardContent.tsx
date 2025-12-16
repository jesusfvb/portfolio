import type { Project } from "@/domain/interfaces";
import ProjectTechStack from "./ProjectTechStack";

interface ProjectCardContentProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

const ProjectCardContent = ({
  project,
  onViewDetails,
}: ProjectCardContentProps) => {
  return (
    <div className="p-8 flex flex-col grow min-h-0">
      <h3 className="text-2xl font-semibold mb-3 text-white">
        {project.title}
      </h3>
      <p className="text-[#a0a0a0] leading-relaxed mb-4 text-sm line-clamp-4 overflow-hidden">
        {project.description}
      </p>
      <ProjectTechStack technologies={project.technologies} />
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
  );
};

export default ProjectCardContent;

