import React from "react";
import SkillSubcategory from "./SkillSubcategory";
import type { SkillType } from "@/domain/constants";

interface Skill {
  key: string;
  icon: React.ReactElement;
  displayName: string;
  type: SkillType;
}

interface FrontendMobileCategoryProps {
  frontendSkills: Skill[];
  mobileSkills: Skill[];
}

const FrontendMobileCategory = ({ frontendSkills, mobileSkills }: FrontendMobileCategoryProps) => {
  const hasSkills = frontendSkills.length > 0 || mobileSkills.length > 0;

  if (!hasSkills) return null;

  return (
    <div className="flex flex-col w-full">
      <h3 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-[rgba(255,255,255,0.1)]">
        Frontend & Mobile
      </h3>
      <div className="space-y-4">
        <SkillSubcategory title="Frontend" skills={frontendSkills} />
        <SkillSubcategory title="Mobile" skills={mobileSkills} />
      </div>
    </div>
  );
};

export default FrontendMobileCategory;

