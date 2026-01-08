import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import NavLink from "./components/NavLink";
import ContactButton from "@/presentation/components/contact-button/ContactButton";
import { ROUTES } from "@/domain/constants/routes.constants";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === ROUTES.HOME;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (isHomePage) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
      }
    } else {
      // Si no estamos en home, navegar a home primero
      navigate(ROUTES.HOME);
      // Luego hacer scroll después de un pequeño delay
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const handleLogoClick = () => {
    if (isHomePage) {
      scrollToSection("hero");
    } else {
      navigate(ROUTES.HOME);
    }
  };

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-1000 backdrop-blur-md transition-all duration-300 ${
        isScrolled
          ? "border-b border-[#6366f1]/50 bg-linear-to-r from-[rgba(18,18,18,0.95)] via-[#4338ca]/70 to-[rgba(18,18,18,0.95)] shadow-lg"
          : "border-b border-transparent bg-linear-to-r from-[rgba(18,18,18,0.85)] via-[#4338ca]/60 to-[rgba(18,18,18,0.85)]"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <div
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-[#d0d0d0] text-lg font-bold transition-all duration-300 hover:scale-110 hover:border-white hover:shadow-[0_0_15px_rgba(208,208,208,0.3)] md:h-12 md:w-12 md:text-xl"
            onClick={handleLogoClick}
          >
            <span
              className="font-bold"
              style={{
                color: "#d0d0d0",
              }}
            >
              JV
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:gap-6">
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
            className="flex cursor-pointer flex-col gap-1.5 border-none bg-transparent p-2 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`h-0.5 w-6 rounded bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 w-6 rounded bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 w-6 rounded bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={`absolute top-full right-0 left-0 flex flex-col gap-6 border-t border-white/10 bg-[rgba(18,18,18,0.98)] p-8 transition-all duration-300 md:hidden ${
            isMobileMenuOpen
              ? "visible translate-y-0 transform opacity-100"
              : "invisible -translate-y-full transform opacity-0"
          }`}
        >
          <NavLink sectionId="hero" scrollToSection={scrollToSection}>
            Inicio
          </NavLink>
          <NavLink sectionId="projects" scrollToSection={scrollToSection}>
            Proyectos
          </NavLink>
          <NavLink sectionId="education" scrollToSection={scrollToSection}>
            Educación
          </NavLink>
          <ContactButton
            variant="default"
            className="mt-2 rounded-full"
            onClick={() => scrollToSection("contact")}
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;
