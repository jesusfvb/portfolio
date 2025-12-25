Aplicación móvil completa desarrollada con **React Native** y **TypeScript** para la lectura y gestión de mangas, acompañada de un servidor backend robusto desarrollado con **Spring Boot** que automatiza el rastreo de nuevos capítulos y proporciona una API REST completa.

## Descripción General

**NeoManga** es una solución completa para la lectura de mangas que combina una experiencia móvil nativa con un backend inteligente que gestiona automáticamente la información de mangas desde múltiples fuentes.

## Características Principales

### Aplicación Móvil (React Native)

- **Lectura Optimizada**: Sistema de lectura con zoom, gestos intuitivos y navegación fluida entre capítulos
- **Búsqueda Avanzada**: Búsqueda rápida y eficiente de mangas con resultados en tiempo real
- **Gestión de Favoritos**: Sistema completo para guardar y organizar mangas favoritos
- **Historial de Lectura**: Seguimiento automático del progreso de lectura y últimos capítulos leídos
- **Temas Personalizables**: Soporte para tema claro y oscuro para una experiencia de lectura cómoda
- **Arquitectura Escalable**: Código organizado con arquitectura limpia, facilitando el mantenimiento y la expansión

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

La aplicación sigue una arquitectura limpia organizada por features:

```
src/
├── core/              # Configuración central
│   ├── axios/         # Configuración de Axios
│   ├── react_query/   # Configuración de React Query
│   └── routes/        # Navegación principal
├── features/          # Funcionalidades por dominio
│   ├── chapter/       # Módulo de capítulos
│   │   ├── data/      # APIs y modelos de datos
│   │   ├── domain/    # Lógica de negocio y hooks
│   │   └── presentation/ # Componentes y vistas
│   ├── manga/         # Módulo de mangas
│   ├── settings/      # Módulo de configuración
│   └── shared/        # Componentes y utilidades compartidas
└── App.tsx            # Componente raíz
```

#### Arquitectura en Capas

El proyecto implementa una arquitectura limpia con tres capas principales:

- **Data Layer**: APIs, modelos y almacenamiento local
- **Domain Layer**: Lógica de negocio y hooks personalizados
- **Presentation Layer**: Componentes React y vistas

Cada feature es independiente y contiene su propia lógica, facilitando el mantenimiento y escalabilidad.

#### Características Arquitectónicas

- **Arquitectura Limpia**: Separación clara de responsabilidades por capas (Data, Domain, Presentation)
- **Feature-Based Organization**: Organización por funcionalidades independientes y modulares
- **Gestión de Estado**: TanStack Query (React Query) para gestión de estado del servidor y caché
- **Navegación**: React Navigation con Stack y Tab Navigators, soporte para Deep Linking
- **Estilos**: NativeWind para estilos con Tailwind CSS en React Native
- **Configuración**: React Native Config para gestión de variables de entorno

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

- **React Native 0.83.0**: Framework para desarrollo móvil multiplataforma
- **React 19.2.3**: Biblioteca de interfaz de usuario
- **TypeScript 5.8.3**: Lenguaje de programación con tipado estático
- **React Navigation**: Navegación entre pantallas con tipado completo
- **TanStack Query (React Query)**: Gestión de estado del servidor y caché inteligente
- **NativeWind**: Estilos con Tailwind CSS para React Native
- **Axios**: Cliente HTTP para comunicación con la API
- **React Native Config**: Gestión de variables de entorno

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

- **Node.js** >= 20
- **pnpm** 10.26.0+ (gestor de paquetes)
- **React Native CLI**
- **Android Studio** (para Android)
- **Xcode** (para iOS, solo macOS)

## Configuración y Despliegue

### Servidor

1. Clona el repositorio del servidor
2. Configura MongoDB en `application.properties`
3. Ejecuta `mvn clean install`
4. Inicia la aplicación con `mvn spring-boot:run`

### Aplicación Móvil

1. Clona el repositorio de la aplicación
2. Instala las dependencias con `pnpm install`
3. Configura las variables de entorno (copia `.env.example` a `.env` y `.env.dev`)
4. Para iOS: instala dependencias nativas con `cd ios && pod install && cd ..`
5. Para desarrollo Android: ejecuta `pnpm run android:dev`
6. Para desarrollo iOS: ejecuta `pnpm run ios:dev`
7. Para producción: ejecuta `pnpm run android` o `pnpm run ios`

## Propósito del Proyecto

Este proyecto demuestra la integración de tecnologías modernas para crear una solución completa de lectura de mangas, combinando:

- Desarrollo móvil multiplataforma con React Native
- Backend robusto con Spring Boot
- Automatización mediante web scraping
- Almacenamiento eficiente con MongoDB
- Arquitectura escalable y mantenible

La aplicación permite a los usuarios gestionar su biblioteca de mangas, recibir notificaciones de nuevos capítulos automáticamente y disfrutar de una experiencia de lectura optimizada en dispositivos móviles.

