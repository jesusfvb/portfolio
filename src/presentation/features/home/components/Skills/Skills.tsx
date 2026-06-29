import { SKILLS_ICONS } from "@/domain/constants/skills/data";
import type {
  SkillCategory as SkillCategoryType,
  SkillType,
} from "@/domain/constants/skills/types";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/application/routes";

import { CloseIcon } from "@/presentation/shared/icons";
import SkillCategoryComponent from "./components/SkillCategory";

interface SkillsProps {
  isOpen: boolean;
  onClose: () => void;
}

const Skills = ({ isOpen, onClose }: SkillsProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const scrollToContact = () => {
    onClose();
    navigate(ROUTES.contact);
  };

  if (!isOpen) return null;
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

  // Otras categorías (sin frontend y mobile)
  const otherCategories: SkillCategoryType[] = [
    "backend",
    "database",
    "tools",
    "additional",
  ];

  const availableOtherCategories = otherCategories.filter(
    (category) =>
      skillsByCategory[category] && skillsByCategory[category].length > 0,
  );

  return (
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-6xl flex-col rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[#1a1a1a] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón de cerrar - siempre visible */}
        <div className="sticky top-0 z-10 flex justify-end rounded-t-2xl bg-[#1a1a1a] p-4">
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(255,255,255,0.1)] bg-[#121212] text-white transition-all duration-300 hover:scale-110 hover:border-transparent hover:bg-linear-to-r hover:from-[#6366f1] hover:to-[#8b5cf6]"
            aria-label={t("skills.closeButton")}
          >
            <CloseIcon size={20} />
          </button>
        </div>

        {/* Contenido del modal - área con scroll */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6 pt-0 md:p-8">
            <h2 className="mb-2 bg-linear-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
              {t("skills.title")}
            </h2>
            <p className="mb-8 text-base text-[#a0a0a0]">
              {t("skills.subtitle")}
            </p>
            <div className="flex flex-col gap-10">
              {availableOtherCategories.map((category) => (
                <SkillCategoryComponent
                  key={category}
                  category={category}
                  skills={skillsByCategory[category]}
                  title={t(`skills.categories.${category}`)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Botón de contacto - fijo en esquina inferior derecha */}
        <div className="sticky bottom-0 z-10 flex justify-end rounded-b-2xl bg-[#1a1a1a] p-4">
          <button
            onClick={scrollToContact}
            className="font-inherit group animate-pulse-glow relative cursor-pointer overflow-hidden rounded-xl border-none bg-linear-to-r from-[#6366f1] to-[#8b5cf6] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_15px_40px_rgba(99,102,241,0.5)]"
          >
            <span className="relative z-10">{t("skills.contactButton")}</span>
            <div className="absolute inset-0 bg-linear-to-r from-[#8b5cf6] to-[#ec4899] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            {/* Efecto shimmer */}
            <div
              className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)",
                backgroundSize: "200% auto",
                animation: "shimmer 3s linear infinite",
              }}
            ></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skills;
