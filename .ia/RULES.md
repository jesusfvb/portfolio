# Reglas de Desarrollo

## Arquitectura

### Principio de Dependencias

Las dependencias deben seguir esta dirección estricta:

```
Presentation → Application → Domain
```

**Nunca:**
- Domain NO debe importar de Presentation o Application
- Application NO debe importar de Presentation
- Presentation puede usar Application y Domain

### Organización de Archivos

1. **Domain Layer**
   - `interfaces/` - Solo definiciones de tipos e interfaces
   - `constants/` - Datos constantes y configuración
   - `services/` - Servicios del dominio (ej: carga de descripciones)

2. **Presentation Layer**
   - `pages/` - Páginas completas de la aplicación
   - `components/` - Componentes reutilizables
   - Organizar componentes por funcionalidad en subcarpetas

## Convenciones de Código

### Nomenclatura

- **Componentes**: PascalCase (ej: `ProjectCard.tsx`)
- **Archivos de componentes**: Mismo nombre que el componente
- **Hooks**: camelCase con prefijo `use` (ej: `useProjectDescription.ts`)
- **Interfaces/Tipos**: PascalCase (ej: `Project`, `SkillType`)
- **Constantes**: UPPER_SNAKE_CASE (ej: `PROJECTS`, `SKILLS_ICONS`)
- **Carpetas**: kebab-case (ej: `project-detail/`, `not-found/`)

### Estructura de Componentes

1. Imports (React primero, luego librerías, luego locales)
2. Tipos/Interfaces locales
3. Constantes locales
4. Componente principal
5. Exports

Ejemplo:
```typescript
import React from "react";
import { Link } from "react-router";
import { Project } from "@/domain/interfaces";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  // Component logic
};

export default ProjectCard;
```

### Imports

- Usar path aliases (`@/`) en lugar de rutas relativas cuando sea posible
- Agrupar imports: React, librerías externas, imports locales
- Ordenar alfabéticamente dentro de cada grupo

### TypeScript

- **Siempre** tipar props de componentes
- **Siempre** tipar funciones y hooks
- Preferir `interface` sobre `type` para objetos
- Usar `type` para uniones, intersecciones y primitivos
- Evitar `any`, usar `unknown` si es necesario

### Estilos

- **Solo Tailwind CSS** - No usar CSS modules o archivos CSS separados (excepto `index.css`)
- Clases de Tailwind ordenadas lógicamente (layout, spacing, typography, colors, etc.)
- Usar clases utilitarias de Tailwind en lugar de estilos inline cuando sea posible
- Para markdown: usar Tailwind Typography con variantes personalizadas

## Routing

- Rutas definidas en `src/domain/routes/routes.ts`
- Usar `Link` de `react-router` para navegación
- Páginas en `src/presentation/pages/`
- Cada página debe tener su propia carpeta

## Manejo de Estado

- **Estado local**: `useState` y `useReducer` dentro de componentes
- **Estado global compartido**: Zustand stores en `src/domain/stores/`
- **Estado de servidor/fetching**: Hooks personalizados o React Query (si se implementa)

## Componentes y Props

- Componentes funcionales solamente
- Props desestructuradas en la firma de la función
- Props opcionales marcadas con `?`
- Props con valores por defecto usando default parameters

## Markdown

- Descripciones de proyectos en `public/projects_descriptions/`
- Estructura: `{project_id}/short.md` y `{project_id}/full.md`
- Cargar mediante `description-loader.service.ts`
- Renderizar con `react-markdown`
- Estilar con Tailwind Typography

## Responsive Design

- Enfoque **mobile-first**
- Breakpoints de Tailwind: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- Probar en múltiples tamaños de pantalla

## Accesibilidad

- Usar elementos semánticos HTML
- Incluir `aria-label` en botones iconos
- Navegación por teclado funcional
- Contraste de colores adecuado

## Performance

- Lazy loading de imágenes cuando sea apropiado
- Componentes optimizados (memo cuando sea necesario)
- Código splitting por rutas
- Optimización de bundles con Vite

## Git y Commits

- Commits descriptivos en español
- Un commit por cambio lógico
- No committear archivos temporales o de build

