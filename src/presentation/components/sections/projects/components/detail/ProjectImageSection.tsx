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
    <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-[#121212] p-10">
      {hasImages ? (
        <>
          <img
            src={images[currentImageIndex]}
            alt={`${projectTitle} - Imagen ${currentImageIndex + 1}`}
            className="max-h-full max-w-full object-contain"
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
