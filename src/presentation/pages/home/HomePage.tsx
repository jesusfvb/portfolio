import { useState } from "react";
import Header from "@/presentation/components/layout/header/Header";
import Education from "@/presentation/components/sections/education/Education";
import Hero from "@/presentation/components/sections/hero/Hero";
import SkillsModal from "@/presentation/components/sections/skills/components/SkillsModal";
import { Contact, Projects } from "@/presentation/components/sections";

const HomePage = () => {
  const [isSkillsModalOpen, setIsSkillsModalOpen] = useState(false);

  return (
    <div className="min-h-screen w-full">
      <Header />
      <main className="w-full">
        <Hero onOpenSkillsModal={() => setIsSkillsModalOpen(true)} />
        {/* <About /> */}
        <Projects />
        {/* <Skills /> */}
        <Contact />
        <Education />
      </main>
      <SkillsModal
        isOpen={isSkillsModalOpen}
        onClose={() => setIsSkillsModalOpen(false)}
      />
      <footer className="border-t border-white/10 py-8 text-center text-sm text-[#d0d0d0]">
        <div className="mx-auto max-w-[1200px] px-8 md:px-4">
          <p>
            &copy; {new Date().getFullYear()} Jesús Francisco Vázquez Biltre.
            Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

