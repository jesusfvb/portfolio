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

  const scrollToContact = () => {
    onClose();
    setTimeout(() => {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
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
        className="relative bg-[#1a1a1a] rounded-2xl max-w-6xl w-full max-h-[90vh] border border-[rgba(255,255,255,0.1)] shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón de cerrar - siempre visible */}
        <div className="sticky top-0 z-10 flex justify-end p-4 bg-[#1a1a1a] rounded-t-2xl">
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#121212] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-white transition-all duration-300 hover:bg-linear-to-r hover:from-[#6366f1] hover:to-[#8b5cf6] hover:border-transparent hover:scale-110"
            aria-label="Cerrar"
          >
            <CloseIcon size={20} />
          </button>
        </div>

        {/* Contenido del modal - área con scroll */}
        <div className="overflow-y-auto flex-1">
          <div className="p-6 md:p-8 pt-0">
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
        
        {/* Botón de contacto - fijo en esquina inferior derecha */}
        <div className="sticky bottom-0 z-10 flex justify-end p-4 bg-[#1a1a1a] rounded-b-2xl">
          <button
            onClick={scrollToContact}
            className="px-6 py-3 rounded-xl text-sm font-bold cursor-pointer transition-all duration-300 border-none font-inherit bg-linear-to-r from-[#6366f1] to-[#8b5cf6] text-white hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(99,102,241,0.5)] hover:scale-105 relative overflow-hidden group animate-pulse-glow"
          >
            <span className="relative z-10">Hablemos</span>
            <div className="absolute inset-0 bg-linear-to-r from-[#8b5cf6] to-[#ec4899] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {/* Efecto shimmer */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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

export default SkillsModal;

