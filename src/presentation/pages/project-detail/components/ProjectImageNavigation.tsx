import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@/presentation/components/shared/icons";

interface ProjectImageNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
}

const ProjectImageNavigation = ({
  onPrevious,
  onNext,
}: ProjectImageNavigationProps) => {
  return (
    <>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrevious();
        }}
        className="absolute top-1/2 left-4 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-black/80"
        aria-label="Imagen anterior"
      >
        <ChevronLeftIcon size={20} />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute top-1/2 right-4 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-black/80"
        aria-label="Siguiente imagen"
      >
        <ChevronRightIcon size={20} />
      </button>
    </>
  );
};

export default ProjectImageNavigation;

