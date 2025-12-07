import { useState } from "react";
import { PROJECTS } from "@/domain/constants";
import ProjectDetail from "./components/ProjectDetail";
import ProjectsCarousel from "./components/ProjectsCarousel";
import type { Project } from "@/domain/interfaces";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  return (
    <section id="projects" className="py-24">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-linear-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">
          Proyectos
        </h2>
        <p className="text-center text-[#a0a0a0] text-lg mb-12">
          Algunos de mis trabajos más recientes y destacados
        </p>

        <ProjectsCarousel
          projects={PROJECTS}
          onViewDetails={(project) => {
            setSelectedProject(project);
            setIsDetailOpen(true);
          }}
        />
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
