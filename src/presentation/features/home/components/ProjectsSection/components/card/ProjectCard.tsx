import type { Project } from "@/domain/interfaces/project.interface";
import ProjectBanner from "./ProjectBanner";
import ProjectCardContent from "./ProjectCardContent";
import ProjectOverlay from "./ProjectOverlay";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="mx-auto w-full max-w-full sm:max-w-[95%] md:max-w-full lg:max-w-[80%]">
      <div
        className="group flex h-[600px] w-full flex-col overflow-hidden rounded-xl border border-[rgba(255,255,255,0.1)] bg-[#1a1a1a]"
      >
        <div className="relative">
          <ProjectBanner project={project} />
          <ProjectOverlay project={project} />
        </div>
        <ProjectCardContent project={project} />
      </div>
    </div>
  );
};

export default ProjectCard;
