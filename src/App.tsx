import Header from '@/presentation/components/layout/Header'
import Hero from '@/presentation/components/sections/Hero'
import About from '@/presentation/components/sections/About'
import Projects from '@/presentation/components/sections/Projects'
import Skills from '@/presentation/components/sections/Skills'
import Education from '@/presentation/components/sections/Education'
import Contact from '@/presentation/components/sections/Contact'

function App() {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <main className="w-full">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="py-8 text-center border-t border-white/10 text-[#a0a0a0] text-sm">
        <div className="max-w-[1200px] mx-auto px-8 md:px-4">
          <p>&copy; {new Date().getFullYear()} Jesús Francisco Vázquez Biltre. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
