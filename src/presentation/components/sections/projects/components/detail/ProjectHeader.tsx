import ReactMarkdown from "react-markdown";

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
      <article className="prose prose-invert prose-lg max-w-none mb-6 text-[#d0d0d0] [&_h1]:text-white [&_h2]:text-white [&_h3]:text-white [&_h4]:text-white [&_h5]:text-white [&_h6]:text-white [&_h1]:font-semibold [&_h2]:font-semibold [&_h3]:font-semibold [&_strong]:text-white [&_strong]:font-semibold [&_a]:text-[#6366f1] [&_a]:font-medium [&_a]:no-underline hover:[&_a]:text-[#8b5cf6] hover:[&_a]:underline [&_code]:text-[#8b5cf6] [&_code]:bg-[rgba(99,102,241,0.15)] [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:font-mono [&_code]:text-sm [&_pre]:bg-[#1a1a1a] [&_pre]:text-[#d0d0d0] [&_pre]:border [&_pre]:border-[rgba(255,255,255,0.1)] [&_blockquote]:border-l-[#6366f1] [&_blockquote]:border-l-4 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-[#a0a0a0] [&_blockquote]:bg-[rgba(99,102,241,0.05)] [&_hr]:border-[rgba(255,255,255,0.1)] [&_ul]:text-[#d0d0d0] [&_ol]:text-[#d0d0d0] [&_li]:text-[#d0d0d0] [&_li]:marker:text-[#6366f1]">
        <ReactMarkdown>{description}</ReactMarkdown>
      </article>
    </div>
  );
};

export default ProjectHeader;
