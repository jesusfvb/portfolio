import { useState } from "react";
import { PROJECTS } from "@/domain/constants";
import ProjectDetail from "./components/detail/ProjectDetail";
import ProjectCard from "./components/card/ProjectCard";
import type { Project } from "@/domain/interfaces";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

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
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={(project) => {
                setSelectedProject(project);
                setIsDetailOpen(true);
              }}
            />
          ))}
        </div>
      </div>

      {/* Modal de detalle del proyecto */}
      <ProjectDetail
        project={selectedProject}
        isOpen={isDetailOpen}
        onClose={() => {
          setIsDetailOpen(false);
          setSelectedProject(null);
        }}
      />
    </section>
  );
};

export default Projects;
