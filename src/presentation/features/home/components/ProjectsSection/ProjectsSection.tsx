import { PROJECTS } from "@/domain/constants/projects.constants";
import { ProjectCard } from "./components/card";

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-20 bg-[#1a1a1a] py-24">
      <div className="container">
        <h2 className="mb-4 bg-linear-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text pt-4 text-center text-4xl font-bold text-transparent md:text-5xl">
          Proyectos
        </h2>
        <p className="mb-12 text-center text-lg text-[#d0d0d0]">
          Algunos de mis trabajos más recientes y destacados
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
