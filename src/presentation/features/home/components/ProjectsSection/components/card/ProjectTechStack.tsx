import type { Project } from "@/domain/interfaces/project.interface";
import { SkillBadge } from "../../../Skills/components";
import { getTechInfo } from "@/domain/services/icon.service";

interface ProjectTechStackProps {
  technologies: Project["technologies"];
}

const ProjectTechStack = ({ technologies }: ProjectTechStackProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, index) => {
        const techInfo = getTechInfo(tech);
        if (techInfo) {
          return (
            <span
              key={index}
              onClick={(e) => e.stopPropagation()}
              className="inline-block"
            >
              <SkillBadge
                icon={techInfo.icon}
                displayName={techInfo.displayName}
                url={techInfo.url}
              />
            </span>
          );
        }
        // Fallback si no se encuentra la tecnología en las skills
        return (
          <span
            key={index}
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 rounded-md bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-400"
          >
            <span>{tech}</span>
          </span>
        );
      })}
    </div>
  );
};

export default ProjectTechStack;
