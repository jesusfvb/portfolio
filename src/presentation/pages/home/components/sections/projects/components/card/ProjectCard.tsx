import type { Project } from "@/domain/interfaces/project.interface";
import { useNavigate } from "react-router";
import ProjectBanner from "./ProjectBanner";
import ProjectCardContent from "./ProjectCardContent";
import ProjectOverlay from "./ProjectOverlay";
import { buildProjectRoute } from "@/domain/constants/routes.constants";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto w-full max-w-[66.67%]">
      <div
      
        className="group flex h-[600px] w-full cursor-pointer flex-col overflow-hidden rounded-xl border border-[rgba(255,255,255,0.1)] bg-[#1a1a1a] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
        onClick={(e) => {
          // Verificar si el click viene de un elemento interactivo
          const target = e.target as HTMLElement;
          const clickedElement = target.closest(
            "a, button, [data-no-card-click]",
          );

          // Si se hace click en un enlace o botón, no navegar
          if (clickedElement && clickedElement !== e.currentTarget) {
            e.preventDefault();
          } else {
            navigate(buildProjectRoute(project.id));
          }
        }}
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
