import type { Project } from "@/domain/interfaces";
import ProjectBanner from "./ProjectBanner";
import ProjectOverlay from "./ProjectOverlay";
import ProjectCardContent from "./ProjectCardContent";

interface ProjectCardProps {
  project: Project;
  shouldCenter: boolean;
  onViewDetails: (project: Project) => void;
}

const ProjectCard = ({
  project,
  shouldCenter,
  onViewDetails,
}: ProjectCardProps) => {
  return (
    <div
      className={`${
        shouldCenter
          ? "w-full md:w-[432px] lg:w-[412px]"
          : "min-w-full md:min-w-[calc(50%-1rem)] lg:min-w-[calc(33.333%-1.333rem)]"
      } px-4`}
    >
      <div
        className={`bg-[#1a1a1a] rounded-xl overflow-hidden border border-[rgba(255,255,255,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] group flex flex-col h-[600px] ${
          shouldCenter ? "w-full" : "w-full md:w-[400px] lg:w-[380px]"
        }`}
      >
        <div className="relative">
          <ProjectBanner project={project} />
          <ProjectOverlay project={project} />
        </div>
        <ProjectCardContent project={project} onViewDetails={onViewDetails} />
      </div>
    </div>
  );
};

export default ProjectCard;
