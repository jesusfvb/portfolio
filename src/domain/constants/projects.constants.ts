import type { Project } from '../interfaces/project.interface';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Proyecto Ejemplo 1',
    description: 'Una aplicación web moderna construida con React y TypeScript. Incluye características avanzadas de UI/UX.',
    technologies: ['React', 'TypeScript', 'CSS3'],
    image: '/api/placeholder/400/300',
  },
  {
    id: 2,
    title: 'Proyecto Ejemplo 2',
    description: 'Sistema de gestión completo con backend robusto y frontend intuitivo.',
    technologies: ['Node.js', 'React', 'MongoDB'],
    image: '/api/placeholder/400/300',
  },
  {
    id: 3,
    title: 'Proyecto Ejemplo 3',
    description: 'Plataforma e-commerce con integración de pagos y gestión de inventario.',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL'],
    image: '/api/placeholder/400/300',
  },
];

