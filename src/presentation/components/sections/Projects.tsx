import { PROJECTS } from '@/domain/constants';
import { FaReact, FaCss3Alt } from 'react-icons/fa';
import { SiTypescript, SiNodedotjs, SiMongodb, SiNextdotjs, SiStripe, SiPostgresql } from 'react-icons/si';

// Mapeo de tecnologías a iconos
const getTechIcon = (tech: string) => {
  const techLower = tech.toLowerCase();
  
  if (techLower.includes('react') && !techLower.includes('next')) {
    return <FaReact />;
  }
  if (techLower.includes('typescript')) {
    return <SiTypescript />;
  }
  if (techLower.includes('css')) {
    return <FaCss3Alt />;
  }
  if (techLower.includes('node')) {
    return <SiNodedotjs />;
  }
  if (techLower.includes('mongodb')) {
    return <SiMongodb />;
  }
  if (techLower.includes('next')) {
    return <SiNextdotjs />;
  }
  if (techLower.includes('stripe')) {
    return <SiStripe />;
  }
  if (techLower.includes('postgresql') || techLower.includes('postgres')) {
    return <SiPostgresql />;
  }
  
  return null;
};

const Projects = () => {

  return (
    <section id="projects" className="py-24">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">
          Proyectos
        </h2>
        <p className="text-center text-[#a0a0a0] text-lg mb-12">
          Algunos de mis trabajos más recientes y destacados
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-[rgba(255,255,255,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] group flex flex-col"
            >
              <div className="relative w-full h-[250px] md:h-[200px] overflow-hidden bg-[#121212]">
                <div className="w-full h-full">
                  <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <defs>
                      <linearGradient id={`projectGradient-${project.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#6366f1" stopOpacity="0.1" />
                        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>
                    <rect width="400" height="300" fill={`url(#projectGradient-${project.id})`} />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-6">
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-12 h-12 rounded-full bg-[#121212] flex items-center justify-center text-white no-underline transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-[#6366f1] hover:to-[#8b5cf6]"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    )}
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-12 h-12 rounded-full bg-[#121212] flex items-center justify-center text-white no-underline transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-[#6366f1] hover:to-[#8b5cf6]"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-4 text-white">{project.title}</h3>
                <p className="text-[#a0a0a0] leading-relaxed mb-6 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, index) => {
                    const icon = getTechIcon(tech);
                    return (
                      <span 
                        key={index} 
                        className="px-3.5 py-1.5 bg-[#121212] border border-[rgba(255,255,255,0.1)] rounded-full text-sm text-[#a0a0a0] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#6366f1] hover:to-[#8b5cf6] hover:text-white hover:border-transparent flex items-center gap-2"
                      >
                        {icon && <span className="text-base">{icon}</span>}
                        <span>{tech}</span>
                      </span>
                    );
                  })}
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

