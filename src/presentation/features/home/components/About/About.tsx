const About = () => {
  return (
    <section id="about" className="scroll-mt-20 bg-[#1a1a1a] py-24">
      <div className="container">
        <h2 className="mb-4 bg-linear-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text pt-4 text-center text-4xl font-bold text-transparent md:text-5xl">
          Sobre Mí
        </h2>
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="mb-6 text-lg leading-relaxed text-[#a0a0a0]">
              Soy un desarrollador full stack apasionado por la tecnología y la
              innovación. Me encanta crear aplicaciones web que no solo
              funcionen bien, sino que también ofrezcan una experiencia de
              usuario excepcional.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-[#a0a0a0]">
              Mi enfoque se centra en escribir código limpio, mantenible y
              escalable, siempre buscando las mejores prácticas y las
              tecnologías más adecuadas para cada proyecto.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center gap-2 rounded-xl border border-[rgba(255,255,255,0.1)] bg-[#121212] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
                <span className="bg-linear-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-4xl font-bold text-transparent">
                  50+
                </span>
                <span className="text-base font-medium text-[#a0a0a0]">
                  Proyectos
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-xl border border-[rgba(255,255,255,0.1)] bg-[#121212] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
                <span className="bg-linear-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-4xl font-bold text-transparent">
                  3+
                </span>
                <span className="text-base font-medium text-[#a0a0a0]">
                  Años de Experiencia
                </span>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-xl border border-[rgba(255,255,255,0.1)] bg-[#121212] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
                <span className="bg-linear-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-4xl font-bold text-transparent">
                  100%
                </span>
                <span className="text-base font-medium text-[#a0a0a0]">
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
