import Header from "@/presentation/components/layout/header/Header";
import About from "@/presentation/components/sections/about/About";
import Education from "@/presentation/components/sections/education/Education";
import Hero from "@/presentation/components/sections/hero/Hero";

import Skills from "@/presentation/components/sections/skills/Skills";
import { Contact, Projects } from "./presentation/components/sections";

function App() {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <main className="w-full">
        <Hero />
        {/* <About /> */}
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
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
