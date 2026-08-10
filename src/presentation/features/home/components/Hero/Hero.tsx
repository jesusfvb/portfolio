import { getTechInfo } from "@/domain/services/icon.service";
import { SkillBadge } from "../Skills/components";
import { ContactButton } from "@/presentation/shared/ui/ContactButton";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/application/routes";

// Imagen optimizada desde public
const profileImage = "/images/foto_de_perfil.webp";

interface HeroProps {
  onOpenSkillsModal: () => void;
}

const Hero = ({ onOpenSkillsModal }: HeroProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Herramientas principales que uso
  const mainTools = ["TypeScript", "React", "Nest", "PostgreSQL"];

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-float absolute -top-[200px] -left-[200px] h-[500px] w-[500px] rounded-full bg-[#6366f1] opacity-30 blur-[80px]"></div>
        <div
          className="animate-float absolute -right-[150px] -bottom-[150px] h-[400px] w-[400px] rounded-full bg-[#8b5cf6] opacity-30 blur-[80px]"
          style={{ animationDelay: "5s" }}
        ></div>
        <div
          className="animate-float absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ec4899] opacity-30 blur-[80px]"
          style={{ animationDelay: "10s" }}
        ></div>
      </div>
      <div className="container">
        <div className="grid w-full grid-cols-1 items-start gap-16 md:grid-cols-2">
          <div className="z-10 order-2 md:order-1">
            <h1 className="mb-6 flex flex-col gap-2">
              <span
                className="bg-linear-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-4xl leading-tight font-bold text-transparent md:text-5xl lg:text-6xl"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {t("hero.title")}
              </span>
              <span className="text-xl font-normal text-[#a0a0a0] md:text-2xl">
                {t("hero.name")}
              </span>
            </h1>
            <p className="mb-6 max-w-[600px] text-lg leading-relaxed text-[#a0a0a0]">
              {t("hero.summary")}
            </p>

            {/* Resumen de herramientas */}
            <div className="mb-8">
              <p className="mb-3 text-sm text-[#a0a0a0]">
                {t("hero.mainToolsLabel")}
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {mainTools.map((tool) => {
                  const techInfo = getTechInfo(tool);
                  if (techInfo) {
                    return (
                      <SkillBadge
                        key={tool}
                        icon={techInfo.icon}
                        displayName={techInfo.displayName}
                        url={techInfo.url}
                      />
                    );
                  }
                  return null;
                })}
                <button
                  onClick={onOpenSkillsModal}
                  className="group flex cursor-pointer items-center gap-2 rounded-full border border-[rgba(255,255,255,0.1)] bg-[#121212] px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-linear-to-r hover:from-[#6366f1] hover:to-[#8b5cf6] hover:text-white hover:shadow-[0_5px_15px_rgba(99,102,241,0.3)]"
                >
                  <span>{t("hero.viewMore")}</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:justify-start">
              <button
                className="font-inherit w-full cursor-pointer rounded-lg border-2 border-[rgba(255,255,255,0.1)] bg-transparent px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-[#6366f1] hover:bg-[#1a1a1a] md:w-auto"
                onClick={() => navigate(ROUTES.projects)}
              >
                {t("hero.viewProjects")}
              </button>
              <ContactButton
                variant="large"
                className="w-full hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(99,102,241,0.5)] md:w-auto"
              />
            </div>
          </div>
          <div className="order-1 flex items-start justify-center pt-4 md:order-2 md:-mt-8 md:pt-0">
            <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px]">
              <div className="relative h-full w-full overflow-hidden rounded-3xl">
                <img
                  src={profileImage}
                  alt={t("hero.profileAlt")}
                  loading="lazy"
                  className="relative h-full w-full object-cover opacity-85 mix-blend-lighten"
                />
                <div className="absolute inset-0 rounded-3xl ring-1 ring-[#121212]/60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
