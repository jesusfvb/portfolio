import type { Project } from "@/domain/interfaces/project.interface";
import ProjectTechStack from "./ProjectTechStack";

interface ProjectCardContentProps {
  project: Project;
}

const ProjectCardContent = ({ project }: ProjectCardContentProps) => {
  return (
    <div className="flex min-h-0 grow flex-col p-8">
      <div className="flex flex-1 flex-col">
        <h3 className="mb-3 text-2xl font-semibold text-white">
          {project.title}
        </h3>
        <p className="mb-4 flex-1 overflow-hidden text-sm leading-relaxed text-[#d0d0d0]">
          {project.description}
        </p>
      </div>
      <ProjectTechStack technologies={project.technologies} />
    </div>
  );
};

export default ProjectCardContent;
