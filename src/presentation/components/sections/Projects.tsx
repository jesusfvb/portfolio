import { useState, useEffect, useRef } from 'react';
import { PROJECTS } from '@/domain/constants';
import { FaReact, FaCss3Alt } from 'react-icons/fa';
import { SiTypescript, SiNodedotjs, SiMongodb, SiNextdotjs, SiStripe, SiPostgresql } from 'react-icons/si';

// Mapeo de tecnologías a iconos
const getTechIcon = (tech: string) => {
  const techLower = tech.toLowerCase();
  
  if (techLower.includes('react') && !techLower.includes('next')) {
    return <FaReact />;
  }
  if (techLower.includes('typescript')) {
    return <SiTypescript />;
  }
  if (techLower.includes('css')) {
    return <FaCss3Alt />;
  }
  if (techLower.includes('node')) {
    return <SiNodedotjs />;
  }
  if (techLower.includes('mongodb')) {
    return <SiMongodb />;
  }
  if (techLower.includes('next')) {
    return <SiNextdotjs />;
  }
  if (techLower.includes('stripe')) {
    return <SiStripe />;
  }
  if (techLower.includes('postgresql') || techLower.includes('postgres')) {
    return <SiPostgresql />;
  }
  
  return null;
};

const Projects = () => {
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
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, PROJECTS.length - itemsPerView);
  const hasMoreItems = PROJECTS.length > itemsPerView;

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
    setIsPaused(true);
    // Reanudar después de 5 segundos sin interacción
    setTimeout(() => setIsPaused(false), 5000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    setIsPaused(true);
    // Reanudar después de 5 segundos sin interacción
    setTimeout(() => setIsPaused(false), 5000);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsPaused(true);
    // Reanudar después de 5 segundos sin interacción
    setTimeout(() => setIsPaused(false), 5000);
  };

  // Manejo de scroll del carrusel
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || !hasMoreItems) return;

    let isScrolling = false;
    let scrollTimeout: ReturnType<typeof setTimeout>;

    const handleWheel = (e: WheelEvent) => {
      if (!carousel.contains(e.target as Node)) return;

      e.preventDefault();
      setIsPaused(true);

      if (isScrolling) return;
      isScrolling = true;

      if (e.deltaY > 0) {
        // Scroll hacia abajo/derecha - siguiente
        setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
      } else {
        // Scroll hacia arriba/izquierda - anterior
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
      }

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
        // Reanudar auto-play después de 3 segundos sin scroll
        setTimeout(() => setIsPaused(false), 3000);
      }, 150);
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

      // Reanudar auto-play después de 3 segundos
      setTimeout(() => setIsPaused(false), 3000);
    };

    carousel.addEventListener('wheel', handleWheel, { passive: false });
    carousel.addEventListener('touchstart', handleTouchStart, { passive: true });
    carousel.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      carousel.removeEventListener('wheel', handleWheel);
      carousel.removeEventListener('touchstart', handleTouchStart);
      carousel.removeEventListener('touchend', handleTouchEnd);
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
    <section id="projects" className="py-24">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-linear-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">
          Proyectos
        </h2>
        <p className="text-center text-[#a0a0a0] text-lg mb-12">
          Algunos de mis trabajos más recientes y destacados
        </p>
        
        <div 
          ref={carouselRef}
          className="relative" 
          onMouseEnter={() => setIsPaused(true)} 
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Carrusel Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {PROJECTS.map((project) => (
                <div 
                  key={project.id} 
                  className="min-w-full md:min-w-[calc(50%-1rem)] lg:min-w-[calc(33.333%-1.333rem)] px-4"
                >
                  <div className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-[rgba(255,255,255,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] group flex flex-col h-full">
                    <div className="relative w-full h-[250px] md:h-[200px] overflow-hidden bg-[#121212]">
                      <div className="w-full h-full">
                        <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                          <defs>
                            <linearGradient id={`projectGradient-${project.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.1" />
                              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
                            </linearGradient>
                          </defs>
                          <rect width="400" height="300" fill={`url(#projectGradient-${project.id})`} />
                        </svg>
                      </div>
                      <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex gap-6">
                          {project.link && (
                            <a 
                              href={project.link} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="w-12 h-12 rounded-full bg-[#121212] flex items-center justify-center text-white no-underline transition-all duration-300 hover:scale-110 hover:bg-linear-to-r hover:from-[#6366f1] hover:to-[#8b5cf6]"
                            >
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                              </svg>
                            </a>
                          )}
                          {project.github && (
                            <a 
                              href={project.github} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="w-12 h-12 rounded-full bg-[#121212] flex items-center justify-center text-white no-underline transition-all duration-300 hover:scale-110 hover:bg-linear-to-r hover:from-[#6366f1] hover:to-[#8b5cf6]"
                            >
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col grow">
                      <h3 className="text-2xl font-semibold mb-4 text-white">{project.title}</h3>
                      <p className="text-[#a0a0a0] leading-relaxed mb-6 grow">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.technologies.map((tech, index) => {
                          const icon = getTechIcon(tech);
                          return (
                            <span 
                              key={index} 
                              className="px-3.5 py-1.5 bg-[#121212] border border-[rgba(255,255,255,0.1)] rounded-full text-sm text-[#a0a0a0] transition-all duration-300 hover:bg-linear-to-r hover:from-[#6366f1] hover:to-[#8b5cf6] hover:text-white hover:border-transparent flex items-center gap-2"
                            >
                              {icon && <span className="text-base">{icon}</span>}
                              <span>{tech}</span>
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botones de Navegación */}
          {PROJECTS.length > itemsPerView && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 rounded-full bg-[#1a1a1a] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-white transition-all duration-300 hover:bg-linear-to-r hover:from-[#6366f1] hover:to-[#8b5cf6] hover:border-transparent hover:scale-110"
                aria-label="Proyecto anterior"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 rounded-full bg-[#1a1a1a] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-white transition-all duration-300 hover:bg-linear-to-r hover:from-[#6366f1] hover:to-[#8b5cf6] hover:border-transparent hover:scale-110"
                aria-label="Siguiente proyecto"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </>
          )}

          {/* Indicadores de puntos */}
          {PROJECTS.length > itemsPerView && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-linear-to-r from-[#6366f1] to-[#8b5cf6] w-8'
                      : 'w-2.5 bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.4)]'
                  }`}
                  aria-label={`Ir al proyecto ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;

