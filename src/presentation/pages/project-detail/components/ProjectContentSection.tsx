import ProjectDescription from "./ProjectDescription";
import ProjectTechnologies from "./ProjectTechnologies";
import ProjectLinks from "./ProjectLinks";
import type { Project } from "@/domain/interfaces";
import { useProjectDescription } from "@/domain/hooks/useProjectDescription";

interface ProjectContentSectionProps {
  project: Project;
}

const ProjectContentSection = ({ project }: ProjectContentSectionProps) => {
  const description = useProjectDescription(project.description);
  const technologies = [
    ...project.technologies,
    ...project.technologiesSecondary,
  ];
  return (
    <div className="flex flex-2 flex-col overflow-y-auto">
      <div className="flex min-h-[80vh] flex-col justify-between p-6 md:p-8">
        <div className="flex min-h-0 flex-1 flex-col">
          <h2 className="mb-4 shrink-0 bg-linear-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
            {project.title}
          </h2>
          <div className="custom-scrollbar min-h-0 flex-1 overflow-y-auto scroll-smooth pr-2">
            <ProjectDescription description={description.full} />
          </div>
        </div>

        <div className="mt-6 shrink-0">
          <ProjectTechnologies technologies={technologies} />
          <ProjectLinks project={project} />
        </div>
      </div>
    </div>
  );
};

export default ProjectContentSection;

