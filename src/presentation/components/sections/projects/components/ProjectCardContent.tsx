import type { Project } from "@/domain/interfaces";
import ProjectTechStack from "./ProjectTechStack";
import { ArrowRightIcon } from "@/presentation/components/shared/icons";

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
        className="mt-auto w-full px-6 py-3 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white rounded-lg font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(99,102,241,0.4)] flex items-center justify-center gap-2 group"
      >
        <span className="text-white group-hover:text-white">Ver Detalles</span>
        <ArrowRightIcon size={18} className="text-white" />
      </button>
    </div>
  );
};

export default ProjectCardContent;

