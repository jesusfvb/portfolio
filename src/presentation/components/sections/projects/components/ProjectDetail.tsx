import { useState, useEffect } from "react";
import { getTechInfo } from "@/domain/constants/skills.constants";
import SkillBadge from "@/presentation/components/sections/skills/components/SkillBadge";
import type { Project } from "@/domain/interfaces";

interface ProjectDetailProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetail = ({ project, isOpen, onClose }: ProjectDetailProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (project && project.images && project.images.length > 0) {
      setCurrentImageIndex(0);
    }
  }, [project]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!project || !isOpen) return null;

  const hasImages = project.images && project.images.length > 0;
  const hasMultipleImages = hasImages && project.images!.length > 1;

  const goToPreviousImage = () => {
    if (hasImages && project.images) {
      setCurrentImageIndex((prev) =>
        prev > 0 ? prev - 1 : project.images!.length - 1
      );
    }
  };

  const goToNextImage = () => {
    if (hasImages && project.images) {
      setCurrentImageIndex((prev) =>
        prev < project.images!.length - 1 ? prev + 1 : 0
      );
    }
  };

  return (
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-[#1a1a1a] rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden border border-[rgba(255,255,255,0.1)] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón de cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#121212] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-white transition-all duration-300 hover:bg-linear-to-r hover:from-[#6366f1] hover:to-[#8b5cf6] hover:border-transparent hover:scale-110"
          aria-label="Cerrar"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="flex flex-col md:flex-row max-h-[90vh] overflow-hidden">
          {/* Sección de imágenes */}
          {hasImages && (
            <div className="relative w-full md:w-1/2 h-[300px] md:h-auto bg-[#121212] overflow-hidden">
              <img
                src={project.images![currentImageIndex]}
                alt={`${project.title} - Imagen ${currentImageIndex + 1}`}
                className="w-full h-full object-contain"
              />

              {/* Navegación de imágenes */}
              {hasMultipleImages && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      goToPreviousImage();
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:bg-black/80 hover:scale-110"
                    aria-label="Imagen anterior"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      goToNextImage();
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:bg-black/80 hover:scale-110"
                    aria-label="Siguiente imagen"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>

                  {/* Indicadores de imágenes */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {project.images!.map((_, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(index);
                        }}
                        className={`h-2 rounded-full transition-all ${
                          currentImageIndex === index
                            ? "bg-white w-8"
                            : "bg-white/50 hover:bg-white/75 w-2"
                        }`}
                        aria-label={`Ir a imagen ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Contador de imágenes */}
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white">
                    {currentImageIndex + 1} / {project.images!.length}
                  </div>
                </>
              )}
            </div>
          )}

          {/* Sección de contenido */}
          <div
            className={`flex-1 overflow-y-auto ${
              hasImages ? "md:max-h-[90vh]" : ""
            }`}
          >
            <div className="p-6 md:p-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-linear-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">
                {project.title}
              </h2>

              <p className="text-lg text-[#a0a0a0] leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tecnologías */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Tecnologías
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => {
                    const techInfo = getTechInfo(tech);
                    if (techInfo) {
                      return (
                        <SkillBadge
                          key={index}
                          icon={techInfo.icon}
                          displayName={techInfo.displayName}
                          url={techInfo.url}
                        />
                      );
                    }
                    // Fallback si no se encuentra la tecnología en las skills
                    return (
                      <span
                        key={index}
                        className="px-4 py-2 bg-[#121212] border border-[rgba(255,255,255,0.1)] rounded-full text-sm text-[#a0a0a0] transition-all duration-300 hover:bg-linear-to-r hover:from-[#6366f1] hover:to-[#8b5cf6] hover:text-white hover:border-transparent"
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Enlaces */}
              <div className="flex flex-col gap-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-[#6366f1] to-[#8b5cf6] text-white rounded-lg font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(99,102,241,0.4)] no-underline w-fit"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Ver Proyecto
                  </a>
                )}

                {project.githubFrontend || project.githubBackend ? (
                  <div
                    className={`flex ${
                      project.githubFrontend && project.githubBackend
                        ? "justify-between"
                        : "gap-4"
                    }`}
                  >
                    {project.githubFrontend && (
                      <a
                        href={project.githubFrontend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#121212] border border-[rgba(255,255,255,0.1)] text-white rounded-lg font-semibold transition-all duration-300 hover:bg-[#1a1a1a] hover:border-[#6366f1] no-underline"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        Frontend
                      </a>
                    )}

                    {project.githubBackend && (
                      <a
                        href={project.githubBackend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#121212] border border-[rgba(255,255,255,0.1)] text-white rounded-lg font-semibold transition-all duration-300 hover:bg-[#1a1a1a] hover:border-[#6366f1] no-underline"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        Backend
                      </a>
                    )}
                  </div>
                ) : null}

                {project.github &&
                  !project.githubFrontend &&
                  !project.githubBackend && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#121212] border border-[rgba(255,255,255,0.1)] text-white rounded-lg font-semibold transition-all duration-300 hover:bg-[#1a1a1a] hover:border-[#6366f1] no-underline"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      GitHub
                    </a>
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
