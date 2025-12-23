import type { Project } from "@/domain/interfaces";
import ProjectTechStack from "./ProjectTechStack";

interface ProjectCardContentProps {
  project: Project;
}

const ProjectCardContent = ({ project }: ProjectCardContentProps) => {
  return (
    <div className="flex min-h-0 grow flex-col p-8">
      <h3 className="mb-3 text-2xl font-semibold text-white">
        {project.title}
      </h3>
      <p className="mb-4 line-clamp-4 overflow-hidden text-sm leading-relaxed text-[#d0d0d0]">
        {project.description}
      </p>
      <ProjectTechStack technologies={project.technologies} />
    </div>
  );
};

export default ProjectCardContent;
