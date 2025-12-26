import type { Project } from "@/domain/interfaces";
import ProjectBanner from "./ProjectBanner";
import ProjectOverlay from "./ProjectOverlay";
import ProjectCardContent from "./ProjectCardContent";

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

const ProjectCard = ({
  project,
  onViewDetails,
}: ProjectCardProps) => {
  return (
    <div className="w-full max-w-[66.67%] mx-auto">
      <div
        onClick={(e) => {
          // Verificar si el click viene de un elemento interactivo
          const target = e.target as HTMLElement;
          const clickedElement = target.closest(
            "a, button, [data-no-card-click]",
          );

          // Solo abrir el modal si no se hizo click en un elemento interactivo
          if (!clickedElement) {
            onViewDetails(project);
          }
        }}
        className="group flex h-[600px] w-full cursor-pointer flex-col overflow-hidden rounded-xl border border-[rgba(255,255,255,0.1)] bg-[#1a1a1a] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
      >
        <div className="relative">
          <ProjectBanner project={project} />
          <ProjectOverlay project={project} />
        </div>
        <ProjectCardContent project={project} />
      </div>
    </div>
  );
};

export default ProjectCard;
