# NeoManga - Aplicación de Lectura de Mangas

Aplicación móvil completa desarrollada con **React Native** y **TypeScript** para la lectura y gestión de mangas, acompañada de un servidor backend robusto desarrollado con **Spring Boot** que automatiza el rastreo de nuevos capítulos y proporciona una API REST completa.

## Descripción General

**NeoManga** (anteriormente Manga Cómoda) es una solución completa para la lectura de mangas que combina una experiencia móvil nativa con un backend inteligente que gestiona automáticamente la información de mangas desde múltiples fuentes.

## Características Principales

### Aplicación Móvil (React Native)

- **Interfaz nativa**: Aplicación desarrollada con React Native para Android e iOS
- **TypeScript**: Código type-safe para mayor robustez y mantenibilidad
- **Experiencia de usuario optimizada**: Interfaz diseñada para una lectura cómoda y fluida
- **Sincronización en tiempo real**: Conexión con el backend para obtener actualizaciones automáticas

### Servidor Backend (Spring Boot)

- **Rastreo automático de nuevos capítulos**: El sistema verifica periódicamente si hay nuevos capítulos disponibles para los mangas registrados
- **Web scraping inteligente**: Extrae información de mangas desde sitios web especializados (actualmente soporta LeerCapitulo)
- **API REST completa**: Endpoints bien estructurados para buscar mangas, obtener capítulos y acceder a imágenes
- **Búsqueda inteligente**: Busca mangas tanto en la base de datos local como en sitios web externos
- **Almacenamiento persistente**: Utiliza MongoDB para almacenar información de mangas, capítulos e imágenes de forma eficiente
- **Procesamiento asíncrono**: Utiliza ejecución asíncrona para tareas de scraping y actualización, mejorando el rendimiento

## Arquitectura

### Frontend (React Native)

La aplicación móvil está desarrollada con React Native, permitiendo una experiencia nativa tanto en Android como en iOS desde un único código base. La arquitectura sigue una estructura modular basada en features y capas.

#### Estructura del Proyecto

La aplicación está organizada en módulos claramente definidos:

```
src/
├── components/          # Componentes reutilizables (common, manga, chapter)
├── screens/            # Pantallas principales (Home, Search, MangaDetail, ChapterReader, Library)
├── navigation/         # Configuración de navegación con React Navigation
├── services/           # Servicios API, almacenamiento local y caché
├── hooks/              # Hooks personalizados (useManga, useChapter, useSearch)
├── store/              # Gestión de estado global (Redux/Zustand)
├── types/              # Definiciones TypeScript (manga, chapter, api)
├── utils/              # Utilidades, formatters y validators
└── theme/              # Configuración de temas, colores y tipografía
```

#### Características Arquitectónicas

- **Patrones de Diseño**: Component-Based Architecture, Custom Hooks, Service Layer y Repository Pattern
- **Gestión de Estado**: Combinación de estado local, Context API y estado global para mangas, capítulos y preferencias
- **Navegación**: React Navigation con Stack y Tab Navigators, soporte para Deep Linking y tipado completo
- **Comunicación API**: Cliente HTTP configurado con interceptores, caché inteligente y manejo robusto de errores
- **Optimizaciones**: Lazy loading, memoización, virtualización de listas, caché de imágenes y code splitting

### Backend (Spring Boot)

El servidor sigue una arquitectura modular y bien organizada:

```
src/main/java/com/manga/server/
├── core/                    # Configuraciones y componentes principales
│   ├── browser/            # Gestión de navegadores (Playwright)
│   ├── config/             # Configuraciones de Spring
│   └── filtres/            # Filtros de aplicación
├── features/
│   ├── chapter/            # Gestión de capítulos e imágenes
│   ├── manga/              # Gestión de mangas
│   └── scrapper/           # Servicios de web scraping
└── ServerApplication.java  # Clase principal
```

## Tecnologías Utilizadas

### Frontend

- **React Native**: Framework para desarrollo móvil multiplataforma
- **TypeScript**: Lenguaje de programación con tipado estático

### Backend

- **Spring Boot 3.5.4**: Framework principal para el desarrollo del servidor
- **Java 21**: Lenguaje de programación con las últimas características
- **MongoDB**: Base de datos NoSQL para almacenamiento flexible
- **Playwright**: Para automatización de navegadores y scraping avanzado
- **JSoup**: Para parsing de HTML y extracción de datos
- **MapStruct**: Para mapeo automático de objetos DTO
- **Lombok**: Para reducir código boilerplate y mejorar la legibilidad

### Herramientas de Pruebas

- **JUnit**: Para pruebas unitarias del backend
- **Jest**: Framework de pruebas para JavaScript/TypeScript
- **React Native Testing Library**: Para pruebas de componentes y hooks de React Native

## API REST

El servidor proporciona los siguientes endpoints principales:

- `GET /` - Obtiene la lista de mangas con nuevos capítulos
- `GET /search?query={busqueda}` - Busca mangas por nombre
- `GET /ids?ids={id1,id2,...}` - Obtiene mangas por sus IDs
- `GET /chapter?mangaId={id}` - Obtiene los capítulos de un manga
- `GET /chapter/img?chapterId={id}` - Obtiene las imágenes de un capítulo

## Funcionalidades Técnicas

### Web Scraping

El sistema utiliza técnicas avanzadas de web scraping con Playwright para automatizar la navegación y extracción de datos desde sitios web de mangas. Esto permite:

- Navegación automática de páginas web
- Extracción estructurada de información
- Manejo de contenido dinámico cargado con JavaScript
- Gestión eficiente de recursos del navegador

### Procesamiento Asíncrono

Las tareas de scraping y actualización se ejecutan de forma asíncrona, permitiendo:

- Mejor rendimiento del servidor
- No bloquear las peticiones de la API
- Procesamiento en segundo plano de actualizaciones
- Escalabilidad mejorada

### Base de Datos

MongoDB se utiliza para almacenar:

- Información de mangas (títulos, descripciones, portadas)
- Capítulos con sus metadatos
- Imágenes de capítulos
- Relaciones entre entidades

## Requisitos del Sistema

### Backend

- Java 21 o superior
- Maven 3.6 o superior
- MongoDB (en ejecución)

### Frontend

- Node.js y npm/yarn
- React Native CLI
- Android Studio (para Android) o Xcode (para iOS)

## Configuración y Despliegue

### Servidor

1. Clona el repositorio del servidor
2. Configura MongoDB en `application.properties`
3. Ejecuta `mvn clean install`
4. Inicia la aplicación con `mvn spring-boot:run`

### Aplicación Móvil

1. Clona el repositorio de la aplicación
2. Instala las dependencias con `npm install` o `yarn install`
3. Para Android: ejecuta `npm run android` o `yarn android`
4. Para iOS: instala CocoaPods con `bundle exec pod install` y luego ejecuta `npm run ios` o `yarn ios`

## Propósito del Proyecto

Este proyecto demuestra la integración de tecnologías modernas para crear una solución completa de lectura de mangas, combinando:

- Desarrollo móvil multiplataforma con React Native
- Backend robusto con Spring Boot
- Automatización mediante web scraping
- Almacenamiento eficiente con MongoDB
- Arquitectura escalable y mantenible

La aplicación permite a los usuarios gestionar su biblioteca de mangas, recibir notificaciones de nuevos capítulos automáticamente y disfrutar de una experiencia de lectura optimizada en dispositivos móviles.

