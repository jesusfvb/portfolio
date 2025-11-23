import { useState, useEffect } from "react";
import profileImage from "@/assets/1000001843.JPG";

const Hero = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      // Mostrar indicador si no hemos llegado al final de la página
      // Con un margen de 100px para que desaparezca antes de llegar completamente al final
      const isNearBottom = scrollTop + windowHeight >= documentHeight - 100;
      setShowScrollIndicator(!isNearBottom);
    };

    // Verificar inicialmente
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-[#6366f1] rounded-full blur-[80px] opacity-30 -top-[200px] -left-[200px] animate-float"></div>
        <div
          className="absolute w-[400px] h-[400px] bg-[#8b5cf6] rounded-full blur-[80px] opacity-30 -bottom-[150px] -right-[150px] animate-float"
          style={{ animationDelay: "5s" }}
        ></div>
        <div
          className="absolute w-[300px] h-[300px] bg-[#ec4899] rounded-full blur-[80px] opacity-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float"
          style={{ animationDelay: "10s" }}
        ></div>
      </div>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full">
          <div className="z-10 md:order-1 order-2">
            <h1 className="flex flex-col gap-2 mb-6">
              <span className="text-2xl text-[#a0a0a0] font-normal">
                Hola, soy
              </span>
              <span className="text-5xl md:text-6xl lg:text-7xl font-bold bg-linear-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent leading-tight">
                Jesús Francisco Vázquez Biltre
              </span>
              <span className="text-2xl md:text-3xl text-white font-semibold">
                Desarrollador Full Stack
              </span>
            </h1>
            <p className="text-lg text-[#a0a0a0] leading-relaxed mb-8 max-w-[600px]">
              Apasionado por crear soluciones digitales innovadoras y
              experiencias de usuario excepcionales. Especializado en desarrollo
              web moderno con tecnologías de vanguardia.
            </p>
            <div className="flex gap-4 flex-wrap md:justify-start justify-center">
              <button
                className="px-8 py-3.5 rounded-lg text-base font-semibold cursor-pointer transition-all duration-300 border-none font-inherit bg-linear-to-r from-[#6366f1] to-[#8b5cf6] text-white hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(99,102,241,0.4)] w-full md:w-auto"
                onClick={() => scrollToSection("projects")}
              >
                Ver Proyectos
              </button>
              <button
                className="px-8 py-3.5 rounded-lg text-base font-semibold cursor-pointer transition-all duration-300 font-inherit bg-transparent text-white border-2 border-[rgba(255,255,255,0.1)] hover:bg-[#1a1a1a] hover:border-[#6366f1] w-full md:w-auto"
                onClick={() => scrollToSection("contact")}
              >
                Contactar
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center md:order-2 order-1">
            <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] relative">
              <div className="relative w-full h-full rounded-full p-1 bg-linear-to-r from-[#6366f1] to-[#8b5cf6] shadow-[0_20px_40px_rgba(99,102,241,0.3)]">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#1a1a1a]">
                  <img
                    src={profileImage}
                    alt="Jesús Francisco Vázquez Biltre"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {showScrollIndicator && (
          <div className="fixed bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#a0a0a0] z-50 transition-opacity duration-300">
            <div
              className="flex flex-col items-center gap-2 transition-all duration-300 hover:opacity-70 active:opacity-50 hover:scale-110"
              aria-label="Desplazarse hacia abajo"
            >
              <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-[#a0a0a0] rounded-xl relative flex items-center justify-center">
                <div className="w-1 h-1.5 md:h-2 bg-[#a0a0a0] rounded-sm animate-scroll"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
