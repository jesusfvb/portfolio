import React from "react";
import {
  SKILLS_ICONS,
  type SkillCategory as SkillCategoryType,
  type SkillType,
} from "@/domain/constants";
import FrontendMobileCategory from "./components/FrontendMobileCategory";
import SkillCategoryComponent from "./components/SkillCategory";

const categoryLabels: Record<SkillCategoryType, string> = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Base de Datos",
  tools: "Herramientas",
  mobile: "Mobile",
};

const Skills = () => {
  // Agrupar habilidades por categoría
  const skillsByCategory = Object.entries(SKILLS_ICONS).reduce(
    (acc, [key, skill]) => {
      const category = skill.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push({ key, ...skill });
      return acc;
    },
    {} as Record<
      SkillCategoryType,
      Array<{
        key: string;
        icon: React.ReactElement;
        displayName: string;
        type: SkillType;
        url?: string;
      }>
    >,
  );

  // Combinar frontend y mobile en una categoría unificada
  const frontendMobileSkills = {
    frontend: skillsByCategory.frontend || [],
    mobile: skillsByCategory.mobile || [],
  };

  // Otras categorías (sin frontend y mobile)
  const otherCategories: SkillCategoryType[] = ["backend", "database", "tools"];

  const availableOtherCategories = otherCategories.filter(
    (category) =>
      skillsByCategory[category] && skillsByCategory[category].length > 0,
  );

  return (
    <section id="skills" className="scroll-mt-20 bg-[#1a1a1a] py-24">
      <div className="container">
        <h2 className="mb-4 bg-linear-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text pt-4 text-center text-4xl font-bold text-transparent md:text-5xl">
          Habilidades
        </h2>
        <p className="mb-12 text-center text-lg text-[#a0a0a0]">
          Tecnologías y herramientas que domino
        </p>
        <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-4 md:px-0">
          <FrontendMobileCategory
            frontendSkills={frontendMobileSkills.frontend}
            mobileSkills={frontendMobileSkills.mobile}
          />

          {availableOtherCategories.map((category) => (
            <SkillCategoryComponent
              key={category}
              category={category}
              title={categoryLabels[category]}
              skills={skillsByCategory[category]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
