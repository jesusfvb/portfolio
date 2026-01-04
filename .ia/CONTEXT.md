# Contexto del Proyecto

## Descripción General

Portfolio personal de **Jesús Francisco Vázquez Biltre**, desarrollador Full Stack. Este proyecto es una aplicación web que muestra habilidades, proyectos y experiencia profesional.

## Tecnologías Principales

### Frontend
- **React 19.2.1** - Biblioteca de UI
- **TypeScript 5.9.3** - Tipado estático
- **Tailwind CSS 4.1.17** - Framework de CSS utility-first
- **Vite 7.2.6** - Build tool y dev server
- **React Router 7.11.0** - Routing cliente
- **React Markdown 9.0.1** - Renderizado de markdown
- **Zustand 5.0.9** - Gestión de estado

### Herramientas de Desarrollo
- **ESLint** - Linter
- **Prettier** - Formateador de código
- **PostCSS** - Procesador de CSS
- **TypeScript ESLint** - Reglas TypeScript

## Arquitectura

El proyecto sigue **Clean Architecture** con las siguientes capas:

1. **Domain Layer** (`src/domain/`)
   - Interfaces TypeScript
   - Constantes del dominio
   - Lógica de negocio pura

2. **Application Layer** (`src/application/`)
   - Servicios de aplicación
   - Casos de uso
   - Validaciones

3. **Presentation Layer** (`src/presentation/`)
   - Componentes React
   - Páginas
   - Estilos
   - Layouts

## Estructura de Páginas

- **HomePage** (`/`) - Página principal con todas las secciones
- **ProjectDetailPage** (`/projects/:id`) - Detalle de un proyecto específico
- **NotFoundPage** (`*`) - Página 404

## Organización de Componentes

Los componentes están organizados en:

- `src/presentation/pages/` - Páginas principales
  - `home/` - Componentes de la página principal
  - `project-detail/` - Componentes del detalle de proyecto
  - `not-found/` - Página 404
- `src/presentation/components/` - Componentes compartidos
  - `icons/` - Iconos SVG
  - `contact-button/` - Botón de contacto
  - `project-card/` - Tarjeta de proyecto

## Gestión de Datos

- **Constantes**: Datos estáticos en `src/domain/constants/`
- **Interfaces**: Tipos TypeScript en `src/domain/interfaces/`
- **Descripciones de proyectos**: Archivos Markdown en `public/projects_descriptions/`
- **Estado global**: Zustand para estado compartido (ej: `contactButtonStore`)

## Estilos

- **Tailwind CSS v4** con configuración moderna
- **Tailwind Typography** para estilizar markdown
- **Tema oscuro** por defecto
- **Responsive design** móvil-first

## Path Aliases

- `@/*` → `./src/*`
- `@/domain/*` → `./src/domain/*`
- `@/presentation/*` → `./src/presentation/*`

