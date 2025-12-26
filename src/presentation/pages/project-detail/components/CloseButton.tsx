import { useNavigate } from "react-router";
import { CloseIcon } from "@/presentation/components/shared/icons";

interface CloseButtonProps {
  onClose?: () => void;
}

const CloseButton = ({ onClose }: CloseButtonProps) => {
  const navigate = useNavigate();

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      navigate("/");
    }
  };

  return (
    <button
      onClick={handleClose}
      className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(255,255,255,0.1)] bg-[#121212] text-white transition-all duration-300 hover:scale-110 hover:border-transparent hover:bg-linear-to-r hover:from-[#6366f1] hover:to-[#8b5cf6]"
      aria-label="Cerrar"
    >
      <CloseIcon size={20} />
    </button>
  );
};

export default CloseButton;

