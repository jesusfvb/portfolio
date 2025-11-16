import './Skills.css';

const Skills = () => {
  const skills = [
    'Java',
    'JavaScript',
    'TypeScript',
    'HTML',
    'CSS',
    'React',
    'React Native',
    'Spring Boot',
    'MongoDB',
    'PostgreSQL',
    'Docker',
    'Git',
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Habilidades</h2>
        <p className="section-subtitle">
          Tecnologías y herramientas que domino
        </p>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-badge">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

