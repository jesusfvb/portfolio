import { ProjectContentSection } from "../";
import type { Project } from "@/domain/interfaces";

interface ProjectLayoutWithoutImagesProps {
  project: Project;
}

const ProjectLayoutWithoutImages = ({
  project,
}: ProjectLayoutWithoutImagesProps) => {
  return (
    <div className="flex min-h-[calc(100vh-5rem)] items-center justify-center md:min-h-[calc(100vh-6rem)]">
      <div className="w-full max-w-4xl px-6 pb-8 md:px-8 md:pb-10 lg:px-10 lg:pb-12">
        <ProjectContentSection project={project} hasImages={false} />
      </div>
    </div>
  );
};

export default ProjectLayoutWithoutImages;
