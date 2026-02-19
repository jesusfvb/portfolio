import React from "react";
import SkillBadge from "./SkillBadge";
import SkillTypeGroup from "./SkillTypeGroup";
import { useTranslation } from "react-i18next";
import type {
  SkillCategory as SkillCategoryType,
  SkillType,
} from "@/domain/constants";

interface Skill {
  key: string;
  icon: React.ReactElement;
  displayName: string;
  type: SkillType;
  url?: string;
  additionalInfo?: string;
}

interface SkillCategoryProps {
  category: SkillCategoryType;
  title: string;
  skills: Skill[];
}

const SkillCategory = ({ category, title, skills }: SkillCategoryProps) => {
  const { t } = useTranslation();
  if (!skills || skills.length === 0) return null;

  const shouldGroupByType = category === "backend";
  const languages = shouldGroupByType
    ? skills.filter((s) => s.type === "language")
    : [];
  const frameworks = shouldGroupByType
    ? skills.filter((s) => s.type === "framework")
    : [];
  const others = shouldGroupByType
    ? skills.filter((s) => s.type === "other")
    : skills;

  return (
    <div className="flex w-full flex-col">
      <h3 className="mb-4 border-b border-[rgba(255,255,255,0.1)] pb-2 text-xl font-semibold text-white">
        {title}
      </h3>
      {shouldGroupByType ? (
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <SkillTypeGroup title={t("skills.typeLabels.languages")} skills={languages} />
            <SkillTypeGroup title={t("skills.typeLabels.frameworks")} skills={frameworks} />
          </div>
          {others.length > 0 && (
            <div>
              <h4 className="mb-2 text-sm font-medium text-[#d0d0d0]">{t("skills.typeLabels.others")}</h4>
              <div className="flex flex-wrap gap-3">
                {others.map((skill) => (
                  <SkillBadge
                    key={skill.key}
                    icon={skill.icon}
                    displayName={skill.displayName}
                    url={skill.url}
                    additionalInfo={skill.additionalInfo}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <SkillBadge
              key={skill.key}
              icon={skill.icon}
              displayName={skill.displayName}
              url={skill.url}
              additionalInfo={skill.additionalInfo}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillCategory;
