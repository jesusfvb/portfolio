import ProjectImageNavigation from "./ProjectImageNavigation";
import ProjectImageIndicators from "./ProjectImageIndicators";
import ProjectImageCounter from "./ProjectImageCounter";

interface ProjectImageSectionProps {
  images?: string[];
  currentImageIndex: number;
  projectTitle: string;
  onPreviousImage: () => void;
  onNextImage: () => void;
  onSelectImage: (index: number) => void;
}

const ProjectImageSection = ({
  images,
  currentImageIndex,
  projectTitle,
  onPreviousImage,
  onNextImage,
  onSelectImage,
}: ProjectImageSectionProps) => {
  const hasImages = images && images.length > 0;
  const hasMultipleImages = hasImages && images.length > 1;

  return (
    <div className="relative flex-1 bg-[#121212] overflow-hidden flex items-center justify-center p-10">
      {hasImages ? (
        <>
          <img
            src={images[currentImageIndex]}
            alt={`${projectTitle} - Imagen ${currentImageIndex + 1}`}
            className="max-w-full max-h-full object-contain"
          />

          {hasMultipleImages && (
            <>
              <ProjectImageNavigation
                onPrevious={onPreviousImage}
                onNext={onNextImage}
              />
              <ProjectImageIndicators
                images={images}
                currentIndex={currentImageIndex}
                onSelectImage={onSelectImage}
              />
              <ProjectImageCounter
                currentIndex={currentImageIndex}
                totalImages={images.length}
              />
            </>
          )}
        </>
      ) : (
        <div className="text-center text-[#d0d0d0]">
          <p className="text-lg font-medium">No hay imagen disponible</p>
        </div>
      )}
    </div>
  );
};

export default ProjectImageSection;

