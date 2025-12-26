import type { Project } from "@/domain/interfaces";
import ProjectTechStack from "./ProjectTechStack";
import { useProjectDescription } from "../../../../../../../../domain/hooks/useProjectDescription";

interface ProjectCardContentProps {
  project: Project;
}

const ProjectCardContent = ({ project }: ProjectCardContentProps) => {
  const description = useProjectDescription(project.description);

  return (
    <div className="flex min-h-0 grow flex-col p-8">
      <div className="flex-1 flex flex-col">
        <h3 className=" mb-3 text-2xl font-semibold text-white">
          {project.title}
        </h3>
        <p className="flex-1 mb-4 overflow-hidden text-sm leading-relaxed text-[#d0d0d0]">
          {description.short}
        </p>
      </div>
      <ProjectTechStack technologies={project.technologies} />
    </div>
  );
};

export default ProjectCardContent;
