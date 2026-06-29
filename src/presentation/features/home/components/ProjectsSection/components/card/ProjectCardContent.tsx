import type { Project } from "@/domain/interfaces/project.interface";
import ProjectTechStack from "./ProjectTechStack";
import { GitHubIcon, ExternalLinkIcon } from "@/presentation/shared/icons";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { getProjectDetailRoute } from "@/application/routes";

interface ProjectCardContentProps {
  project: Project;
}

const ProjectCardContent = ({ project }: ProjectCardContentProps) => {
  const { t } = useTranslation();
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
        <Link
          to={getProjectDetailRoute(project.slug)}
          className="flex items-center gap-2 rounded-lg border border-[#6366f1]/50 bg-[#6366f1]/10 px-4 py-2 text-sm font-medium text-white no-underline transition-colors hover:border-[#6366f1] hover:bg-[#6366f1]/20"
        >
          <span>{t("projectCard.viewDetails")}</span>
        </Link>

        {(project.githubFrontend || project.githubBackend || project.github) && (
          <>
            {project.githubFrontend && (
              <a
                href={project.githubFrontend}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-gray-700 bg-transparent px-4 py-2 text-sm font-medium text-white no-underline hover:border-gray-600"
                aria-label={t("projectCard.githubFrontendAria")}
                onClick={(e) => e.stopPropagation()}
              >
                <GitHubIcon size={16} />
                <span>{t("projectCard.codeFrontend")}</span>
              </a>
            )}
            
            {project.githubBackend && (
              <a
                href={project.githubBackend}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-gray-700 bg-transparent px-4 py-2 text-sm font-medium text-white no-underline hover:border-gray-600"
                aria-label={t("projectCard.githubBackendAria")}
                onClick={(e) => e.stopPropagation()}
              >
                <GitHubIcon size={16} />
                <span>{t("projectCard.codeBackend")}</span>
              </a>
            )}
            
            {!project.githubFrontend && !project.githubBackend && project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-gray-700 bg-transparent px-4 py-2 text-sm font-medium text-white no-underline hover:border-gray-600"
                aria-label={t("projectCard.githubAria")}
                onClick={(e) => e.stopPropagation()}
              >
                <GitHubIcon size={16} />
                <span>{t("projectCard.code")}</span>
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
            aria-label={t("projectCard.previewAria")}
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLinkIcon size={16} />
            <span>{t("projectCard.preview")}</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCardContent;
