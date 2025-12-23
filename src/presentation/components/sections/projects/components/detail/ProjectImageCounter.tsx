interface ProjectImageCounterProps {
  currentIndex: number;
  totalImages: number;
}

const ProjectImageCounter = ({ currentIndex, totalImages }: ProjectImageCounterProps) => {
  return (
    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white">
      {currentIndex + 1} / {totalImages}
    </div>
  );
};

export default ProjectImageCounter;

