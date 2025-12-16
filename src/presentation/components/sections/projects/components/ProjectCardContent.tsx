import type { Project } from "@/domain/interfaces";
import ProjectTechStack from "./ProjectTechStack";

interface ProjectCardContentProps {
  project: Project;
}

const ProjectCardContent = ({ project }: ProjectCardContentProps) => {
  return (
    <div className="p-8 flex flex-col grow min-h-0">
      <h3 className="text-2xl font-semibold mb-3 text-white">
        {project.title}
      </h3>
      <p className="text-[#a0a0a0] leading-relaxed mb-4 text-sm line-clamp-4 overflow-hidden">
        {project.description}
      </p>
      <ProjectTechStack technologies={project.technologies} />
    </div>
  );
};

export default ProjectCardContent;

