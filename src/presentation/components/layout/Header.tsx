import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo" onClick={() => scrollToSection('hero')}>
            <span>JFVB</span>
          </div>
          <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>Inicio</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>Sobre mí</a>
            <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Proyectos</a>
            <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Habilidades</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contacto</a>
          </nav>
          <button 
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

