import { useEffect } from "react";
import {
  SKILLS_ICONS,
  type SkillCategory as SkillCategoryType,
  type SkillType,
} from "@/domain/constants";
import FrontendMobileCategory from "./FrontendMobileCategory";
import SkillCategoryComponent from "./SkillCategory";
import { CloseIcon } from "@/presentation/components/shared/icons";

interface SkillsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const categoryLabels: Record<SkillCategoryType, string> = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Base de Datos",
  tools: "Herramientas",
  mobile: "Mobile",
};

const SkillsModal = ({ isOpen, onClose }: SkillsModalProps) => {
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
    >
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
      skillsByCategory[category] && skillsByCategory[category].length > 0
  );

  return (
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-[#1a1a1a] rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-[rgba(255,255,255,0.1)] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón de cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#121212] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-white transition-all duration-300 hover:bg-linear-to-r hover:from-[#6366f1] hover:to-[#8b5cf6] hover:border-transparent hover:scale-110"
          aria-label="Cerrar"
        >
          <CloseIcon size={20} />
        </button>

        {/* Contenido del modal */}
        <div className="p-6 md:p-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-linear-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">
            Habilidades
          </h2>
          <p className="text-[#a0a0a0] text-lg mb-8">
            Tecnologías y herramientas que domino
          </p>
          <div className="flex flex-col gap-8">
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
      </div>
    </div>
  );
};

export default SkillsModal;

