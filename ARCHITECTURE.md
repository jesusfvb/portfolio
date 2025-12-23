# Arquitectura del Proyecto

Este proyecto sigue los principios de **Clean Architecture** para mantener el código organizado, mantenible y escalable.

## Estructura de Carpetas

```
src/
├── domain/                    # Capa de Dominio (Lógica de negocio)
│   ├── interfaces/           # Interfaces y tipos TypeScript
│   │   ├── project.interface.ts
│   │   ├── skill.interface.ts
│   │   ├── contact.interface.ts
│   │   └── index.ts
│   └── constants/            # Constantes del dominio
│       ├── projects.constants.ts
│       ├── skills.constants.ts
│       ├── contact.constants.ts
│       └── index.ts
│
├── application/               # Capa de Aplicación (Casos de uso)
│   └── services/             # Servicios de aplicación
│       └── validation.service.ts
│
├── presentation/              # Capa de Presentación (UI)
│   ├── components/           # Componentes React
│   │   ├── layout/           # Componentes de layout
│   │   │   ├── Header.tsx
│   │   │   ├── Header.css
│   │   │   └── index.ts
│   │   └── sections/         # Secciones del portafolio
│   │       ├── Hero.tsx
│   │       ├── Hero.css
│   │       ├── About.tsx
│   │       ├── About.css
│   │       ├── Projects.tsx
│   │       ├── Projects.css
│   │       ├── Skills.tsx
│   │       ├── Skills.css
│   │       ├── Contact.tsx
│   │       ├── Contact.css
│   │       └── index.ts
│   └── styles/               # Estilos globales
│       ├── index.css
│       └── App.css
│
├── App.tsx                   # Componente principal
└── main.tsx                  # Punto de entrada
```

## Principios de Clean Architecture

### 1. **Domain Layer** (Dominio)

- Contiene la lógica de negocio pura
- No depende de ninguna otra capa
- Incluye:
  - **Interfaces**: Definiciones de tipos e interfaces TypeScript
  - **Constants**: Datos constantes del dominio (proyectos, habilidades, etc.)

### 2. **Application Layer** (Aplicación)

- Contiene la lógica de aplicación y casos de uso
- Depende solo del dominio
- Incluye:
  - **Services**: Servicios de aplicación (validación, transformación de datos, etc.)
  - **Hooks**: Custom hooks de React para lógica reutilizable
  - **Use Cases**: Casos de uso específicos de la aplicación

### 3. **Infrastructure Layer** (Infraestructura)

- Implementaciones concretas de servicios externos
- Depende del dominio y aplicación
- Incluye:
  - **API**: Clientes API, servicios HTTP
  - **Utils**: Utilidades y helpers

### 4. **Presentation Layer** (Presentación)

- Componentes UI y lógica de presentación
- Depende del dominio y aplicación
- Incluye:
  - **Components**: Componentes React organizados por tipo
  - **Pages**: Páginas de la aplicación
  - **Styles**: Estilos CSS

## Reglas de Dependencias

Las dependencias deben seguir esta dirección:

```
Presentation → Application → Domain
Infrastructure → Application → Domain
```

**Nunca:**

- Domain no debe depender de ninguna otra capa
- Application no debe depender de Presentation o Infrastructure directamente
- Presentation puede usar Application y Domain

## Ejemplos de Uso

### Importar desde Domain

```typescript
import { Project } from "@/domain/interfaces";
import { PROJECTS, SKILLS } from "@/domain/constants";
```

### Importar desde Application

```typescript
import { ValidationService } from "@/application/services/validation.service";
```

### Importar Componentes

```typescript
import { Header } from "@/presentation/components/layout";
import { Hero, About, Projects } from "@/presentation/components/sections";
```

## Beneficios

1. **Separación de responsabilidades**: Cada capa tiene una responsabilidad clara
2. **Testabilidad**: Fácil de testear cada capa de forma independiente
3. **Mantenibilidad**: Código organizado y fácil de mantener
4. **Escalabilidad**: Fácil agregar nuevas funcionalidades sin afectar otras partes
5. **Reutilización**: Lógica de negocio reutilizable en diferentes contextos
