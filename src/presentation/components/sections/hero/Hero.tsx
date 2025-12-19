import { getTechInfo } from "@/domain/constants/skills";
import SkillBadge from "@/presentation/components/sections/skills/components/SkillBadge";

// Imagen optimizada desde public
const profileImage = "/images/foto_de_perfil.png";

interface HeroProps {
  onOpenSkillsModal: () => void;
}

const Hero = ({ onOpenSkillsModal }: HeroProps) => {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Herramientas principales que uso
  const mainTools = [
    "React",
    "React Native",
    "Spring Boot",
    "MongoDB",
    "PostgreSQL",
    "Docker",
  ];

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
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold bg-linear-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent leading-tight">
                Desarrollador Full Stack
              </span>
              <span className="text-xl md:text-2xl text-[#a0a0a0] font-normal">
                Jesús Francisco Vázquez Biltre
              </span>
            </h1>
            <p className="text-lg text-[#a0a0a0] leading-relaxed mb-6 max-w-[600px]">
              Apasionado por crear soluciones digitales innovadoras y
              experiencias de usuario excepcionales. Especializado en desarrollo
              web moderno con tecnologías de vanguardia.
            </p>
            
            {/* Resumen de herramientas */}
            <div className="mb-8">
              <p className="text-sm text-[#a0a0a0] mb-3">Tecnologías principales:</p>
              <div className="flex flex-wrap gap-2 items-center">
                {mainTools.map((tool) => {
                  const techInfo = getTechInfo(tool);
                  if (techInfo) {
                    return (
                      <SkillBadge
                        key={tool}
                        icon={techInfo.icon}
                        displayName={techInfo.displayName}
                        url={techInfo.url}
                      />
                    );
                  }
                  return null;
                })}
                <button
                  onClick={onOpenSkillsModal}
                  className="group flex items-center gap-2 px-4 py-2 bg-[#121212] border border-[rgba(255,255,255,0.1)] rounded-full text-sm font-medium text-white transition-all duration-300 hover:bg-linear-to-r hover:from-[#6366f1] hover:to-[#8b5cf6] hover:border-transparent hover:text-white hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(99,102,241,0.3)] cursor-pointer"
                >
                  <span>Ver más</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </div>
            </div>

            <div className="flex gap-4 flex-wrap md:justify-start justify-center">
              <button
                className="px-6 py-3 rounded-lg text-sm font-medium cursor-pointer transition-all duration-300 font-inherit bg-transparent text-white border-2 border-[rgba(255,255,255,0.1)] hover:bg-[#1a1a1a] hover:border-[#6366f1] w-full md:w-auto"
                onClick={() => scrollToSection("projects")}
              >
                Ver Proyectos
              </button>
              <button
                className="px-10 py-4 rounded-xl text-lg font-bold cursor-pointer transition-all duration-300 border-none font-inherit bg-linear-to-r from-[#6366f1] to-[#8b5cf6] text-white hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(99,102,241,0.5)] hover:scale-105 w-full md:w-auto relative overflow-hidden group animate-pulse-glow"
                onClick={() => scrollToSection("contact")}
              >
                <span className="relative z-10">Contactar</span>
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
            </div>
          </div>
          <div className="flex justify-center items-center md:order-2 order-1">
            <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] relative">
              <div className="relative w-full h-full overflow-hidden rounded-3xl">
                <img
                  src={profileImage}
                  alt="Jesús Francisco Vázquez Biltre"
                  className="relative w-full h-full object-cover mix-blend-lighten opacity-85"
                />
                <div className="absolute inset-0 rounded-3xl ring-1 ring-[#121212]/60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
