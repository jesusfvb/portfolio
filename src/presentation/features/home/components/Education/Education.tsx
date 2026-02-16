import { EDUCATIONS } from "@/domain/constants/education.constants";
import EducationCard from "./components/EducationCard";
import { useTranslation } from "react-i18next";

const Education = () => {
  const { t } = useTranslation();

  const translateField = (value?: string) => (value ? t(value) : value);

  return (
    <section id="education" className="scroll-mt-20 bg-[#1a1a1a] py-24">
      <div className="container">
        <h2 className="mb-4 bg-linear-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text pt-4 text-center text-4xl font-bold text-transparent md:text-5xl">
          {t("education.title")}
        </h2>
        <p className="mb-12 text-center text-lg text-[#d0d0d0]">
          {t("education.subtitle")}
        </p>
        <div className="mx-auto max-w-4xl">
          <div className="flex justify-center">
            <div className="w-full space-y-8">
              {EDUCATIONS.map((education, index) => {
                const translatedEducation = {
                  ...education,
                  institution: translateField(education.institution) ?? "",
                  degree: translateField(education.degree) ?? "",
                  period: translateField(education.period) ?? "",
                  description: translateField(education.description),
                  location: translateField(education.location),
                };

                return (
                  <EducationCard
                    key={education.id}
                    education={translatedEducation}
                    isLast={index === EDUCATIONS.length - 1}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
