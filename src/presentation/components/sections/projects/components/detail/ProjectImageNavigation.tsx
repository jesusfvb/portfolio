import { ChevronLeftIcon, ChevronRightIcon } from "@/presentation/components/shared/icons";

interface ProjectImageNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
}

const ProjectImageNavigation = ({ onPrevious, onNext }: ProjectImageNavigationProps) => {
  return (
    <>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrevious();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:bg-black/80 hover:scale-110"
        aria-label="Imagen anterior"
      >
        <ChevronLeftIcon size={20} />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:bg-black/80 hover:scale-110"
        aria-label="Siguiente imagen"
      >
        <ChevronRightIcon size={20} />
      </button>
    </>
  );
};

export default ProjectImageNavigation;

