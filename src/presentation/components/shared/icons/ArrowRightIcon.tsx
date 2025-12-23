import { FaArrowRight } from "react-icons/fa";

interface ArrowRightIconProps {
  size?: number;
  className?: string;
}

const ArrowRightIcon = ({ size = 18, className = "" }: ArrowRightIconProps) => {
  return <FaArrowRight size={size} className={`text-current ${className}`} />;
};

export default ArrowRightIcon;
