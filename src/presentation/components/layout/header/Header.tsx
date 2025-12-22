import { useState, useEffect } from "react";
import NavLink from "./components/NavLink";
import ContactButton from "@/presentation/components/shared/ContactButton";

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
            <ContactButton variant="small" />
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
          <ContactButton 
            variant="default" 
            className="rounded-full mt-2"
            onClick={() => scrollToSection("contact")}
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;
