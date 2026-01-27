import type { Project } from "@/domain/interfaces/project.interface";
import ProjectTechStack from "./ProjectTechStack";
import { GitHubIcon, ExternalLinkIcon } from "@/presentation/shared/icons";

interface ProjectCardContentProps {
  project: Project;
}

const ProjectCardContent = ({ project }: ProjectCardContentProps) => {
  return (
    <div className="flex h-full flex-col justify-center py-4 md:py-0">
      {/* Título */}
      <h3 className="mb-4 text-3xl md:text-4xl font-bold text-white">
        {project.title}
      </h3>
      
      {/* Badges de tecnología */}
      <ProjectTechStack technologies={project.technologies} />
      
      {/* Descripción */}
      <p className="mb-6 mt-4 text-base leading-relaxed text-gray-400">
        {project.description}
      </p>
      
      {/* Botones de acción */}
      <div className="flex flex-wrap gap-3">
        {(project.githubFrontend || project.githubBackend || project.github) && (
          <>
            {project.githubFrontend && (
              <a
                href={project.githubFrontend}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-gray-700 bg-transparent px-4 py-2 text-sm font-medium text-white no-underline hover:border-gray-600"
                aria-label="GitHub Frontend"
                onClick={(e) => e.stopPropagation()}
              >
                <GitHubIcon size={16} />
                <span>Code (Frontend)</span>
              </a>
            )}
            
            {project.githubBackend && (
              <a
                href={project.githubBackend}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-gray-700 bg-transparent px-4 py-2 text-sm font-medium text-white no-underline hover:border-gray-600"
                aria-label="GitHub Backend"
                onClick={(e) => e.stopPropagation()}
              >
                <GitHubIcon size={16} />
                <span>Code (Backend)</span>
              </a>
            )}
            
            {!project.githubFrontend && !project.githubBackend && project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-gray-700 bg-transparent px-4 py-2 text-sm font-medium text-white no-underline hover:border-gray-600"
                aria-label="GitHub"
                onClick={(e) => e.stopPropagation()}
              >
                <GitHubIcon size={16} />
                <span>Code</span>
              </a>
            )}
          </>
        )}
        
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-gray-700 bg-transparent px-4 py-2 text-sm font-medium text-white no-underline hover:border-gray-600"
            aria-label="Ver proyecto en vivo"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLinkIcon size={16} />
            <span>Preview</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCardContent;
