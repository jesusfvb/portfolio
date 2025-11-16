import './Hero.css';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="greeting">Hola, soy</span>
              <span className="name">Jesús FVB</span>
              <span className="role">Desarrollador Full Stack</span>
            </h1>
            <p className="hero-description">
              Apasionado por crear soluciones digitales innovadoras y experiencias de usuario excepcionales.
              Especializado en desarrollo web moderno con tecnologías de vanguardia.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                Ver Proyectos
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Contactar
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-placeholder">
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="80" fill="url(#gradient)" />
                <circle cx="100" cy="80" r="30" fill="currentColor" opacity="0.3" />
                <path d="M60 160 Q100 140 140 160" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.3" />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--primary-color)" />
                    <stop offset="100%" stopColor="var(--secondary-color)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

