# Manga Cómoda

> 📖 **English**: This README is also available in [English](./README_EN.md)

Aplicación móvil de React Native para leer y gestionar mangas, desarrollada con TypeScript y arquitectura limpia.

**Manga Cómoda** es una aplicación móvil multiplataforma diseñada para proporcionar una experiencia de lectura de mangas cómoda e intuitiva. La aplicación permite a los usuarios explorar, buscar, leer y gestionar sus mangas favoritos con una interfaz moderna y fácil de usar.

## Características Principales

- **Lectura Optimizada**: Sistema de lectura con zoom, gestos intuitivos y navegación fluida entre capítulos
- **Búsqueda Avanzada**: Búsqueda rápida y eficiente de mangas con resultados en tiempo real
- **Gestión de Favoritos**: Sistema completo para guardar y organizar tus mangas favoritos
- **Historial de Lectura**: Seguimiento automático del progreso de lectura y últimos capítulos leídos
- **Temas Personalizables**: Soporte para tema claro y oscuro para una experiencia de lectura cómoda
- **Arquitectura Escalable**: Código organizado con arquitectura limpia, facilitando el mantenimiento y la expansión

## 🚀 Tecnologías

- **React Native** 0.83.0
- **React** 19.2.3
- **TypeScript** 5.8.3
- **React Navigation** - Navegación entre pantallas
- **React Query (TanStack Query)** - Gestión de estado del servidor
- **NativeWind** - Estilos con Tailwind CSS
- **Axios** - Cliente HTTP
- **React Native Config** - Variables de entorno

## 📋 Requisitos Previos

- **Node.js** >= 20
- **pnpm** 10.26.0+ (gestor de paquetes)
- **React Native CLI**
- **Android Studio** (para Android)
- **Xcode** (para iOS, solo macOS)

## 🛠️ Instalación

1. **Clona el repositorio:**
   ```bash
   git clone <url-del-repositorio>
   cd app
   ```

2. **Instala las dependencias:**
   ```bash
   pnpm install
   ```

3. **Configura las variables de entorno:**
   ```bash
   # Copia el archivo de ejemplo
   cp .env.example .env
   
   # Edita .env con tus valores
   # Para desarrollo, también crea .env.dev
   cp .env.example .env.dev
   ```

   Para más detalles sobre la configuración de variables de entorno, consulta [README.env.md](./README.env.md).

4. **Instala dependencias nativas (iOS):**
   ```bash
   cd ios && pod install && cd ..
   ```

## 🏃 Ejecutar la Aplicación

### Desarrollo

**Iniciar Metro Bundler:**
```bash
pnpm start
```

**Ejecutar en Android (desarrollo):**
```bash
pnpm run android:dev
```

**Ejecutar en iOS (desarrollo):**
```bash
pnpm run ios:dev
```

### Producción

**Android:**
```bash
pnpm run android
```

**iOS:**
```bash
pnpm run ios
```

## 📜 Scripts Disponibles

- `pnpm start` - Inicia Metro bundler
- `pnpm run android` - Ejecuta en Android (producción)
- `pnpm run ios` - Ejecuta en iOS (producción)
- `pnpm run android:dev` - Ejecuta en Android (desarrollo con .env.dev)
- `pnpm run ios:dev` - Ejecuta en iOS (desarrollo con .env.dev)
- `pnpm test` - Ejecuta los tests
- `pnpm test:watch` - Ejecuta tests en modo watch
- `pnpm test:coverage` - Genera reporte de cobertura
- `pnpm lint` - Ejecuta ESLint
- `pnpm audit` - Verifica vulnerabilidades
- `pnpm audit:fix` - Intenta corregir vulnerabilidades automáticamente

## 📁 Estructura del Proyecto

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

## 🧪 Testing

El proyecto utiliza Jest y React Native Testing Library para los tests.

**Ejecutar todos los tests:**
```bash
pnpm test
```

**Ejecutar tests en modo watch:**
```bash
pnpm test:watch
```

**Generar reporte de cobertura:**
```bash
pnpm test:coverage
```

## 🔧 Configuración de Variables de Entorno

Este proyecto utiliza `react-native-config` para gestionar variables de entorno. 

- **`.env`** - Configuración de producción (por defecto)
- **`.env.dev`** - Configuración de desarrollo
- **`.env.example`** - Plantilla de ejemplo

Para más información, consulta [README.env.md](./README.env.md).

## 🏗️ Arquitectura

El proyecto sigue una arquitectura limpia organizada por features:

- **Data Layer**: APIs, modelos y almacenamiento local
- **Domain Layer**: Lógica de negocio y hooks personalizados
- **Presentation Layer**: Componentes React y vistas

Cada feature es independiente y contiene su propia lógica, facilitando el mantenimiento y escalabilidad.

## 📱 Características

- 📖 Lectura de mangas con zoom y gestos
- 🔍 Búsqueda de mangas
- ⭐ Sistema de favoritos
- 📚 Historial de lectura
- 🎨 Tema claro/oscuro
- 📱 Navegación intuitiva

## 🐛 Troubleshooting

### Problemas Comunes

**Metro bundler no inicia:**
```bash
pnpm start -- --reset-cache
```

**Errores en iOS después de instalar dependencias:**
```bash
cd ios && pod install && cd ..
```

**Errores en Android:**
```bash
cd android && ./gradlew clean && cd ..
```

**Variables de entorno no se cargan:**
- Verifica que el archivo `.env` existe en la raíz
- Reinicia Metro bundler con `--reset-cache`
- Para iOS, ejecuta `pod install` después de cambios

## 📚 Recursos

- [Documentación de React Native](https://reactnative.dev)
- [React Navigation](https://reactnavigation.org)
- [TanStack Query](https://tanstack.com/query)
- [NativeWind](https://www.nativewind.dev)

## 📄 Licencia

Este proyecto es privado.

---

**Nota**: Asegúrate de tener configuradas las variables de entorno antes de ejecutar la aplicación. Consulta [README.env.md](./README.env.md) para más detalles.
