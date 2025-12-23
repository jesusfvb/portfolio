import ProjectDescription from "./ProjectDescription";
import ProjectTechnologies from "./ProjectTechnologies";
import ProjectLinks from "./ProjectLinks";
import type { Project } from "@/domain/interfaces";
import { useProjectDescription } from "../../hooks/useProjectDescription";

interface ProjectContentSectionProps {
  project: Project;
}

const ProjectContentSection = ({ project }: ProjectContentSectionProps) => {
  const description = useProjectDescription(project.description);

  return (
    <div className="flex flex-2 flex-col overflow-y-auto md:max-h-[90vh]">
      <div className="flex h-full flex-col justify-between p-6 md:p-8">
        <div className="flex-1 flex flex-col min-h-0">
          <h2 className="mb-4 shrink-0 bg-linear-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
            {project.title}
          </h2>
          <div className="flex-1 overflow-y-auto pr-2 min-h-0">
            <ProjectDescription description={description.full} />
          </div>
        </div>

        <div className="shrink-0 mt-6">
          <ProjectTechnologies technologies={project.technologies} />
          <ProjectLinks project={project} />
        </div>
      </div>
    </div>
  );
};

export default ProjectContentSection;
