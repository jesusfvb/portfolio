import { EDUCATIONS } from "@/domain/constants/education.constants";
import EducationCard from "./components/EducationCard";

const Education = () => {
  return (
    <section id="education" className="scroll-mt-20 bg-[#1a1a1a] py-24">
      <div className="container">
        <h2 className="mb-4 bg-linear-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text pt-4 text-center text-4xl font-bold text-transparent md:text-5xl">
          Educación
        </h2>
        <p className="mb-12 text-center text-lg text-[#d0d0d0]">
          Mi formación académica y profesional
        </p>
        <div className="mx-auto max-w-4xl">
          <div className="flex justify-center">
            <div className="w-full space-y-8">
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
      </div>
    </section>
  );
};

export default Education;
