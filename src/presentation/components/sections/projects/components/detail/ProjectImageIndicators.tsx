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
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
      {images.map((_, index) => (
        <button
          key={index}
          onClick={(e) => {
            e.stopPropagation();
            onSelectImage(index);
          }}
          className={`h-2 rounded-full transition-all ${
            currentIndex === index
              ? "bg-white w-8"
              : "bg-white/50 hover:bg-white/75 w-2"
          }`}
          aria-label={`Ir a imagen ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default ProjectImageIndicators;

