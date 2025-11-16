import { SKILLS } from '@/domain/constants';

const Skills = () => {

  return (
    <section id="skills" className="py-24 bg-[#1a1a1a]">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-linear-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">
          Habilidades
        </h2>
        <p className="text-center text-[#a0a0a0] text-lg mb-12">
          Tecnologías y herramientas que domino
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-12 max-w-[900px] mx-auto px-4 md:px-0">
          {SKILLS.map((skill, index) => (
            <div 
              key={index} 
              className="flex items-center gap-2 px-6 py-3 md:px-6 md:py-3 bg-[#121212] border border-[rgba(255,255,255,0.1)] rounded-full text-base md:text-base font-medium text-white transition-all duration-300 cursor-default hover:bg-linear-to-r hover:from-[#6366f1] hover:to-[#8b5cf6] hover:border-transparent hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(99,102,241,0.3)]"
            >
              <span className="flex items-center justify-center text-xl">{skill.icon}</span>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

