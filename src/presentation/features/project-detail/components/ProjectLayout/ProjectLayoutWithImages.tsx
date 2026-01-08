import { ProjectImageSection, ProjectContentSection, ProjectTitle } from "../";
import type { Project } from "@/domain/interfaces";

interface ProjectLayoutWithImagesProps {
  project: Project;
  currentImageIndex: number;
  imageHandlers: {
    goToPrevious: () => void;
    goToNext: () => void;
    selectImage: (index: number) => void;
  };
}

const ProjectLayoutWithImages = ({
  project,
  currentImageIndex,
  imageHandlers,
}: ProjectLayoutWithImagesProps) => {
  return (
    <div className="flex min-h-[calc(100vh-5rem)] flex-col md:min-h-[calc(100vh-6rem)] md:flex-row">
      <div className="fixed top-0 z-10 mb-4 bg-[#1a1a1a] pt-22 w-full pb-4 md:hidden">
        <ProjectTitle title={project.title} size="sm" />
      </div>

      <div className="h-[60vh] shrink-0 pt-12 pb-6 md:mr-5 md:h-[calc(100vh-6rem)] md:w-[340px] md:overflow-hidden md:pt-0 lg:mr-7 lg:w-[450px]">
        <ProjectImageSection
          images={project.images}
          currentImageIndex={currentImageIndex}
          projectTitle={project.title}
          onPreviousImage={imageHandlers.goToPrevious}
          onNextImage={imageHandlers.goToNext}
          onSelectImage={imageHandlers.selectImage}
        />
      </div>

      <div className="flex-1 md:h-[calc(100vh-6rem)] md:overflow-y-auto">
        <ProjectContentSection project={project} hasImages={true} />
      </div>
    </div>
  );
};

export default ProjectLayoutWithImages;
