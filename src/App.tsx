import { useState } from "react";
import Header from "@/presentation/components/layout/header/Header";
import Education from "@/presentation/components/sections/education/Education";
import Hero from "@/presentation/components/sections/hero/Hero";
import SkillsModal from "@/presentation/components/sections/skills/components/SkillsModal";
import { Contact, Projects } from "./presentation/components/sections";

function App() {
  const [isSkillsModalOpen, setIsSkillsModalOpen] = useState(false);

  return (
    <div className="w-full min-h-screen">
      <Header onOpenSkillsModal={() => setIsSkillsModalOpen(true)} />
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
      <footer className="py-8 text-center border-t border-white/10 text-[#a0a0a0] text-sm">
        <div className="max-w-[1200px] mx-auto px-8 md:px-4">
          <p>
            &copy; {new Date().getFullYear()} Jesús Francisco Vázquez Biltre.
            Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
