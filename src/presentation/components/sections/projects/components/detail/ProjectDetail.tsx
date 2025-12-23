import { useState, useEffect } from "react";
import type { Project } from "@/domain/interfaces";
import ProjectImageSection from "./ProjectImageSection";
import ProjectContentSection from "./ProjectContentSection";
import CloseButton from "./CloseButton";

interface ProjectDetailProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetail = ({ project, isOpen, onClose }: ProjectDetailProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (project && project.images && project.images.length > 0) {
      setCurrentImageIndex(0);
    }
  }, [project]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!project || !isOpen) return null;

  const goToPreviousImage = () => {
    if (project.images && project.images.length > 0) {
      setCurrentImageIndex((prev) =>
        prev > 0 ? prev - 1 : project.images!.length - 1
      );
    }
  };

  const goToNextImage = () => {
    if (project.images && project.images.length > 0) {
      setCurrentImageIndex((prev) =>
        prev < project.images!.length - 1 ? prev + 1 : 0
      );
    }
  };

  const handleSelectImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative h-full bg-[#1a1a1a] rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden border border-[rgba(255,255,255,0.1)] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton onClose={onClose} />

        <div className="flex flex-col md:flex-row h-full overflow-hidden">
          <ProjectImageSection
            images={project.images}
            currentImageIndex={currentImageIndex}
            projectTitle={project.title}
            onPreviousImage={goToPreviousImage}
            onNextImage={goToNextImage}
            onSelectImage={handleSelectImage}
          />
          <ProjectContentSection project={project} />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
