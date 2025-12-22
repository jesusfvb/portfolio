import { getTechInfo } from "@/domain/constants/skills";
import SkillBadge from "@/presentation/components/sections/skills/components/SkillBadge";
import type { Project } from "@/domain/interfaces";

interface ProjectTechStackProps {
  technologies: Project["technologies"];
}

const ProjectTechStack = ({ technologies }: ProjectTechStackProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {technologies.map((tech, index) => {
        const techInfo = getTechInfo(tech);
        if (techInfo) {
          return (
            <span
              key={index}
              onClick={(e) => e.stopPropagation()}
              className="inline-block"
              data-no-card-click
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
            className="px-3.5 py-1.5 bg-[#121212] border border-[rgba(255,255,255,0.1)] rounded-full text-sm text-[#d0d0d0] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#6366f1] hover:to-[#8b5cf6] hover:text-white hover:border-transparent flex items-center gap-2"
            data-no-card-click
          >
            <span>{tech}</span>
          </span>
        );
      })}
    </div>
  );
};

export default ProjectTechStack;

