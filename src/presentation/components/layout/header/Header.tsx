import { useState, useEffect } from "react";
import NavLink from "./components/NavLink";

interface HeaderProps {
  onOpenSkillsModal: () => void;
}

const Header = ({ onOpenSkillsModal }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const handleSkillsClick = () => {
    onOpenSkillsModal();
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-1000 transition-all duration-300 backdrop-blur-md ${
        isScrolled
          ? "bg-linear-to-r from-[rgba(18,18,18,0.95)] via-[#4338ca]/70 to-[rgba(18,18,18,0.95)] border-b border-[#6366f1]/50 shadow-lg"
          : "bg-linear-to-r from-[rgba(18,18,18,0.85)] via-[#4338ca]/60 to-[rgba(18,18,18,0.85)] border-b border-transparent"
      }`}
    >
      <div className="container">
        <div className="flex justify-between items-center py-4">
          <div
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#d0d0d0] flex items-center justify-center text-lg md:text-xl font-bold cursor-pointer transition-all duration-300 hover:scale-110 hover:border-white hover:shadow-[0_0_15px_rgba(208,208,208,0.3)]"
            onClick={() => scrollToSection("hero")}
          >
            <span 
              className="font-bold"
              style={{
                color: '#d0d0d0',
              }}
            >
              JV
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:gap-6 md:items-center">
            <NavLink sectionId="hero" scrollToSection={scrollToSection}>
              Inicio
            </NavLink>
            {/* <NavLink sectionId="about" scrollToSection={scrollToSection}>
              Sobre mí
            </NavLink> */}
            <NavLink sectionId="projects" scrollToSection={scrollToSection}>
              Proyectos
            </NavLink>
            {/* <button
              onClick={handleSkillsClick}
              className="text-[#d0d0d0] hover:text-white transition-colors duration-300 font-medium"
            >
              Habilidades
            </button> */}
            <NavLink sectionId="education" scrollToSection={scrollToSection}>
              Educación
            </NavLink>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2.5 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-300 border-none font-inherit bg-linear-to-r from-[#6366f1] to-[#8b5cf6] text-white hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(99,102,241,0.4)] hover:scale-105 relative overflow-hidden group animate-pulse-glow"
            >
              <span className="relative z-10">Contacto</span>
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
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-white rounded transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white rounded transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white rounded transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={`md:hidden absolute top-full left-0 right-0 flex flex-col bg-[rgba(18,18,18,0.98)] p-8 gap-6 border-t border-white/10 transition-all duration-300 ${
            isMobileMenuOpen
              ? "transform translate-y-0 opacity-100 visible"
              : "transform -translate-y-full opacity-0 invisible"
          }`}
        >
          <NavLink sectionId="hero" scrollToSection={scrollToSection}>
            Inicio
          </NavLink>
          <NavLink sectionId="about" scrollToSection={scrollToSection}>
            Sobre mí
          </NavLink>
          <NavLink sectionId="projects" scrollToSection={scrollToSection}>
            Proyectos
          </NavLink>
          <button
            onClick={handleSkillsClick}
            className="text-[#a0a0a0] hover:text-white transition-colors duration-300 font-medium text-left"
          >
            Habilidades
          </button>
          <NavLink sectionId="education" scrollToSection={scrollToSection}>
            Educación
          </NavLink>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-6 py-3 rounded-full text-base font-semibold cursor-pointer transition-all duration-300 border-none font-inherit bg-linear-to-r from-[#6366f1] to-[#8b5cf6] text-white hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(99,102,241,0.4)] hover:scale-105 relative overflow-hidden group animate-pulse-glow mt-2"
          >
            <span className="relative z-10">Contacto</span>
            <div className="absolute inset-0 bg-linear-to-r from-[#8b5cf6] to-[#ec4899] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {/* Efecto shimmer */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 animate-shimmer bg-linear-to-r from-transparent via-white/20 to-transparent"></div>
            </div>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
