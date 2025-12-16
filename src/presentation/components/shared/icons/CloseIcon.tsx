import { FaXmark } from "react-icons/fa6";

interface CloseIconProps {
  size?: number;
  className?: string;
}

const CloseIcon = ({ size = 20, className = "" }: CloseIconProps) => {
  return <FaXmark size={size} className={className} />;
};

export default CloseIcon;

