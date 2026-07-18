import { CERTIFICATIONS } from "@/domain/constants/certifications.constants";
import CertificationCard from "./components/CertificationCard";
import { useTranslation } from "react-i18next";

const Certifications = () => {
  const { t } = useTranslation();

  const translateField = (value?: string) => (value ? t(value) : value);

  return (
    <section id="certifications" className="scroll-mt-20 bg-black py-16 md:py-20">
      <div className="container">
        <h2 className="mb-2 bg-linear-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text pt-2 text-center text-3xl font-bold text-transparent md:text-4xl">
          {t("certifications.title")}
        </h2>
        <p className="mb-8 text-center text-base text-[#d0d0d0]">
          {t("certifications.subtitle")}
        </p>
        <div className="mx-auto flex max-w-4xl flex-col gap-3">
          {CERTIFICATIONS.map((certification) => {
            const translatedCertification = {
              ...certification,
              title: translateField(certification.title) ?? "",
              issuer: translateField(certification.issuer) ?? "",
              issuedAt: translateField(certification.issuedAt) ?? "",
            };

            return (
              <CertificationCard
                key={certification.id}
                certification={translatedCertification}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
