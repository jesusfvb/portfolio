import { useState, useEffect } from "react";
import NavLink from "./components/NavLink";

const Header = () => {
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-1000 transition-all duration-300 backdrop-blur-md ${
        isScrolled
          ? "bg-[rgba(18,18,18,0.95)] border-b border-white/10 shadow-lg"
          : "bg-[rgba(18,18,18,0.8)] border-b border-transparent"
      }`}
    >
      <div className="container">
        <div className="flex justify-between items-center py-4">
          <div
            className="text-2xl md:text-lg font-bold bg-linear-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent cursor-pointer transition-transform duration-300 hover:scale-[1.02] whitespace-nowrap"
            onClick={() => scrollToSection("hero")}
          >
            <span>Jesús Francisco Vázquez Biltre</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:gap-8 md:items-center">
            <NavLink sectionId="hero" scrollToSection={scrollToSection}>
              Inicio
            </NavLink>
            <NavLink sectionId="about" scrollToSection={scrollToSection}>
              Sobre mí
            </NavLink>
            <NavLink sectionId="projects" scrollToSection={scrollToSection}>
              Proyectos
            </NavLink>
            <NavLink sectionId="skills" scrollToSection={scrollToSection}>
              Habilidades
            </NavLink>
            <NavLink sectionId="education" scrollToSection={scrollToSection}>
              Educación
            </NavLink>
            <NavLink sectionId="contact" scrollToSection={scrollToSection}>
              Contacto
            </NavLink>
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
          <NavLink sectionId="skills" scrollToSection={scrollToSection}>
            Habilidades
          </NavLink>
          <NavLink sectionId="education" scrollToSection={scrollToSection}>
            Educación
          </NavLink>
          <NavLink sectionId="contact" scrollToSection={scrollToSection}>
            Contacto
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
