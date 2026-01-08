import ReactMarkdown from "react-markdown";

interface ProjectDescriptionProps {
  description: string;
}

const ProjectDescription = ({ description }: ProjectDescriptionProps) => {
  return (
    <article className="prose prose-invert prose-base max-w-none mb-6 text-[#d0d0d0] text-base [&_h1]:text-white [&_h1]:text-3xl [&_h1]:mb-4 [&_h1]:mt-5 [&_h2]:text-white [&_h2]:text-2xl [&_h2]:mb-3 [&_h2]:mt-4 [&_h3]:text-white [&_h3]:text-xl [&_h3]:mb-2 [&_h3]:mt-3 [&_h4]:text-white [&_h4]:text-lg [&_h4]:mb-2 [&_h4]:mt-3 [&_h5]:text-white [&_h5]:text-base [&_h6]:text-white [&_h6]:text-base [&_h1]:font-semibold [&_h2]:font-semibold [&_h3]:font-semibold [&_p]:text-base [&_p]:leading-relaxed [&_strong]:text-white [&_strong]:font-semibold [&_a]:text-[#6366f1] [&_a]:font-medium [&_a]:no-underline hover:[&_a]:text-[#8b5cf6] hover:[&_a]:underline [&_code]:text-[#8b5cf6] [&_code]:bg-[rgba(99,102,241,0.15)] [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:font-mono [&_code]:text-sm [&_pre]:bg-[#1a1a1a] [&_pre]:text-[#d0d0d0] [&_pre]:border [&_pre]:border-[rgba(255,255,255,0.1)] [&_pre]:text-sm [&_blockquote]:border-l-[#6366f1] [&_blockquote]:border-l-4 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-[#a0a0a0] [&_blockquote]:bg-[rgba(99,102,241,0.05)] [&_blockquote]:text-base [&_hr]:border-[rgba(255,255,255,0.1)] [&_ul]:text-[#d0d0d0] [&_ul]:text-base [&_ol]:text-[#d0d0d0] [&_ol]:text-base [&_li]:text-[#d0d0d0] [&_li]:text-base [&_li]:marker:text-[#6366f1]">
      <ReactMarkdown>{description}</ReactMarkdown>
    </article>
  );
};

export default ProjectDescription;

