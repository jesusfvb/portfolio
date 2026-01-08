import { ProjectDescription, ProjectTechnologies, ProjectLinks, ProjectTitle } from "./";
import type { Project } from "@/domain/interfaces/project.interface";
import { useProjectDescription } from "@/application/hooks";

interface ProjectContentSectionProps {
  project: Project;
  hasImages?: boolean;
}

interface ProjectContentWithImagesProps {
  project: Project;
  description: string;
  technologies: string[];
}

interface ProjectContentWithoutImagesProps {
  project: Project;
  description: string;
  technologies: string[];
}

const ProjectContentWithImages = ({
  project,
  description,
  technologies,
}: ProjectContentWithImagesProps) => {
  return (
    <div className="flex h-full flex-col p-5 md:p-6 lg:p-8">
      <div className="flex min-h-full flex-col justify-between">
        <div className="flex min-h-0 flex-1 flex-col">
          <ProjectTitle
            title={project.title}
            size="md"
            className="hidden shrink-0 md:mb-2 md:block"
          />
          <div className="custom-scrollbar min-h-0 flex-1 overflow-y-auto scroll-smooth pr-2 pt-4 md:pt-0">
            <ProjectDescription description={description} />
          </div>
        </div>

        <div className="mt-6 shrink-0 md:mt-3">
          <ProjectTechnologies technologies={technologies} />
          <ProjectLinks project={project} />
        </div>
      </div>
    </div>
  );
};

const ProjectContentWithoutImages = ({
  project,
  description,
  technologies,
}: ProjectContentWithoutImagesProps) => {
  return (
    <div className="flex h-[calc(100vh-6rem)] w-full flex-col md:h-[calc(100vh-8rem)]">
      <div className="flex min-h-full flex-col justify-between">
        <div className="sticky top-20 z-10 bg-[#1a1a1a] pt-4 pb-4 md:static md:bg-transparent md:top-auto">
          <ProjectTitle
            title={project.title}
            size="sm"
            className="md:text-4xl"
          />
        </div>

        <div className="flex min-h-0 flex-1 flex-col">
          <div className="custom-scrollbar min-h-0 flex-1 overflow-y-auto scroll-smooth pb-2 pt-4">
            <div className="mx-auto max-w-3xl">
              <ProjectDescription description={description} />
            </div>
            <div className="mx-auto mt-6 max-w-3xl md:hidden">
              <ProjectTechnologies technologies={technologies} />
              <ProjectLinks project={project} className="items-start justify-start" />
            </div>
          </div>
        </div>

        <div className="mt-1 hidden shrink-0 md:flex md:sticky md:bottom-0 md:flex-col md:bg-[#1a1a1a] md:pt-4 md:pb-2">
          <ProjectTechnologies technologies={technologies} />
          <ProjectLinks project={project} className="items-start justify-start" />
        </div>
      </div>
    </div>
  );
};

const ProjectContentSection = ({
  project,
  hasImages = true,
}: ProjectContentSectionProps) => {
  const description = useProjectDescription(project.description);
  const technologies = [
    ...project.technologies,
    ...project.technologiesSecondary,
  ];

  const commonProps = {
    project,
    description: description.full,
    technologies,
  };

  return hasImages ? (
    <ProjectContentWithImages {...commonProps} />
  ) : (
    <ProjectContentWithoutImages {...commonProps} />
  );
};

export default ProjectContentSection;
