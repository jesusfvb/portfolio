import ProjectDescription from "./ProjectDescription";
import ProjectTechnologies from "./ProjectTechnologies";
import ProjectLinks from "./ProjectLinks";
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
    <div className="flex h-full flex-col">
      <div className="flex min-h-full flex-col justify-between p-5 md:p-6 lg:p-8">
        <div className="flex min-h-0 flex-1 flex-col">
          <h2 className="sticky top-20 z-10 mb-4 shrink-0 bg-[#1a1a1a] bg-linear-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text pb-1 text-3xl font-bold text-transparent md:mb-2 md:static md:bg-transparent md:text-4xl">
            {project.title}
          </h2>
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
        <div className="sticky top-20 z-10 bg-[#1a1a1a] pb-4 md:static md:bg-transparent md:top-auto">
          <h2 className="bg-linear-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
            {project.title}
          </h2>
        </div>

        <div className="flex min-h-0 flex-1 flex-col">
          <div className="custom-scrollbar min-h-0 flex-1 overflow-y-auto scroll-smooth pb-2 pt-4">
            <div className="mx-auto max-w-3xl">
              <ProjectDescription description={description} />
            </div>
            <div className="mx-auto mt-6 max-w-3xl md:hidden">
              <ProjectTechnologies technologies={technologies} />
              <ProjectLinks
                project={project}
                className="items-start justify-start"
              />
            </div>
          </div>
        </div>

        <div className="mt-1 hidden shrink-0 md:flex md:sticky md:bottom-0 md:flex-col md:bg-[#1a1a1a] md:pt-4 md:pb-2">
          <ProjectTechnologies technologies={technologies} />
          <ProjectLinks
            project={project}
            className="items-start justify-start"
          />
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

  if (hasImages) {
    return (
      <ProjectContentWithImages
        project={project}
        description={description.full}
        technologies={technologies}
      />
    );
  }

  return (
    <ProjectContentWithoutImages
      project={project}
      description={description.full}
      technologies={technologies}
    />
  );
};

export default ProjectContentSection;
