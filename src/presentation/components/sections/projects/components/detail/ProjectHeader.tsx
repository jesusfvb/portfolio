interface ProjectHeaderProps {
  title: string;
  description: string;
}

const ProjectHeader = ({ title, description }: ProjectHeaderProps) => {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-linear-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">
        {title}
      </h2>
      <p className="text-lg text-[#d0d0d0] leading-relaxed mb-6">
        {description}
      </p>
    </div>
  );
};

export default ProjectHeader;

