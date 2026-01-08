interface ProjectTitleProps {
  title: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const ProjectTitle = ({ title, size = "md", className = "" }: ProjectTitleProps) => {
  const sizeClasses = {
    sm: "text-3xl",
    md: "text-4xl",
    lg: "text-5xl",
  };

  return (
    <h2
      className={`bg-linear-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text font-bold text-transparent ${sizeClasses[size]} ${className}`}
    >
      {title}
    </h2>
  );
};

export default ProjectTitle;
