const About = () => {
  return (
    <section id="about" className="py-24 bg-[#1a1a1a] scroll-mt-20">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 pt-4 bg-linear-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">
          Sobre Mí
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <p className="text-lg leading-relaxed text-[#a0a0a0] mb-6">
              Soy un desarrollador full stack apasionado por la tecnología y la innovación. 
              Me encanta crear aplicaciones web que no solo funcionen bien, sino que también 
              ofrezcan una experiencia de usuario excepcional.
            </p>
            <p className="text-lg leading-relaxed text-[#a0a0a0] mb-6">
              Mi enfoque se centra en escribir código limpio, mantenible y escalable, 
              siempre buscando las mejores prácticas y las tecnologías más adecuadas para 
              cada proyecto.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center gap-2 p-8 bg-[#121212] rounded-xl border border-[rgba(255,255,255,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
                <span className="text-4xl font-bold bg-linear-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">
                  50+
                </span>
                <span className="text-base text-[#a0a0a0] font-medium">
                  Proyectos
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 p-8 bg-[#121212] rounded-xl border border-[rgba(255,255,255,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
                <span className="text-4xl font-bold bg-linear-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">
                  3+
                </span>
                <span className="text-base text-[#a0a0a0] font-medium">
                  Años de Experiencia
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 p-8 bg-[#121212] rounded-xl border border-[rgba(255,255,255,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
                <span className="text-4xl font-bold bg-linear-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">
                  100%
                </span>
                <span className="text-base text-[#a0a0a0] font-medium">
                  Dedicación
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

