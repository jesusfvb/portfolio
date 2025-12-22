import React from "react";
import SkillBadge from "./SkillBadge";
import SkillTypeGroup from "./SkillTypeGroup";
import type { SkillCategory as SkillCategoryType, SkillType } from "@/domain/constants";

interface Skill {
  key: string;
  icon: React.ReactElement;
  displayName: string;
  type: SkillType;
  url?: string;
}

interface SkillCategoryProps {
  category: SkillCategoryType;
  title: string;
  skills: Skill[];
}

const SkillCategory = ({ category, title, skills }: SkillCategoryProps) => {
  if (!skills || skills.length === 0) return null;

  const shouldGroupByType = category === "backend";
  const languages = shouldGroupByType ? skills.filter((s) => s.type === "language") : [];
  const frameworks = shouldGroupByType ? skills.filter((s) => s.type === "framework") : [];
  const others = shouldGroupByType ? skills.filter((s) => s.type === "other") : skills;

  return (
    <div className="flex flex-col w-full">
      <h3 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-[rgba(255,255,255,0.1)]">
        {title}
      </h3>
      {shouldGroupByType ? (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SkillTypeGroup title="Lenguajes" skills={languages} />
            <SkillTypeGroup title="Frameworks" skills={frameworks} />
          </div>
          {others.length > 0 && (
            <div>
              <h4 className="text-sm font-medium text-[#d0d0d0] mb-2">Otros</h4>
              <div className="flex flex-wrap gap-3">
                {others.map((skill) => (
                  <SkillBadge
                    key={skill.key}
                    icon={skill.icon}
                    displayName={skill.displayName}
                    url={skill.url}
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
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillCategory;

