import type { Project } from "@/domain/interfaces/project.interface";
import ProjectBanner from "./ProjectBanner";
import ProjectCardContent from "./ProjectCardContent";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-8">
      {/* Imagen del proyecto */}
      <div className="w-full md:w-[45%] shrink-0">
        <ProjectBanner project={project} />
      </div>
      
      {/* Contenido del proyecto */}
      <div className="flex-1">
        <ProjectCardContent project={project} />
      </div>
    </div>
  );
};

export default ProjectCard;
