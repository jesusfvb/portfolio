import { getTechInfo } from "@/domain/constants/skills";
import SkillBadge from "@/presentation/components/sections/skills/components/SkillBadge";

interface ProjectTechnologiesProps {
  technologies: string[];
}

const ProjectTechnologies = ({ technologies }: ProjectTechnologiesProps) => {
  return (
    <div className="mb-6">
      <h3 className="mb-3 text-xl font-semibold text-white">Tecnologías</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => {
          const techInfo = getTechInfo(tech);
          if (techInfo) {
            return (
              <SkillBadge
                key={index}
                icon={techInfo.icon}
                displayName={techInfo.displayName}
                url={techInfo.url}
              />
            );
          }
          // Fallback si no se encuentra la tecnología en las skills
          return (
            <span
              key={index}
              className="rounded-full border border-[rgba(255,255,255,0.1)] bg-[#121212] px-4 py-2 text-sm text-[#d0d0d0] transition-all duration-300 hover:border-transparent hover:bg-linear-to-r hover:from-[#6366f1] hover:to-[#8b5cf6] hover:text-white"
            >
              {tech}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectTechnologies;
