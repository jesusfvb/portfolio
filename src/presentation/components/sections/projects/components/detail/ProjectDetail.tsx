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
        prev > 0 ? prev - 1 : project.images!.length - 1,
      );
    }
  };

  const goToNextImage = () => {
    if (project.images && project.images.length > 0) {
      setCurrentImageIndex((prev) =>
        prev < project.images!.length - 1 ? prev + 1 : 0,
      );
    }
  };

  const handleSelectImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative h-full max-h-[90vh] w-full max-w-6xl overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[#1a1a1a] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton onClose={onClose} />

        <div className="flex h-full flex-col overflow-hidden md:flex-row">
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
