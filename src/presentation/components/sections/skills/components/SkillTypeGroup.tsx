import React from "react";
import SkillBadge from "./SkillBadge";
import type { SkillType } from "@/domain/constants";

interface Skill {
  key: string;
  icon: React.ReactElement;
  displayName: string;
  type: SkillType;
  url?: string;
}

interface SkillTypeGroupProps {
  title: string;
  skills: Skill[];
}

const SkillTypeGroup = ({ title, skills }: SkillTypeGroupProps) => {
  if (skills.length === 0) return null;

  return (
    <div>
      <h5 className="text-xs font-medium text-[#888] mb-1.5">{title}</h5>
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
    </div>
  );
};

export default SkillTypeGroup;

