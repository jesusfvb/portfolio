import type { Project } from "@/domain/interfaces/project.interface";
import ProjectTechStack from "./ProjectTechStack";
import { useProjectDescription } from "@/application/hooks";

interface ProjectCardContentProps {
  project: Project;
}

const ProjectCardContent = ({ project }: ProjectCardContentProps) => {
  const { data: description, loading, error, retry } =
    useProjectDescription(project.description);

  return (
    <div className="flex min-h-0 grow flex-col p-8">
      <div className="flex-1 flex flex-col">
        <h3 className="mb-3 text-2xl font-semibold text-white">
          {project.title}
        </h3>
        <p className="flex-1 mb-4 overflow-hidden text-sm leading-relaxed text-[#d0d0d0]">
          {loading ? (
            <span className="inline-block animate-pulse">Cargando...</span>
          ) : error ? (
            <span className="text-red-400">
              {description.short}
              {error && (
                <button
                  onClick={retry}
                  className="ml-2 underline text-red-300 hover:text-red-200 text-xs"
                >
                  Reintentar
                </button>
              )}
            </span>
          ) : (
            description.short
          )}
        </p>
      </div>
      <ProjectTechStack technologies={project.technologies} />
    </div>
  );
};

export default ProjectCardContent;
