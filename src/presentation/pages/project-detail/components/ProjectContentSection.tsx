import ProjectDescription from "./ProjectDescription";
import ProjectTechnologies from "./ProjectTechnologies";
import ProjectLinks from "./ProjectLinks";
import type { Project } from "@/domain/interfaces/project.interface";
import { useProjectDescription } from "@/application/hooks";

interface ProjectContentSectionProps {
  project: Project;
  hasImages?: boolean;
}

const ProjectContentSection = ({
  project,
  hasImages = true,
}: ProjectContentSectionProps) => {
  const description = useProjectDescription(project.description);
  const technologies = [
    ...project.technologies,
    ...project.technologiesSecondary,
  ];
  return (
    <div
      className={`flex flex-col ${!hasImages ? "h-[calc(100vh-6rem)] w-full md:h-[calc(100vh-8rem)]" : "h-full"}`}
    >
      <div
        className={`flex min-h-full flex-col justify-between ${hasImages ? "p-5 md:p-6 lg:p-8" : ""}`}
      >
        {!hasImages && (
          <div className="sticky top-20 z-10 bg-[#1a1a1a] pb-4 md:static md:bg-transparent md:top-auto">
            <h2 className="bg-linear-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
              {project.title}
            </h2>
          </div>
        )}
        <div className="flex min-h-0 flex-1 flex-col">
          {hasImages && (
            <h2 className="sticky top-20 z-10 mb-4 shrink-0 bg-[#1a1a1a] bg-linear-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text pb-1 text-3xl font-bold text-transparent md:static md:bg-transparent md:text-4xl">
              {project.title}
            </h2>
          )}
          <div
            className={`custom-scrollbar min-h-0 flex-1 overflow-y-auto scroll-smooth ${hasImages ? "pr-2 pt-4 md:pt-0" : "pb-2 pt-4"}`}
          >
            <div className={!hasImages ? "mx-auto max-w-3xl" : ""}>
              <ProjectDescription description={description.full} />
            </div>
            {!hasImages && (
              <div className="mx-auto mt-6 max-w-3xl md:hidden">
                <ProjectTechnologies technologies={technologies} />
                <ProjectLinks
                  project={project}
                  className="items-start justify-start"
                />
              </div>
            )}
          </div>
        </div>

        {hasImages && (
          <div className="mt-6 shrink-0">
            <ProjectTechnologies technologies={technologies} />
            <ProjectLinks project={project} />
          </div>
        )}
        {!hasImages && (
          <div className="mt-1 hidden shrink-0 md:flex md:sticky md:bottom-0 md:flex-col md:bg-[#1a1a1a] md:pt-4 md:pb-2">
            <ProjectTechnologies technologies={technologies} />
            <ProjectLinks
              project={project}
              className="items-start justify-start"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectContentSection;
