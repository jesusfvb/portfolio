import type { Project } from "@/domain/interfaces";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@/presentation/components/shared/icons";
import { useRef } from "react";
import {
  useCarouselAutoPlay,
  useCarouselNavigation,
  useCarouselScroll,
  useItemsPerView,
} from "../../hooks";
import ProjectCard from "../card/ProjectCard";

interface ProjectsCarouselProps {
  projects: Project[];
  onViewDetails: (project: Project) => void;
}

const ProjectsCarousel = ({
  projects,
  onViewDetails,
}: ProjectsCarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const itemsPerView = useItemsPerView();

  const {
    currentIndex,
    setCurrentIndex,
    isPaused,
    setIsPaused,
    maxIndex,
    hasMoreItems,
    shouldCenter,
    goToPrevious,
    goToNext,
    goToSlide,
  } = useCarouselNavigation({
    totalItems: projects.length,
    itemsPerView,
  });

  useCarouselScroll({
    carouselRef,
    hasMoreItems,
    maxIndex,
    setCurrentIndex,
    setIsPaused,
  });

  useCarouselAutoPlay({
    hasMoreItems,
    isPaused,
    maxIndex,
    setCurrentIndex,
  });

  return (
    <div
      ref={carouselRef}
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carrusel Container */}
      <div className="overflow-hidden pt-4">
        <div
          className={`flex transition-transform duration-500 ease-in-out ${
            shouldCenter ? "justify-center gap-8" : ""
          }`}
          style={{
            transform: shouldCenter
              ? "translateX(0%)"
              : `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              shouldCenter={shouldCenter}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      </div>

      {/* Botones de Navegación (ocultos en móvil) */}
      {projects.length > itemsPerView && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 left-0 z-10 hidden h-12 w-12 -translate-x-12 -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(255,255,255,0.1)] bg-[#1a1a1a] text-white transition-all duration-300 hover:scale-110 hover:border-transparent hover:bg-gradient-to-r hover:from-[#6366f1] hover:to-[#8b5cf6] md:flex"
            aria-label="Proyecto anterior"
          >
            <ChevronLeftIcon size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute top-1/2 right-0 z-10 hidden h-12 w-12 translate-x-12 -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(255,255,255,0.1)] bg-[#1a1a1a] text-white transition-all duration-300 hover:scale-110 hover:border-transparent hover:bg-gradient-to-r hover:from-[#6366f1] hover:to-[#8b5cf6] md:flex"
            aria-label="Siguiente proyecto"
          >
            <ChevronRightIcon size={24} />
          </button>
        </>
      )}

      {/* Indicadores de puntos */}
      {projects.length > itemsPerView && (
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-linear-to-r from-[#6366f1] to-[#8b5cf6]"
                  : "w-2.5 bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.4)]"
              }`}
              aria-label={`Ir al proyecto ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsCarousel;
