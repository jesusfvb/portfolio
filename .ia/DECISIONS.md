# Decisiones Arquitectónicas

Este documento registra las decisiones arquitectónicas y técnicas importantes tomadas en el proyecto.

## ADR-001: Clean Architecture

**Fecha**: Inicio del proyecto  
**Estado**: Aceptado

Se adoptó Clean Architecture para organizar el código en capas bien definidas (Domain, Application, Presentation). Esto facilita el mantenimiento, testing y escalabilidad.

**Consecuencias**:
- Código más organizado y mantenible
- Separación clara de responsabilidades
- Mayor facilidad para testing
- Curva de aprendizaje inicial para nuevos desarrolladores

## ADR-002: Tailwind CSS v4

**Fecha**: Inicio del proyecto  
**Estado**: Aceptado

Se eligió Tailwind CSS v4 como framework de estilos principal por su enfoque utility-first, buena integración con React y soporte moderno.

**Consecuencias**:
- Desarrollo rápido de UI
- No necesita archivos CSS separados
- Bundle size optimizado con purging
- Aprendizaje de clases utilitarias requerido

## ADR-003: React Router para Navegación

**Fecha**: Migración a multi-página  
**Estado**: Aceptado

Se implementó React Router para manejar rutas en lugar de scroll-based navigation. Esto permite URLs directas a proyectos y mejor SEO.

**Consecuencias**:
- Mejor experiencia de usuario con URLs compartibles
- Mejor SEO
- Navegación más robusta
- Dependencia adicional en el proyecto

## ADR-004: Markdown para Descripciones de Proyectos

**Fecha**: Implementación de descripciones dinámicas  
**Estado**: Aceptado

Las descripciones de proyectos se almacenan como archivos Markdown en lugar de strings en código. Esto permite edición más fácil y mejor formato.

**Consecuencias**:
- Edición más fácil sin tocar código
- Mejor formateo de texto
- Carga asíncrona de contenido
- Necesidad de servicio de carga y renderizado

## ADR-005: Organización de Páginas en Carpetas

**Fecha**: Reorganización de estructura  
**Estado**: Aceptado

Cada página tiene su propia carpeta con componentes relacionados (`home/`, `project-detail/`, `not-found/`). Esto mejora la organización y mantenibilidad.

**Consecuencias**:
- Mejor organización del código
- Componentes relacionados agrupados
- Estructura más escalable
- Navegación de carpetas más profunda

## ADR-006: Zustand para Estado Global

**Fecha**: Implementación de estado compartido  
**Estado**: Aceptado

Se usa Zustand para estado global compartido (ej: `contactButtonStore`) por su simplicidad y menor boilerplate comparado con Redux.

**Consecuencias**:
- Sintaxis más simple
- Menor bundle size
- Fácil integración con React
- Menos herramientas de debugging que Redux

## ADR-007: Grid Layout en lugar de Carousel

**Fecha**: Refactorización de proyectos  
**Estado**: Aceptado

Se reemplazó el carousel de proyectos por un grid de tarjetas. Esto mejora la UX permitiendo ver múltiples proyectos a la vez.

**Consecuencias**:
- Mejor visibilidad de proyectos
- Navegación más simple
- Código más simple (sin lógica de carousel)
- Menos interactividad visual

## ADR-008: Consolidación de App.tsx

**Fecha**: Refactorización de entry point  
**Estado**: Aceptado

Se movió la lógica de `main.tsx` (createRoot, StrictMode) a `App.tsx`, eliminando `main.tsx`. Esto centraliza el entry point de la aplicación.

**Consecuencias**:
- Estructura más simple
- Un solo punto de entrada
- Mejor para testing
- Cambio en convención estándar de React

## ADR-009: Path Aliases con @

**Fecha**: Configuración inicial  
**Estado**: Aceptado

Se configuraron path aliases (`@/domain/*`, `@/presentation/*`) para simplificar imports y evitar rutas relativas complejas.

**Consecuencias**:
- Imports más limpios
- Refactoring más fácil
- Configuración en tsconfig y vite
- Dependencia de configuración correcta

## ADR-010: Tailwind Typography para Markdown

**Fecha**: Estilizado de markdown  
**Estado**: Aceptado

Se usa Tailwind Typography plugin para estilizar contenido markdown, con variantes personalizadas para tema oscuro.

**Consecuencias**:
- Estilos consistentes para markdown
- Fácil personalización
- Integración con Tailwind
- Dependencia adicional del plugin

## ADR-011: Vite como Build Tool

**Fecha**: Inicio del proyecto  
**Estado**: Aceptado

Se eligió Vite sobre Create React App u otros bundlers por su velocidad de desarrollo y optimizaciones modernas.

**Consecuencias**:
- HMR muy rápido
- Build optimizado
- Configuración más simple
- Ecosistema más nuevo

## ADR-012: TypeScript Estricto

**Fecha**: Configuración inicial  
**Estado**: Aceptado

Se usa TypeScript con configuración estricta para mayor seguridad de tipos y mejor developer experience.

**Consecuencias**:
- Menos errores en runtime
- Mejor autocompletado
- Más tiempo de desarrollo inicial
- Mejor mantenibilidad a largo plazo

