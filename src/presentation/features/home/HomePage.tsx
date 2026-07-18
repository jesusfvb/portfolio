import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useScrollToSectionOnRoute } from "@/application/hooks";
import { Header } from "@/presentation/shared/layout/Header";
import { PageHead, SkipLinks } from "@/presentation/shared/components";
import {
  Hero,
  ProjectsSection,
  Education,
  Certifications,
  Contact,
  Skills,
} from "./components";

const HomePage = () => {
  const { t, i18n } = useTranslation();
  const [isSkillsModalOpen, setIsSkillsModalOpen] = useState(false);
  useScrollToSectionOnRoute();

  // Actualizar atributo lang del HTML cuando cambia el idioma
  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="min-h-screen w-full">
      <PageHead />
      <SkipLinks />
      <Header />
      <main id="main-content" className="w-full">
        <Hero onOpenSkillsModal={() => setIsSkillsModalOpen(true)} />
        <ProjectsSection />
        <Contact />
        <Education />
        <Certifications />
      </main>
      <Skills
        isOpen={isSkillsModalOpen}
        onClose={() => setIsSkillsModalOpen(false)}
      />
      <footer className="border-t border-white/10 py-8 text-center text-sm text-[#d0d0d0]">
        <div className="mx-auto max-w-[1200px] px-8 md:px-4">
          <p>
            &copy; {new Date().getFullYear()} Jesús Francisco Vázquez Biltre.
            {" "}
            {t("footer.copyright")}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
