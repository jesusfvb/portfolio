import type { Project } from "@/domain/interfaces/project.interface";
import { useTranslation } from "react-i18next";
import ProjectBanner from "./ProjectBanner";
import ProjectCardContent from "./ProjectCardContent";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { t } = useTranslation();

  const translateField = (value?: string) => (value ? t(value) : value);

  const translatedProject = {
    ...project,
    title: translateField(project.title) ?? "",
    description: translateField(project.description) ?? "",
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-8">
      {/* Imagen del proyecto */}
      <div className="w-full md:w-[45%] shrink-0">
        <ProjectBanner project={translatedProject} />
      </div>
      
      {/* Contenido del proyecto */}
      <div className="flex-1">
        <ProjectCardContent project={translatedProject} />
      </div>
    </div>
  );
};

export default ProjectCard;
