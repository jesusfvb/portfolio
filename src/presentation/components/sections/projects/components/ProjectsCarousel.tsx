import { useState, useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import type { Project } from "@/domain/interfaces";
import { ChevronLeftIcon, ChevronRightIcon } from "@/presentation/components/shared/icons";

interface ProjectsCarouselProps {
  projects: Project[];
  onViewDetails: (project: Project) => void;
}

const ProjectsCarousel = ({ projects, onViewDetails }: ProjectsCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Calcular cuántos items mostrar según el tamaño de pantalla
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, projects.length - itemsPerView);
  const hasMoreItems = projects.length > itemsPerView;
  const shouldCenter = projects.length <= itemsPerView;

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
    setIsPaused(true);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    setIsPaused(true);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsPaused(true);
  };

  // Manejo de scroll del carrusel
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || !hasMoreItems) return;

    let isScrolling = false;
    let scrollTimeout: ReturnType<typeof setTimeout>;

    const handleWheel = (e: WheelEvent) => {
      // Solo procesar si el evento está dentro del carrusel
      if (!carousel.contains(e.target as Node)) return;

      // Solo procesar scroll horizontal - ignorar completamente el scroll vertical
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        return; // Si hay más scroll vertical que horizontal, permitir scroll normal de la página
      }

      // Solo procesar si hay scroll horizontal significativo
      if (Math.abs(e.deltaX) > 10) {
        e.preventDefault();
        setIsPaused(true);

        if (isScrolling) return;
        isScrolling = true;

        // Usar solo deltaX (scroll horizontal)
        if (e.deltaX > 0) {
          // Scroll horizontal hacia la derecha - siguiente proyecto
          setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
        } else if (e.deltaX < 0) {
          // Scroll horizontal hacia la izquierda - proyecto anterior
          setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
        }

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          isScrolling = false;
        }, 200);
      }
    };

    // Manejo de touch para dispositivos móviles
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      if (!carousel.contains(e.target as Node)) return;
      touchStartX = e.changedTouches[0].screenX;
      setIsPaused(true);
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!carousel.contains(e.target as Node)) return;
      touchEndX = e.changedTouches[0].screenX;
      const swipeThreshold = 50;

      if (touchStartX - touchEndX > swipeThreshold) {
        // Swipe izquierda - siguiente
        setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
      } else if (touchEndX - touchStartX > swipeThreshold) {
        // Swipe derecha - anterior
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
      }

      // No reanudar auto-play automáticamente después de touch
      // Solo se reanudará cuando el usuario salga del área
    };

    carousel.addEventListener("wheel", handleWheel, { passive: false });
    carousel.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    carousel.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      carousel.removeEventListener("wheel", handleWheel);
      carousel.removeEventListener("touchstart", handleTouchStart);
      carousel.removeEventListener("touchend", handleTouchEnd);
      clearTimeout(scrollTimeout);
    };
  }, [hasMoreItems, maxIndex]);

  // Auto-play del carrusel
  useEffect(() => {
    if (!hasMoreItems || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(interval);
  }, [hasMoreItems, isPaused, maxIndex]);

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

      {/* Botones de Navegación */}
      {projects.length > itemsPerView && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 rounded-full bg-[#1a1a1a] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-white transition-all duration-300 hover:bg-linear-to-r hover:from-[#6366f1] hover:to-[#8b5cf6] hover:border-transparent hover:scale-110"
            aria-label="Proyecto anterior"
          >
            <ChevronLeftIcon size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 rounded-full bg-[#1a1a1a] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-white transition-all duration-300 hover:bg-linear-to-r hover:from-[#6366f1] hover:to-[#8b5cf6] hover:border-transparent hover:scale-110"
            aria-label="Siguiente proyecto"
          >
            <ChevronRightIcon size={24} />
          </button>
        </>
      )}

      {/* Indicadores de puntos */}
      {projects.length > itemsPerView && (
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-linear-to-r from-[#6366f1] to-[#8b5cf6] w-8"
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

