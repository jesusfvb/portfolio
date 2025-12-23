import { FaChevronRight } from "react-icons/fa";

interface ChevronRightIconProps {
  size?: number;
  className?: string;
}

const ChevronRightIcon = ({
  size = 24,
  className = "",
}: ChevronRightIconProps) => {
  return <FaChevronRight size={size} className={`text-current ${className}`} />;
};

export default ChevronRightIcon;
