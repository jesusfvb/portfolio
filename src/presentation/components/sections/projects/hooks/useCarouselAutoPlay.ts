import { useEffect } from "react";

interface UseCarouselAutoPlayProps {
  hasMoreItems: boolean;
  isPaused: boolean;
  maxIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

/**
 * Hook para manejar el auto-play del carrusel (solo en pantallas grandes, no en móvil)
 */
export const useCarouselAutoPlay = ({
  hasMoreItems,
  isPaused,
  maxIndex,
  setCurrentIndex,
}: UseCarouselAutoPlayProps) => {
  useEffect(() => {
    if (!hasMoreItems || isPaused) return;

    // Verificar si estamos en vista móvil (< 768px)
    const checkAndStartAutoPlay = () => {
      const isMobile = window.innerWidth < 768;
      if (isMobile) return null;

      return setInterval(() => {
        setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
      }, 4000); // Cambia cada 4 segundos
    };

    let interval = checkAndStartAutoPlay();

    // Escuchar cambios en el tamaño de la ventana
    const handleResize = () => {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
      if (!isPaused) {
        interval = checkAndStartAutoPlay();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (interval) clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [hasMoreItems, isPaused, maxIndex, setCurrentIndex]);
};

