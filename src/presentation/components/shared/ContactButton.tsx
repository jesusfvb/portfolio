import { useState, useEffect } from 'react';

interface ContactButtonProps {
  text?: string;
  variant?: 'default' | 'small' | 'large';
  className?: string;
  onClick?: () => void;
}

const ROTATING_TEXTS = [
  'Hablemos',
  '¿Tienes una idea?',
  'Trabajemos juntos'
];

const ContactButton = ({ 
  text,
  variant = 'default',
  className = '',
  onClick
}: ContactButtonProps) => {
  const [textIndex, setTextIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationType, setAnimationType] = useState(0);
  const currentText = text || ROTATING_TEXTS[textIndex];

  // Efectos de animación aleatorios
  const animationEffects = [
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

  // Rotar textos solo si no se proporciona un texto explícito
  useEffect(() => {
    if (text) {
      return;
    }

    const interval = setInterval(() => {
      // Seleccionar un efecto aleatorio
      const randomEffect = Math.floor(Math.random() * animationEffects.length);
      setAnimationType(randomEffect);
      setIsAnimating(true);
      
      // Cambiar el texto después de que termine el fade out
      setTimeout(() => {
        setTextIndex((prevIndex) => (prevIndex + 1) % ROTATING_TEXTS.length);
        // Restaurar la animación después de un breve momento para el fade in
        setTimeout(() => {
          setIsAnimating(false);
        }, 50);
      }, 300); // Tiempo para el fade out
    }, 5000); // Cambia cada 7 segundos

    return () => clearInterval(interval);
  }, [text]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      scrollToContact();
    }
  };

  const baseClasses = 'cursor-pointer transition-all duration-300 border-none font-inherit bg-linear-to-r from-[#6366f1] to-[#8b5cf6] text-white hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(99,102,241,0.4)] hover:scale-105 relative overflow-hidden group animate-pulse-glow';
  
  const variantClasses = {
    small: 'px-6 py-2.5 rounded-lg text-sm font-semibold min-w-[180px]',
    default: 'px-6 py-3 rounded-lg text-base font-semibold min-w-[200px]',
    large: 'px-10 py-4 rounded-xl text-lg font-bold min-w-[240px]'
  };

  return (
    <button
      onClick={handleClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      <span 
        className={`relative z-10 inline-block transition-all duration-700 ease-in-out ${
          isAnimating 
            ? animationEffects[animationType].out
            : animationEffects[animationType].in
        }`}
      >
        {currentText}
      </span>
      <div className="absolute inset-0 bg-linear-to-r from-[#8b5cf6] to-[#ec4899] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      {/* Efecto shimmer */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)",
          backgroundSize: "200% auto",
          animation: "shimmer 3s linear infinite",
        }}
      ></div>
    </button>
  );
};

export default ContactButton;

