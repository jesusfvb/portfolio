# Portfolio Personal - Jesús Francisco Vázquez Biltre

Portfolio web profesional desarrollado con tecnologías modernas que presenta mis habilidades, proyectos y experiencia como Desarrollador Full Stack.

## 🚀 Características Principales

### ✨ Diseño Moderno y Profesional
- Interfaz limpia y elegante con animaciones suaves
- Experiencia de usuario optimizada y fluida
- Diseño visual atractivo con gradientes y efectos modernos
- Tipografía profesional con JetBrains Mono

### 📱 Totalmente Responsive
- Optimizado para todos los dispositivos (móvil, tablet, desktop)
- Diseño adaptativo que se ajusta a cualquier tamaño de pantalla
- Navegación intuitiva en todos los dispositivos
- Experiencia consistente en diferentes resoluciones

### 🎨 Tecnologías de Vanguardia
- **React 19.2.0** - Biblioteca de UI con las últimas características
- **TypeScript 5.9.3** - Tipado estático para mayor seguridad
- **Tailwind CSS 4.1.17** - Framework CSS utility-first con las últimas características
- **Vite 7.2.2** - Build tool para rendimiento óptimo
- **React Icons 5.5.0** - Iconografía consistente y moderna

### 🏗️ Arquitectura Limpia y Escalable
- **Clean Architecture** con separación de capas (Domain, Application, Presentation)
- Código modular y bien organizado
- Componentes reutilizables y mantenibles
- Hooks personalizados para lógica compartida
- Organización por funcionalidad (card, carousel, detail)

### ⚡ Rendimiento Optimizado
- Construido con Vite para tiempos de carga rápidos
- Optimización de imágenes y recursos estáticos
- Carga diferida de componentes cuando es necesario
- Experiencia de usuario fluida y sin interrupciones

### 🔒 TypeScript para Seguridad
- Tipado estático para mayor seguridad en el código
- Detección temprana de errores en tiempo de desarrollo
- Mejor mantenibilidad y documentación del código
- Autocompletado mejorado en el IDE

## 📋 Secciones del Portfolio

### 🏠 Hero
Sección principal con presentación personal, foto de perfil y botones de acción interactivos. Incluye:
- Título destacado con gradiente
- Información personal
- Botones de navegación con animaciones
- Lista de tecnologías principales

### 💼 Proyectos
Galería interactiva de proyectos realizados con características avanzadas:
- **Carrusel navegable**: Navegación fluida entre proyectos con auto-play
- **Tarjetas de proyecto**: Vista previa con imagen, título, descripción y tecnologías
- **Modal de detalle**: Vista completa con:
  - Galería de imágenes con navegación
  - Descripción extendida del proyecto
  - Lista completa de tecnologías utilizadas
  - Enlaces a repositorios (Frontend/Backend) y demo
- **Navegación de imágenes**: Para proyectos con múltiples capturas de pantalla

### 🛠️ Habilidades
Lista completa de tecnologías y habilidades técnicas con:
- Iconos representativos de cada tecnología
- Categorización por áreas (Frontend, Backend, etc.)
- Modal interactivo para explorar todas las habilidades
- Enlaces a documentación oficial

### 📧 Contacto
Sección de contacto con:
- Enlaces a redes sociales profesionales
- Botón para copiar email al portapapeles
- Botón para abrir cliente de email
- Botones interactivos con animaciones

### 🎓 Educación
Información sobre formación académica y certificaciones.

## 🏗️ Arquitectura del Proyecto

### Organización de Componentes
Los componentes están organizados de forma modular:

- **`card/`**: Componentes relacionados con las tarjetas de proyecto
  - ProjectCard, ProjectCardContent, ProjectBanner, ProjectOverlay, ProjectTechStack
  
- **`carousel/`**: Componente del carrusel de proyectos
  - ProjectsCarousel con navegación y auto-play
  
- **`detail/`**: Componentes del modal de detalle
  - ProjectDetail, ProjectImageSection, ProjectContentSection
  - ProjectHeader, ProjectTechnologies, ProjectLinks
  - ProjectImageNavigation, ProjectImageIndicators, ProjectImageCounter
  
- **`hooks/`**: Hooks personalizados
  - useCarouselAutoPlay, useCarouselNavigation
  - useCarouselScroll, useItemsPerView

### Clean Architecture
El proyecto sigue los principios de Clean Architecture:
- **Domain Layer**: Lógica de negocio pura, interfaces y constantes
- **Application Layer**: Servicios de aplicación y validaciones
- **Presentation Layer**: Componentes React y UI

Las dependencias fluyen en una sola dirección: Presentation → Application → Domain

## 🎯 Características Técnicas

### Path Aliases
Configuración de aliases para importaciones limpias:
- `@/*` → `./src/*`
- `@/domain/*` → `./src/domain/*`
- `@/application/*` → `./src/application/*`
- `@/presentation/*` → `./src/presentation/*`

### SEO Optimizado
- Estructura semántica HTML5
- Meta tags optimizados
- Contenido accesible
- Mejores prácticas de SEO

### Herramientas de Desarrollo
- **ESLint** - Linter para código JavaScript/TypeScript
- **TypeScript ESLint** - Reglas específicas para TypeScript
- **PostCSS** - Procesador de CSS
- **Autoprefixer** - Compatibilidad de navegadores

## 🚀 Despliegue

El proyecto puede desplegarse en múltiples plataformas:
- **GitHub Pages** - Con GitHub Actions
- **Vercel** - Despliegue automático desde repositorio
- **Netlify** - Arrastra y suelta o conexión con repositorio
- **Cloudflare Pages** - Con configuración de build

## 📝 Propósito

Este portfolio demuestra:
- Experiencia en desarrollo web moderno
- Capacidad para crear interfaces atractivas y funcionales
- Compromiso con las mejores prácticas de desarrollo
- Habilidad para organizar código de forma escalable
- Conocimiento de arquitecturas limpias y mantenibles

El proyecto sirve como muestra de mis habilidades técnicas y como punto de contacto profesional para oportunidades de colaboración y empleo.

