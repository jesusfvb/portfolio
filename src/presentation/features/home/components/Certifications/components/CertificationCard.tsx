import type { Certification } from "@/domain/interfaces";
import { ExternalLinkIcon } from "@/presentation/shared/icons";
import { useTranslation } from "react-i18next";

interface CertificationCardProps {
  certification: Certification;
}

const CertificationCard = ({ certification }: CertificationCardProps) => {
  const { t } = useTranslation();

  return (
    <a
      href={certification.credentialUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-2 rounded-lg border border-[rgba(255,255,255,0.08)] bg-[#1a1a1a] px-4 py-3 no-underline transition-colors duration-200 hover:border-[#6366f1]/40 hover:bg-[#1f1f1f] sm:flex-row sm:items-center sm:justify-between sm:gap-4"
    >
      <div className="min-w-0 flex-1">
        <h3 className="text-base font-semibold text-white transition-colors group-hover:text-[#a5b4fc] md:text-lg">
          {certification.title}
        </h3>
        <p className="mt-0.5 truncate text-xs text-[#a0a0a0]">
          <span className="font-medium text-[#6366f1]">
            {certification.issuer}
          </span>
          <span className="mx-1.5 text-[#555]">·</span>
          <span>{certification.issuedAt}</span>
          <span className="mx-1.5 text-[#555]">·</span>
          <span className="font-mono">
            {t("certifications.credentialIdLabel")}: {certification.credentialId}
          </span>
        </p>
      </div>

      <span className="inline-flex shrink-0 items-center gap-1.5 self-start text-sm font-medium text-[#6366f1] sm:self-center">
        {t("certifications.viewCredential")}
        <ExternalLinkIcon
          size={14}
          className="opacity-70 transition-transform group-hover:translate-x-0.5"
        />
      </span>
    </a>
  );
};

export default CertificationCard;
