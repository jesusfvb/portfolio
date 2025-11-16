import Header from '@/presentation/components/layout/Header'
import Hero from '@/presentation/components/sections/Hero'
import About from '@/presentation/components/sections/About'
import Projects from '@/presentation/components/sections/Projects'
import Skills from '@/presentation/components/sections/Skills'
import Contact from '@/presentation/components/sections/Contact'
import '@/presentation/styles/App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Jesús FVB. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
