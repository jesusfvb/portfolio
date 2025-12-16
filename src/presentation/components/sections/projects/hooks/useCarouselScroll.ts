import { useEffect, type RefObject } from "react";

interface UseCarouselScrollProps {
  carouselRef: RefObject<HTMLDivElement | null>;
  hasMoreItems: boolean;
  maxIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  setIsPaused: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * Hook para manejar el scroll y touch del carrusel
 */
export const useCarouselScroll = ({
  carouselRef,
  hasMoreItems,
  maxIndex,
  setCurrentIndex,
  setIsPaused,
}: UseCarouselScrollProps) => {
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || !hasMoreItems) return;

    let isScrolling = false;
    let scrollTimeout: ReturnType<typeof setTimeout>;

    const isMobileDevice = () => window.innerWidth < 768;

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
        const isMobile = isMobileDevice();
        if (e.deltaX > 0) {
          // Scroll horizontal hacia la derecha - siguiente proyecto
          if (isMobile) {
            // En móvil: no scroll circular
            setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
          } else {
            // En desktop: scroll circular
            setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
          }
        } else if (e.deltaX < 0) {
          // Scroll horizontal hacia la izquierda - proyecto anterior
          if (isMobile) {
            // En móvil: no scroll circular
            setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
          } else {
            // En desktop: scroll circular
            setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
          }
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
      const isMobile = isMobileDevice();

      if (touchStartX - touchEndX > swipeThreshold) {
        // Swipe izquierda - siguiente
        if (isMobile) {
          // En móvil: no scroll circular
          setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
        } else {
          // En desktop: scroll circular
          setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
        }
      } else if (touchEndX - touchStartX > swipeThreshold) {
        // Swipe derecha - anterior
        if (isMobile) {
          // En móvil: no scroll circular
          setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
        } else {
          // En desktop: scroll circular
          setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
        }
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
  }, [carouselRef, hasMoreItems, maxIndex, setCurrentIndex, setIsPaused]);
};

