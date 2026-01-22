import React from "react";
import SkillTypeGroup from "./SkillTypeGroup";
import type { SkillType } from "@/domain/constants";

interface Skill {
  key: string;
  icon: React.ReactElement;
  displayName: string;
  type: SkillType;
  url?: string;
  additionalInfo?: string;
}

interface SkillSubcategoryProps {
  title: string;
  skills: Skill[];
  columns?: 2 | 3;
}

const SkillSubcategory = ({
  title,
  skills,
  columns = 2,
}: SkillSubcategoryProps) => {
  if (skills.length === 0) return null;

  const languages = skills.filter((s) => s.type === "language");
  const frameworks = skills.filter((s) => s.type === "framework");
  const others = skills.filter((s) => s.type === "other");

  const gridCols =
    columns === 3
      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      : "grid-cols-1 md:grid-cols-2";

  return (
    <div>
      <h4 className="mb-2 text-sm font-medium text-[#d0d0d0]">{title}</h4>
      <div className={`grid ${gridCols} gap-4`}>
        <SkillTypeGroup title="Lenguajes" skills={languages} />
        <SkillTypeGroup title="Frameworks" skills={frameworks} />
      </div>
      {others.length > 0 && (
        <div className="mt-2">
          <SkillTypeGroup title="Otros" skills={others} />
        </div>
      )}
    </div>
  );
};

export default SkillSubcategory;
