import { EDUCATIONS } from '@/domain/constants';
import EducationCard from './components/EducationCard';

const Education = () => {
  return (
    <section id="education" className="py-24 bg-[#1a1a1a]  scroll-mt-20">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 pt-4 bg-linear-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">
          Educación
        </h2>
        <p className="text-center text-[#d0d0d0] text-lg mb-12">
          Mi formación académica y profesional
        </p>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {EDUCATIONS.map((education, index) => (
              <EducationCard
                key={education.id}
                education={education}
                isLast={index === EDUCATIONS.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

