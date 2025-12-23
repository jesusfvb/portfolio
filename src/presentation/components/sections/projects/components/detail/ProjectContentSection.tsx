import ProjectHeader from "./ProjectHeader";
import ProjectTechnologies from "./ProjectTechnologies";
import ProjectLinks from "./ProjectLinks";
import type { Project } from "@/domain/interfaces";

interface ProjectContentSectionProps {
  project: Project;
}

const ProjectContentSection = ({ project }: ProjectContentSectionProps) => {
  return (
    <div className="flex-2 flex flex-col overflow-y-auto md:max-h-[90vh]">
      <div className="p-6 md:p-8 h-full flex flex-col justify-between">
        <div>
          <ProjectHeader title={project.title} description={project.description} />
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

