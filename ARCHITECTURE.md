# Arquitectura del Proyecto

Este proyecto sigue los principios de **Clean Architecture** para mantener el código organizado, mantenible y escalable.

## Estructura de Carpetas

```
src/
├── domain/                        # Capa de Dominio (Lógica de negocio)
│   ├── interfaces/               # Interfaces y tipos TypeScript
│   │   ├── project.interface.ts
│   │   ├── skill.interface.ts
│   │   ├── contact.interface.ts
│   │   ├── education.interface.ts
│   │   └── index.ts
│   ├── constants/                # Constantes del dominio
│   │   ├── projects.constants.ts
│   │   ├── skills/
│   │   │   ├── data.tsx          # Datos de habilidades
│   │   │   ├── types.ts          # Tipos de habilidades
│   │   │   └── index.ts
│   │   ├── contact.constants.tsx
│   │   ├── education.constants.ts
│   │   ├── routes.constants.ts
│   │   └── index.ts
│   ├── services/                 # Servicios de dominio
│   │   ├── validation.service.ts
│   │   ├── description-loader.service.ts
│   │   ├── icon.service.tsx
│   │   ├── create-image-icon.tsx
│   │   └── index.ts
│   ├── routes/                   # Definición de rutas
│   │   └── routes.ts
│   └── stores/                   # Estado global (Zustand)
│       └── contactButtonStore.ts
│
├── application/                   # Capa de Aplicación (Casos de uso)
│   └── hooks/                    # Custom hooks de React
│       ├── useProjectDescription.ts
│       ├── useContactButtonAnimation.ts
│       └── index.ts
│
├── presentation/                  # Capa de Presentación (UI)
│   ├── features/                 # Páginas y características principales
│   │   ├── home/
│   │   │   ├── HomePage.tsx
│   │   │   ├── components/
│   │   │   │   ├── Hero/
│   │   │   │   ├── About/
│   │   │   │   ├── ProjectsSection/
│   │   │   │   ├── Education/
│   │   │   │   ├── Contact/
│   │   │   │   ├── Skills/
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   ├── project-detail/
│   │   │   ├── ProjectDetailPage.tsx
│   │   │   ├── components/
│   │   │   │   ├── ProjectLayout/
│   │   │   │   ├── ProjectImageGallery/
│   │   │   │   ├── ProjectContent/
│   │   │   │   ├── CloseButton/
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   ├── error-boundary/
│   │   │   ├── ErrorPage.tsx
│   │   │   └── index.ts
│   │   ├── not-found/
│   │   │   ├── NotFoundPage.tsx
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── shared/                   # Componentes compartidos
│   │   ├── layout/               # Componentes de layout
│   │   │   ├── Header/
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── components/
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   ├── components/           # Componentes reutilizables
│   │   │   ├── PageHead.tsx      # Gestión de meta tags SEO
│   │   │   └── index.ts
│   │   ├── ui/                   # Componentes UI genéricos
│   │   │   ├── ContactButton/
│   │   │   └── index.ts
│   │   ├── icons/                # Componentes de iconos
│   │   │   ├── ArrowRightIcon.tsx
│   │   │   ├── ChevronLeftIcon.tsx
│   │   │   ├── ChevronRightIcon.tsx
│   │   │   ├── CloseIcon.tsx
│   │   │   ├── ExternalLinkIcon.tsx
│   │   │   ├── GitHubIcon.tsx
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── styles/                   # Estilos globales
│   │   └── index.css
│   └── App.tsx                   # Componente raíz de presentación
│
├── vite-env.d.ts                 # Declaraciones de tipos Vite
└── App.tsx                       # Punto de entrada principal
```

## Diagrama de Flujo de Dependencias

```
┌─────────────────────────────────────────────┐
│        Presentation Layer                   │
│  (Features, Pages, Components, Shared UI)   │
└─────────────────┬───────────────────────────┘
                  │ depende de
                  ↓
┌─────────────────────────────────────────────┐
│      Application Layer                      │
│    (Hooks, Use Cases, Servicios)           │
└─────────────────┬───────────────────────────┘
                  │ depende de
                  ↓
┌─────────────────────────────────────────────┐
│        Domain Layer                         │
│  (Interfaces, Constants, Servicios, Stores) │
└─────────────────────────────────────────────┘
```

## Principios de Clean Architecture

### 1. **Domain Layer** (Dominio)

Contiene la lógica de negocio pura e independiente del framework.

**Responsabilidades:**
- **Interfaces**: Definiciones de tipos e interfaces TypeScript para entidades del dominio
- **Constants**: Datos estáticos (proyectos, habilidades, educación, contacto)
- **Services**: Lógica de negocio reutilizable (validación, transformación de datos, carga de recursos)
- **Stores**: Estado global con Zustand (ej: estado del botón de contacto)
- **Routes**: Definición de rutas de la aplicación

**Ejemplos:**
```typescript
// domain/interfaces/project.interface.ts
export interface Project {
  id: number;
  title: string;
  description: { short: string; full: string };
  banner: string;
  // ... más propiedades
}

// domain/services/validation.service.ts
export const ValidationService = {
  validateEmail: (email: string): boolean => { /* lógica */ }
};

// domain/stores/contactButtonStore.ts
export const useContactButtonStore = create((set) => ({
  // estado y acciones
}));
```

### 2. **Application Layer** (Aplicación)

Contiene la lógica de aplicación que orquesta el dominio para casos de uso específicos.

**Responsabilidades:**
- **Hooks**: Custom hooks de React que encapsulan lógica reutilizable de la aplicación
  - Manejan efectos secundarios
  - Transforman datos del dominio
  - Exponen APIs simples para componentes

**Hooks Principales:**
- `useProjectDescription`: Carga y cachea descripciones de markdown de proyectos
  - Estado: `data`, `loading`, `error`
  - Interfaz: `useProjectDescription(projectId, type)`
  
- `useContactButtonAnimation`: Maneja animaciones y estados del botón de contacto
  - Sincroniza con el store global
  - Maneja scroll y visibilidad
  - Interfaz: `useContactButtonAnimation()`

**Ejemplos:**
```typescript
// application/hooks/useProjectDescription.ts
export const useProjectDescription = (projectId: number, type: 'short' | 'full') => {
  const [data, setData] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    // Lógica de carga asíncrona
  }, [projectId, type]);
  
  return { data, loading, error };
};
```

### 3. **Presentation Layer** (Presentación)

Capa responsable de la interfaz de usuario y la interacción con el usuario.

**Estructura:**
- **Features**: Páginas completas con toda su lógica y componentes locales
  - `home/`: Página principal con todas las secciones
  - `project-detail/`: Página de detalles de un proyecto
  - `error-boundary/`: Página de manejo de errores
  - `not-found/`: Página 404

- **Shared**: Componentes reutilizables en toda la aplicación
  - `layout/`: Componentes de estructura (Header, Footer)
  - `components/`: Componentes genéricos (PageHead para SEO)
  - `ui/`: Componentes UI simples (ContactButton)
  - `icons/`: Iconos SVG como componentes React

**Ejemplo de estructura de feature:**
```
home/
├── HomePage.tsx                    # Página completa
├── components/
│   ├── Hero/
│   │   ├── Hero.tsx
│   │   └── index.ts
│   ├── ProjectsSection/
│   │   ├── ProjectsSection.tsx
│   │   ├── ProjectCard.tsx        # Componente local
│   │   └── index.ts
│   └── index.ts
└── index.ts
```

**PageHead Component (SEO):**
```typescript
// Gestiona meta tags dinámicos por página
<PageHead 
  title="Título de la página"
  description="Descripción para SEO"
  image="URL de imagen para redes"
  url="URL canónica"
  type="website | article"
  twitterCard="summary_large_image"
/>
```

## Flujo de Datos

```
┌─────────────────────────────────────────┐
│   React Component (Presentation)        │
└────────────────┬────────────────────────┘
                 │ usa
                 ↓
┌─────────────────────────────────────────┐
│   Custom Hook (Application)              │
│   - useProjectDescription                │
│   - useContactButtonAnimation            │
└────────────────┬────────────────────────┘
                 │ usa
                 ↓
┌─────────────────────────────────────────┐
│   Services & Stores (Domain)             │
│   - validation.service.ts                │
│   - description-loader.service.ts        │
│   - icon.service.tsx                     │
│   - contactButtonStore.ts                │
└─────────────────────────────────────────┘
```

## Reglas de Dependencias

Las dependencias deben seguir esta dirección: **Presentation ← Application ← Domain**

**✅ Permitido:**
- Presentation importa de Application y Domain
- Application importa de Domain
- Domain no importa de ninguna otra capa

**❌ No permitido:**
- Domain importa de Application o Presentation
- Application importa de Presentation
- Circular dependencies

**Ejemplos correctos:**
```typescript
// ✅ Componente de presentación usando hook de aplicación
import { useProjectDescription } from '@/application/hooks';
import { Project } from '@/domain/interfaces';

// ✅ Hook de aplicación usando servicio de dominio
import { ValidationService } from '@/domain/services';

// ✅ Componente usando constantes de dominio
import { PROJECTS } from '@/domain/constants';
```

## Ejemplos de Uso - Casos Reales

### Caso 1: Mostrar una Descripción de Proyecto

**Componente (Presentation):**
```typescript
// src/presentation/features/project-detail/components/ProjectContent/ProjectContent.tsx
import { useProjectDescription } from '@/application/hooks';

export const ProjectContent = ({ projectId }: { projectId: number }) => {
  const { data: content, loading, error } = useProjectDescription(projectId, 'full');
  
  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error al cargar contenido</div>;
  
  return <div className="prose">{content}</div>;
};
```

**Hook (Application):**
```typescript
// src/application/hooks/useProjectDescription.ts
import { descriptionLoaderService } from '@/domain/services';

export const useProjectDescription = (projectId: number, type: 'short' | 'full') => {
  const [data, setData] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    descriptionLoaderService.load(projectId, type)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [projectId, type]);
  
  return { data, loading, error };
};
```

**Servicio (Domain):**
```typescript
// src/domain/services/description-loader.service.ts
export const descriptionLoaderService = {
  load: async (projectId: number, type: 'short' | 'full') => {
    // Lógica de carga desde archivos markdown
  }
};
```

### Caso 2: Formulario de Contacto con Validación

**Componente (Presentation):**
```typescript
// src/presentation/features/home/components/Contact/Contact.tsx
import { ValidationService } from '@/domain/services';

export const Contact = () => {
  const handleSubmit = (email: string) => {
    if (!ValidationService.validateEmail(email)) {
      // mostrar error
      return;
    }
    // procesar envío
  };
  
  return <form onSubmit={handleSubmit}>...</form>;
};
```

**Servicio (Domain):**
```typescript
// src/domain/services/validation.service.ts
export const ValidationService = {
  validateEmail: (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
};
```

### Caso 3: Botón de Contacto con Animación Persistente

**Componente (Presentation):**
```typescript
// src/presentation/shared/ui/ContactButton/ContactButton.tsx
import { useContactButtonAnimation } from '@/application/hooks';

export const ContactButton = () => {
  const { isVisible, animate } = useContactButtonAnimation();
  
  return (
    <button 
      className={`transition ${animate ? 'animate-pulse' : ''}`}
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      Contactar
    </button>
  );
};
```

**Hook (Application):**
```typescript
// src/application/hooks/useContactButtonAnimation.ts
import { useContactButtonStore } from '@/domain/stores';

export const useContactButtonAnimation = () => {
  const { isVisible, animate } = useContactButtonStore();
  
  useEffect(() => {
    const handleScroll = () => {
      // Lógica de animación basada en scroll
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return { isVisible, animate };
};
```

**Store (Domain):**
```typescript
// src/domain/stores/contactButtonStore.ts
import { create } from 'zustand';

export const useContactButtonStore = create((set) => ({
  isVisible: false,
  animate: false,
  setVisible: (visible: boolean) => set({ isVisible: visible }),
  setAnimate: (animate: boolean) => set({ animate })
}));
```

## Importaciones Recomendadas

### Desde Domain
```typescript
// Interfaces
import type { 
  Project, 
  Skill, 
  Contact, 
  Education 
} from '@/domain/interfaces';

// Constantes
import { 
  PROJECTS, 
  SKILLS, 
  CONTACT_INFO, 
  EDUCATION 
} from '@/domain/constants';

// Servicios
import { 
  ValidationService,
  descriptionLoaderService,
  IconService 
} from '@/domain/services';

// Stores
import { useContactButtonStore } from '@/domain/stores';

// Routes
import routes from '@/domain/routes';
```

### Desde Application
```typescript
// Hooks
import { 
  useProjectDescription,
  useContactButtonAnimation 
} from '@/application/hooks';
```

### Desde Presentation
```typescript
// Features (Páginas)
import { HomePage } from '@/presentation/features/home';
import { ProjectDetailPage } from '@/presentation/features/project-detail';

// Shared Layout
import { Header } from '@/presentation/shared/layout';

// Shared Components
import { PageHead } from '@/presentation/shared/components';

// Shared UI
import { ContactButton } from '@/presentation/shared/ui';

// Shared Icons
import { GitHubIcon, ExternalLinkIcon } from '@/presentation/shared/icons';
```

## Beneficios

1. **Separación de responsabilidades**: Cada capa tiene una responsabilidad clara
2. **Testabilidad**: Fácil de testear cada capa de forma independiente
3. **Mantenibilidad**: Código organizado y fácil de mantener
4. **Escalabilidad**: Fácil agregar nuevas funcionalidades sin afectar otras partes
5. **Reutilización**: Lógica de negocio reutilizable en diferentes contextos
6. **Independencia de Framework**: La lógica de dominio no depende de React

## Patrones Utilizados

### 1. **Custom Hooks Pattern**
Los hooks de aplicación encapsulan lógica reutilizable:
- Manejo de efectos secundarios
- Gestión de estado
- Integración con servicios de dominio

```typescript
// Plantilla de hook
export const useFeatureName = (params) => {
  const [state, setState] = useState(initialValue);
  
  useEffect(() => {
    // Lógica asíncrona
  }, [dependencies]);
  
  return { state, actions };
};
```

### 2. **Service Pattern**
Los servicios del dominio contienen lógica de negocio pura:
- Validación
- Transformación de datos
- Acceso a recursos

```typescript
// Plantilla de servicio
export const MyService = {
  method1: (params) => { /* implementación */ },
  method2: (params) => { /* implementación */ }
};
```

### 3. **Store Pattern (Zustand)**
Estado global para datos compartidos entre componentes:

```typescript
// Plantilla de store
export const useMyStore = create((set) => ({
  state: initialValue,
  setState: (value) => set({ state: value })
}));
```

### 4. **Feature Module Pattern**
Cada página/feature es un módulo independiente con su propia estructura:
```
feature/
├── FeaturePage.tsx           # Componente principal
├── components/               # Componentes locales
│   ├── Component1/
│   ├── Component2/
│   └── index.ts
└── index.ts                  # Exportar públicamente
```

## Buenas Prácticas

### 1. **Estructura de Imports**
```typescript
// Orden recomendado en cada archivo:
// 1. React y librerías externas
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

// 2. Domain (interfaces, constantes, servicios, stores)
import type { Project } from '@/domain/interfaces';
import { PROJECTS } from '@/domain/constants';
import { ValidationService } from '@/domain/services';
import { useMyStore } from '@/domain/stores';

// 3. Application (hooks)
import { useProjectDescription } from '@/application/hooks';

// 4. Presentation (componentes compartidos)
import { Header } from '@/presentation/shared/layout';
import { PageHead } from '@/presentation/shared/components';

// 5. Estilos
import '@/presentation/styles/index.css';
```

### 2. **Naming Conventions**
```typescript
// Interfaces: PascalCase, sin prefijo
export interface Project { }

// Tipos: type alias igual que interfaces
export type ProjectStatus = 'active' | 'archived';

// Constantes: UPPER_SNAKE_CASE
export const PROJECT_TIMEOUT = 5000;

// Funciones/Servicios: camelCase
export const validateEmail = (email: string) => { };

// Hooks: use + PascalCase
export const useProjectDescription = () => { };

// Componentes: PascalCase
export const ProjectCard = () => { };

// Archivos: Mismo nombre que export principal
// archivo: ProjectCard.tsx → export ProjectCard
```

### 3. **Error Handling**
```typescript
// En hooks
const [error, setError] = useState<Error | null>(null);

// En servicios
export const myService = {
  riskyOperation: async () => {
    try {
      // operación
    } catch (error) {
      throw new Error(`Custom message: ${error.message}`);
    }
  }
};
```

### 4. **Type Safety**
```typescript
// Siempre usar tipos explícitos
const useMyHook = (): { data: string; loading: boolean } => {
  // ...
};

// No usar 'any'
// ❌ const data: any = fetch(...);
// ✅ const data: Project[] = fetch(...);
```

### 5. **Composición de Componentes**
```typescript
// Usar composición sobre herencia
export const Section = ({ children }: { children: ReactNode }) => {
  return <section className="...">{children}</section>;
};

// Componentes pequeños y reutilizables
export const ProjectCard = ({ project }: { project: Project }) => {
  return <div>...</div>;
};

// Composición en la página
export const ProjectsSection = () => {
  return (
    <Section>
      {PROJECTS.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </Section>
  );
};
```

## Guía para Agregar Nuevas Características

### Paso 1: Definir en Domain
```typescript
// 1. Crear interfaz en domain/interfaces/
export interface NewFeature {
  id: string;
  name: string;
  // ...
}

// 2. Si necesita datos estáticos, agregar en domain/constants/
export const NEW_FEATURES = [{ /* datos */ }];

// 3. Si necesita lógica de negocio, crear en domain/services/
export const NewFeatureService = {
  process: (data: NewFeature) => { /* lógica */ }
};
```

### Paso 2: Crear en Application (si es necesario)
```typescript
// application/hooks/useNewFeature.ts
export const useNewFeature = () => {
  // Usar servicios de dominio
  // Manejar estado
  // Exponer API simple
};
```

### Paso 3: Implementar en Presentation
```typescript
// presentation/features/new-feature/NewFeaturePage.tsx
export const NewFeaturePage = () => {
  // Usar hooks de aplicación
  // Usar componentes shared
  // Renderizar UI
};

// presentation/features/new-feature/components/NewFeatureCard.tsx
export const NewFeatureCard = ({ feature }: { feature: NewFeature }) => {
  return <div>...</div>;
};
```

## Testing

### Domain Layer (Servicios, funciones puras)
```typescript
describe('ValidationService', () => {
  it('should validate email correctly', () => {
    expect(ValidationService.validateEmail('test@test.com')).toBe(true);
    expect(ValidationService.validateEmail('invalid')).toBe(false);
  });
});
```

### Application Layer (Hooks)
```typescript
describe('useProjectDescription', () => {
  it('should load project description', async () => {
    const { result } = renderHook(() => useProjectDescription(1, 'full'));
    expect(result.current.loading).toBe(true);
    
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.data).toBeDefined();
    });
  });
});
```

### Presentation Layer (Componentes)
```typescript
describe('ProjectCard', () => {
  it('should render project card correctly', () => {
    const project = { /* mock */ };
    render(<ProjectCard project={project} />);
    expect(screen.getByText(project.title)).toBeInTheDocument();
  });
});
```

## Recursos y Referencias

- **Clean Architecture**: Robert C. Martin - "Clean Architecture: A Craftsman's Guide"
- **React Hooks**: https://react.dev/reference/react/hooks
- **TypeScript**: https://www.typescriptlang.org/docs/
- **Zustand**: https://github.com/pmndrs/zustand
- **Testing Library**: https://testing-library.com/docs/

