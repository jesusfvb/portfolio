import { CloseIcon } from "@/presentation/components/shared/icons";

interface CloseButtonProps {
  onClose: () => void;
}

const CloseButton = ({ onClose }: CloseButtonProps) => {
  return (
    <button
      onClick={onClose}
      className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#121212] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-white transition-all duration-300 hover:bg-linear-to-r hover:from-[#6366f1] hover:to-[#8b5cf6] hover:border-transparent hover:scale-110"
      aria-label="Cerrar"
    >
      <CloseIcon size={20} />
    </button>
  );
};

export default CloseButton;

