import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">Sobre Mí</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Soy un desarrollador full stack apasionado por la tecnología y la innovación. 
              Me encanta crear aplicaciones web que no solo funcionen bien, sino que también 
              ofrezcan una experiencia de usuario excepcional.
            </p>
            <p>
              Mi enfoque se centra en escribir código limpio, mantenible y escalable, 
              siempre buscando las mejores prácticas y las tecnologías más adecuadas para 
              cada proyecto.
            </p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Proyectos</span>
              </div>
              <div className="stat">
                <span className="stat-number">3+</span>
                <span className="stat-label">Años de Experiencia</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Dedicación</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

