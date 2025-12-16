import { FaGithub } from "react-icons/fa";

interface GitHubIconProps {
  size?: number;
  className?: string;
}

const GitHubIcon = ({ size = 20, className = "" }: GitHubIconProps) => {
  return <FaGithub size={size} className={`text-current ${className}`} />;
};

export default GitHubIcon;

