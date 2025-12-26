import { useState } from "react";

interface UseCarouselNavigationProps {
  totalItems: number;
  itemsPerView: number;
}

/**
 * Hook para manejar la navegación del carrusel
 */
export const useCarouselNavigation = ({
  totalItems,
  itemsPerView,
}: UseCarouselNavigationProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const maxIndex = Math.max(0, totalItems - itemsPerView);
  const hasMoreItems = totalItems > itemsPerView;
  const shouldCenter = totalItems <= itemsPerView;

  // Verificar si estamos en móvil
  const isMobile = () => window.innerWidth < 768;

  const goToPrevious = () => {
    if (isMobile()) {
      // En móvil: no scroll circular, solo avanzar si no está en el inicio
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else {
      // En desktop: scroll circular
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
    }
    setIsPaused(true);
  };

  const goToNext = () => {
    if (isMobile()) {
      // En móvil: no scroll circular, solo avanzar si no está en el final
      setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
    } else {
      // En desktop: scroll circular
      setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    }
    setIsPaused(true);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsPaused(true);
  };

  return {
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
  };
};
