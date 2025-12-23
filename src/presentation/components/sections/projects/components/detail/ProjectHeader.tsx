interface ProjectHeaderProps {
  title: string;
  description: string;
}

const ProjectHeader = ({ title, description }: ProjectHeaderProps) => {
  return (
    <div>
      <h2 className="mb-4 bg-linear-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
        {title}
      </h2>
      <p className="mb-6 text-lg leading-relaxed text-[#d0d0d0]">
        {description}
      </p>
    </div>
  );
};

export default ProjectHeader;
