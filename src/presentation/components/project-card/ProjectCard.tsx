import type { Project } from "@/domain/interfaces";
import ProjectBanner from "@/presentation/pages/home/components/sections/projects/components/card/ProjectBanner";
import ProjectCardContent from "@/presentation/pages/home/components/sections/projects/components/card/ProjectCardContent";
import ProjectOverlay from "@/presentation/pages/home/components/sections/projects/components/card/ProjectOverlay";
import { Link } from "react-router";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="w-full max-w-[66.67%] mx-auto">
      <Link
        to={`/projects/${project.id}`}
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
          }
        }}
      >
        <div className="relative">
          <ProjectBanner project={project} />
          <ProjectOverlay project={project} />
        </div>
        <ProjectCardContent project={project} />
      </Link>
    </div>
  );
};

export default ProjectCard;
