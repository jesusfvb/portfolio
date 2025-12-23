import type { Education } from "@/domain/interfaces";
import { ExternalLinkIcon } from "@/presentation/components/shared/icons";

interface EducationCardProps {
  education: Education;
  isLast?: boolean;
}

const EducationCard = ({ education, isLast = false }: EducationCardProps) => {
  return (
    <div
      className={`relative border-l-2 border-[rgba(255,255,255,0.1)] pb-8 pl-8 md:pl-12 ${
        isLast ? "last:border-l-0 last:pb-0" : ""
      }`}
    >
      {/* Punto decorativo */}
      {isLast ? null : (
        <div className="absolute top-0 -left-[9px] h-4 w-4 rounded-full border-2 border-[#121212] bg-linear-to-r from-[#6366f1] to-[#8b5cf6]"></div>
      )}

      {/* Contenido */}
      <div className="rounded-xl border border-[rgba(255,255,255,0.1)] bg-[#1a1a1a] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] md:p-8">
        <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <h3 className="mb-2 text-2xl font-semibold text-white">
              {education.degree}
            </h3>
            {education.website ? (
              <a
                href={education.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-1 inline-flex items-center gap-2 text-lg font-medium text-[#6366f1] transition-colors duration-300 hover:text-[#8b5cf6]"
              >
                {education.institution}
                <ExternalLinkIcon size={16} className="opacity-70" />
              </a>
            ) : (
              <p className="mb-1 text-lg font-medium text-[#6366f1]">
                {education.institution}
              </p>
            )}
            {education.location && (
              <p className="text-sm text-[#d0d0d0]">📍 {education.location}</p>
            )}
          </div>
          <div className="shrink-0">
            <span className="inline-block rounded-full border border-[rgba(255,255,255,0.1)] bg-[#121212] px-4 py-2 text-sm text-[#d0d0d0]">
              {education.period}
            </span>
          </div>
        </div>

        <div className="mb-4 border-b border-[rgba(255,255,255,0.1)]" />

        {education.description && (
          <p className="leading-relaxed text-[#d0d0d0]">
            {education.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default EducationCard;
