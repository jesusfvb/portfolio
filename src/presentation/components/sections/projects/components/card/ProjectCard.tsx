import type { Project } from "@/domain/interfaces";
import ProjectBanner from "./ProjectBanner";
import ProjectOverlay from "./ProjectOverlay";
import ProjectCardContent from "./ProjectCardContent";

interface ProjectCardProps {
  project: Project;
  shouldCenter: boolean;
  onViewDetails: (project: Project) => void;
}

const ProjectCard = ({
  project,
  shouldCenter,
  onViewDetails,
}: ProjectCardProps) => {
  return (
    <div
      className={`${
        shouldCenter
          ? "w-full md:w-[432px] lg:w-[412px]"
          : "min-w-full md:min-w-[calc(50%-1rem)] lg:min-w-[calc(33.333%-1.333rem)]"
      } px-4`}
    >
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
        className={`group flex h-[600px] cursor-pointer flex-col overflow-hidden rounded-xl border border-[rgba(255,255,255,0.1)] bg-[#1a1a1a] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] ${
          shouldCenter ? "w-full" : "w-full md:w-[400px] lg:w-[380px]"
        }`}
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
