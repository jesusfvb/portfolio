import {
  ProjectDescription,
  ProjectTechnologies,
  ProjectLinks,
  ProjectTitle,
} from "./";
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
            className="shrink-0 md:mb-2 md:block"
          />
          <div className="custom-scrollbar min-h-0 flex-1 overflow-y-auto scroll-smooth pt-4 pr-2 md:pt-0">
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
        <div className="sticky top-20 z-10 bg-[#1a1a1a] pt-4 pb-4 md:static md:top-auto md:bg-transparent">
          <ProjectTitle
            title={project.title}
            size="sm"
            className="md:text-4xl"
          />
        </div>

        <div className="flex min-h-0 flex-1 flex-col">
          <div className="custom-scrollbar min-h-0 flex-1 overflow-y-auto scroll-smooth pt-4 pb-2">
            <div className="mx-auto max-w-3xl">
              <ProjectDescription description={description} />
            </div>
            <div className="mx-auto mt-6 max-w-3xl">
              <ProjectTechnologies technologies={technologies} />
              <ProjectLinks
                project={project}
                className="items-start justify-start"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectContentSection = ({
  project,
  hasImages = true,
}: ProjectContentSectionProps) => {
  const {
    data: description,
    loading,
    error,
    retry,
  } = useProjectDescription(project.description);
  const technologies = [
    ...project.technologies,
    ...project.technologiesSecondary,
  ];

  const displayDescription = loading
    ? "Cargando descripción..."
    : error
      ? `${description.full}`
      : description.full;

  const commonProps = {
    project,
    description: displayDescription,
    technologies,
  };

  return (
    <div>
      {error && (
        <div className="mb-4 flex items-center justify-between rounded border border-red-700 bg-red-900/20 px-4 py-3 text-red-300">
          <span className="text-sm">⚠️ Error al cargar la descripción</span>
          <button
            onClick={retry}
            className="ml-4 rounded bg-red-700 px-3 py-1 text-xs font-medium transition-colors hover:bg-red-600"
          >
            Reintentar
          </button>
        </div>
      )}
      {hasImages ? (
        <ProjectContentWithImages {...commonProps} />
      ) : (
        <ProjectContentWithoutImages {...commonProps} />
      )}
    </div>
  );
};

export default ProjectContentSection;
