import './Skills.css';
import { SKILLS } from '@/domain/constants';

const Skills = () => {

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Habilidades</h2>
        <p className="section-subtitle">
          Tecnologías y herramientas que domino
        </p>
        <div className="skills-container">
          {SKILLS.map((skill, index) => (
            <div key={index} className="skill-badge">
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

