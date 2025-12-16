import { FaGithub } from "react-icons/fa";

interface GitHubIconProps {
  size?: number;
  className?: string;
}

const GitHubIcon = ({ size = 20, className = "" }: GitHubIconProps) => {
  return <FaGithub size={size} className={className} />;
};

export default GitHubIcon;

