import { FaExternalLinkAlt } from "react-icons/fa";

interface ExternalLinkIconProps {
  size?: number;
  className?: string;
}

const ExternalLinkIcon = ({ size = 20, className = "" }: ExternalLinkIconProps) => {
  return <FaExternalLinkAlt size={size} className={`text-current ${className}`} />;
};

export default ExternalLinkIcon;

