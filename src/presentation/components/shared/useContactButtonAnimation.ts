import { useState, useEffect, useRef } from 'react';
import { useContactButtonStore } from './contactButtonStore';

export const ROTATING_TEXTS = [
  '¿Tienes una idea?',
  'Trabajemos juntos'  
];

export interface AnimationEffect {
  out: string;
  in: string;
}

export const ANIMATION_EFFECTS: AnimationEffect[] = [
  // Fade con slide up
  {
    out: 'opacity-0 transform translate-y-[-15px] scale-95',
    in: 'opacity-100 transform translate-y-0 scale-100'
  },
  // Fade con slide down
  {
    out: 'opacity-0 transform translate-y-[15px] scale-95',
    in: 'opacity-100 transform translate-y-0 scale-100'
  },
  // Fade con slide left
  {
    out: 'opacity-0 transform translate-x-[-20px] scale-95',
    in: 'opacity-100 transform translate-x-0 scale-100'
  },
  // Fade con slide right
  {
    out: 'opacity-0 transform translate-x-[20px] scale-95',
    in: 'opacity-100 transform translate-x-0 scale-100'
  },
  // Scale con rotate
  {
    out: 'opacity-0 transform scale-0 rotate-[-180deg]',
    in: 'opacity-100 transform scale-100 rotate-0'
  },
  // Scale bounce
  {
    out: 'opacity-0 transform scale-0',
    in: 'opacity-100 transform scale-100'
  },
  // Fade con blur
  {
    out: 'opacity-0 transform blur-sm scale-90',
    in: 'opacity-100 transform blur-0 scale-100'
  },
  // Fade con zoom
  {
    out: 'opacity-0 transform scale-150',
    in: 'opacity-100 transform scale-100'
  }
];

interface UseContactButtonAnimationProps {
  text?: string;
}

export const useContactButtonAnimation = ({ text }: UseContactButtonAnimationProps) => {
  const [textIndex, setTextIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationType, setAnimationType] = useState(0);
  const hoverCount = useContactButtonStore((state) => state.hoverCount);
  const timeoutRefs = useRef<number[]>([]);

  const currentText = text || ROTATING_TEXTS[textIndex];
  const currentAnimation = ANIMATION_EFFECTS[animationType];
  const hasHover = hoverCount > 0;

  // Rotar textos solo si no se proporciona un texto explícito y no hay hover en ningún botón
  useEffect(() => {
    if (text || hasHover) {
      // Si hay hover, detener la animación inmediatamente y cancelar timeouts
      if (isAnimating) {
        setIsAnimating(false);
      }
      timeoutRefs.current.forEach(id => clearTimeout(id));
      timeoutRefs.current = [];
      return;
    }

    let intervalId: number | null = null;

    const startAnimation = () => {
      // Verificar si hay hover antes de animar
      const currentHoverCount = useContactButtonStore.getState().hoverCount;
      if (currentHoverCount > 0) {
        return;
      }

      // Seleccionar un efecto aleatorio
      const randomEffect = Math.floor(Math.random() * ANIMATION_EFFECTS.length);
      setAnimationType(randomEffect);
      setIsAnimating(true);
      
      // Cambiar el texto y terminar la animación después de que termine el fade out (300ms)
      const changeTextTimeout = setTimeout(() => {
        // Verificar si hay hover antes de cambiar el texto
        const hoverCheck = useContactButtonStore.getState().hoverCount;
        if (hoverCheck > 0) {
          setIsAnimating(false);
          return;
        }

        // Cambiar el texto y poner isAnimating a false al mismo tiempo
        // Esto hace que el nuevo texto aparezca inmediatamente con las clases 'in'
        setTextIndex((prevIndex) => (prevIndex + 1) % ROTATING_TEXTS.length);
        setIsAnimating(false);
      }, 300); // Coincide con la duración de la transición CSS (duration-300)

      timeoutRefs.current.push(changeTextTimeout);
    };

    // Iniciar la primera animación inmediatamente
    startAnimation();

    // Configurar el intervalo para repetir cada 1 minutos
    intervalId = window.setInterval(() => {
      startAnimation();
    }, 60000);

    return () => {
      if (intervalId !== null) {
        clearInterval(intervalId);
      }
      timeoutRefs.current.forEach(id => clearTimeout(id));
      timeoutRefs.current = [];
    };
  }, [text, hasHover]);

  return {
    currentText,
    isAnimating,
    currentAnimation
  };
};

