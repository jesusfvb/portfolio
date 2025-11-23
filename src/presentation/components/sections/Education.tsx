import { EDUCATIONS } from '@/domain/constants';

const Education = () => {
  return (
    <section id="education" className="py-24 bg-[#121212]">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-linear-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">
          Educación
        </h2>
        <p className="text-center text-[#a0a0a0] text-lg mb-12">
          Mi formación académica y profesional
        </p>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {EDUCATIONS.map((education) => (
              <div
                key={education.id}
                className="relative pl-8 md:pl-12 pb-8 border-l-2 border-[rgba(255,255,255,0.1)] last:border-l-0 last:pb-0"
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
                      <p className="text-lg text-[#6366f1] font-medium mb-1">
                        {education.institution}
                      </p>
                      {education.location && (
                        <p className="text-sm text-[#a0a0a0]">
                          📍 {education.location}
                        </p>
                      )}
                    </div>
                    <div className="flex-shrink-0">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

