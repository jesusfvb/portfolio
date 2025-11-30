import type { Education } from '../interfaces/education.interface';

export const EDUCATIONS: Education[] = [
  {
    id: 1,
    institution: 'Universidad de las Ciencias Informáticas (UCI)',
    degree: 'Ingeniería en Ciencias Informáticas',
    field: 'Ingeniería de Software',
    period: '2018 - 2023',
    description: 'Formación integral en ciencias informáticas con especialización en desarrollo de software, arquitectura de sistemas, bases de datos y gestión de proyectos tecnológicos. Enfoque en tecnologías modernas y mejores prácticas de la industria.',
    location: 'La Habana, Cuba',
    website: 'https://www.uci.cu',
  },
  {
    id: 2,
    institution: 'Aprendizaje Autodidacta',
    degree: 'Desarrollo Continuo',
    field: 'Tecnologías Web Modernas',
    period: '2018 - Presente',
    description: 'Aprendizaje continuo y autodidacta en tecnologías web modernas, frameworks de JavaScript, cloud computing, DevOps y mejores prácticas de desarrollo. Participación activa en comunidades de desarrolladores, cursos online, documentación técnica y proyectos personales.',
    location: 'Online',
  },
];

