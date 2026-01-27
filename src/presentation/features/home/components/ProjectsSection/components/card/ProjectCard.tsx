import type { Project } from "@/domain/interfaces/project.interface";
import ProjectBanner from "./ProjectBanner";
import ProjectCardContent from "./ProjectCardContent";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="mx-auto w-full">
      <div
        className="flex h-[300px] w-full flex-row overflow-hidden rounded-xl bg-[#0a0a0a]"
      >
        <div className="relative w-2/5 shrink-0">
          <ProjectBanner project={project} />
        </div>
        <ProjectCardContent project={project} />
      </div>
    </div>
  );
};

export default ProjectCard;
