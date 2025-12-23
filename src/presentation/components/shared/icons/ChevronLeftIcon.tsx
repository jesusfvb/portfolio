import { FaChevronLeft } from "react-icons/fa";

interface ChevronLeftIconProps {
  size?: number;
  className?: string;
}

const ChevronLeftIcon = ({
  size = 24,
  className = "",
}: ChevronLeftIconProps) => {
  return <FaChevronLeft size={size} className={`text-current ${className}`} />;
};

export default ChevronLeftIcon;
