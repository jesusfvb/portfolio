import ProjectHeader from "./ProjectHeader";
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
        <div>
          <ProjectHeader
            title={project.title}
            description={description.full}
          />
        </div>

        <div>
          <ProjectTechnologies technologies={project.technologies} />
          <ProjectLinks project={project} />
        </div>
      </div>
    </div>
  );
};

export default ProjectContentSection;
