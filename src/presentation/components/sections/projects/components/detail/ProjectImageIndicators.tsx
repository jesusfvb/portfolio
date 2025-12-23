interface ProjectImageIndicatorsProps {
  images: string[];
  currentIndex: number;
  onSelectImage: (index: number) => void;
}

const ProjectImageIndicators = ({
  images,
  currentIndex,
  onSelectImage,
}: ProjectImageIndicatorsProps) => {
  return (
    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
      {images.map((_, index) => (
        <button
          key={index}
          onClick={(e) => {
            e.stopPropagation();
            onSelectImage(index);
          }}
          className={`h-2 rounded-full transition-all ${
            currentIndex === index
              ? "w-8 bg-white"
              : "w-2 bg-white/50 hover:bg-white/75"
          }`}
          aria-label={`Ir a imagen ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default ProjectImageIndicators;
