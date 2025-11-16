import './Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  github?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Proyecto Ejemplo 1',
      description: 'Una aplicación web moderna construida con React y TypeScript. Incluye características avanzadas de UI/UX.',
      technologies: ['React', 'TypeScript', 'CSS3'],
      image: '/api/placeholder/400/300',
    },
    {
      id: 2,
      title: 'Proyecto Ejemplo 2',
      description: 'Sistema de gestión completo con backend robusto y frontend intuitivo.',
      technologies: ['Node.js', 'React', 'MongoDB'],
      image: '/api/placeholder/400/300',
    },
    {
      id: 3,
      title: 'Proyecto Ejemplo 3',
      description: 'Plataforma e-commerce con integración de pagos y gestión de inventario.',
      technologies: ['Next.js', 'Stripe', 'PostgreSQL'],
      image: '/api/placeholder/400/300',
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Proyectos</h2>
        <p className="section-subtitle">
          Algunos de mis trabajos más recientes y destacados
        </p>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="400" height="300" fill="url(#projectGradient)" />
                    <defs>
                      <linearGradient id="projectGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="var(--primary-color)" stopOpacity="0.1" />
                        <stop offset="100%" stopColor="var(--secondary-color)" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

