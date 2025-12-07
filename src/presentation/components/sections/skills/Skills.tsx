import React from "react";
import { SKILLS_ICONS, type SkillCategory } from "@/domain/constants";

const categoryLabels: Record<SkillCategory, string> = {
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
      SkillCategory,
      Array<{ key: string; icon: React.ReactElement; displayName: string }>
    >
  );

  // Orden de las categorías
  const categoryOrder: SkillCategory[] = [
    "frontend",
    "backend",
    "database",
    "mobile",
    "tools",
  ];

  // Filtrar categorías que tienen habilidades
  const availableCategories = categoryOrder.filter(
    (category) => skillsByCategory[category] && skillsByCategory[category].length > 0
  );

  return (
    <section id="skills" className="py-24 bg-[#1a1a1a]">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-linear-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">
          Habilidades
        </h2>
        <p className="text-center text-[#a0a0a0] text-lg mb-12">
          Tecnologías y herramientas que domino
        </p>
        <div className="flex flex-wrap justify-center gap-8 max-w-[1200px] mx-auto px-4 md:px-0">
          {availableCategories.map((category) => {
            const skills = skillsByCategory[category];
            if (!skills || skills.length === 0) return null;

            return (
              <div key={category} className="flex flex-col w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)] max-w-[350px]">
                <h3 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-[rgba(255,255,255,0.1)]">
                  {categoryLabels[category]}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <div
                      key={skill.key}
                      className="flex items-center gap-2 px-4 py-2 bg-[#121212] border border-[rgba(255,255,255,0.1)] rounded-full text-sm font-medium text-white transition-all duration-300 cursor-default hover:bg-linear-to-r hover:from-[#6366f1] hover:to-[#8b5cf6] hover:border-transparent hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(99,102,241,0.3)]"
                    >
                      <span className="flex items-center justify-center text-lg">
                        {skill.icon}
                      </span>
                      <span>{skill.displayName}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
