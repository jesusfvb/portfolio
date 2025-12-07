import type { Education } from '@/domain/interfaces';

interface EducationCardProps {
  education: Education;
  isLast?: boolean;
}

const EducationCard = ({ education, isLast = false }: EducationCardProps) => {
  return (
    <div
      className={`relative pl-8 md:pl-12 pb-8 border-l-2 border-[rgba(255,255,255,0.1)] ${
        isLast ? 'last:border-l-0 last:pb-0' : ''
      }`}
    >
      {/* Punto decorativo */}
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-linear-to-r from-[#6366f1] to-[#8b5cf6] border-2 border-[#121212]"></div>
      
      {/* Contenido */}
      <div className="bg-[#1a1a1a] rounded-xl p-6 md:p-8 border border-[rgba(255,255,255,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-2">
              {education.degree}
            </h3>
            {education.website ? (
              <a
                href={education.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-[#6366f1] font-medium mb-1 hover:text-[#8b5cf6] transition-colors duration-300 inline-flex items-center gap-2"
              >
                {education.institution}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-70">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            ) : (
              <p className="text-lg text-[#6366f1] font-medium mb-1">
                {education.institution}
              </p>
            )}
            {education.location && (
              <p className="text-sm text-[#a0a0a0]">
                📍 {education.location}
              </p>
            )}
          </div>
          <div className="shrink-0">
            <span className="inline-block px-4 py-2 bg-[#121212] border border-[rgba(255,255,255,0.1)] rounded-full text-sm text-[#a0a0a0]">
              {education.period}
            </span>
          </div>
        </div>
        
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-linear-to-r from-[#6366f1] to-[#8b5cf6] bg-opacity-20 border border-[rgba(99,102,241,0.3)] rounded-full text-sm text-[#a0a0a0]">
            {education.field}
          </span>
        </div>
        
        {education.description && (
          <p className="text-[#a0a0a0] leading-relaxed">
            {education.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default EducationCard;

