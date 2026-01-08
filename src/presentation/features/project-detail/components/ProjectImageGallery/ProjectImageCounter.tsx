interface ProjectImageCounterProps {
  currentIndex: number;
  totalImages: number;
}

const ProjectImageCounter = ({
  currentIndex,
  totalImages,
}: ProjectImageCounterProps) => {
  return (
    <div className="absolute top-4 left-4 rounded-full bg-black/60 px-3 py-1 text-sm text-white backdrop-blur-sm">
      {currentIndex + 1} / {totalImages}
    </div>
  );
};

export default ProjectImageCounter;

