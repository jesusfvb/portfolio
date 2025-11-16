# Portfolio - Jesús Francisco Vázquez Biltre

Portfolio personal desarrollado con React, TypeScript y Tailwind CSS v4. Este proyecto muestra mis habilidades, proyectos y experiencia como desarrollador Full Stack.

## 🚀 Características

- ✨ **Diseño Moderno**: Interfaz limpia y profesional con animaciones suaves
- 📱 **Totalmente Responsive**: Optimizado para todos los dispositivos
- 🎨 **Tailwind CSS v4**: Utilizando las últimas características de Tailwind CSS
- 🏗️ **Clean Architecture**: Arquitectura limpia y escalable
- ⚡ **Rendimiento Optimizado**: Construido con Vite para tiempos de carga rápidos
- 🔒 **TypeScript**: Tipado estático para mayor seguridad y mantenibilidad
- 🎯 **SEO Friendly**: Estructura semántica y optimizada

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 19.2.0** - Biblioteca de UI
- **TypeScript 5.9.3** - Tipado estático
- **Tailwind CSS 4.1.17** - Framework de CSS utility-first
- **Vite 7.2.2** - Build tool y dev server
- **React Icons 5.5.0** - Iconos populares

### Herramientas de Desarrollo
- **ESLint** - Linter para código JavaScript/TypeScript
- **TypeScript ESLint** - Reglas específicas para TypeScript
- **PostCSS** - Procesador de CSS
- **Autoprefixer** - Compatibilidad de navegadores

## 📁 Estructura del Proyecto

```
src/
├── domain/                    # Capa de Dominio
│   ├── interfaces/           # Interfaces TypeScript
│   │   ├── project.interface.ts
│   │   ├── skill.interface.ts
│   │   ├── contact.interface.ts
│   │   └── index.ts
│   └── constants/            # Constantes del dominio
│       ├── projects.constants.ts
│       ├── skills.constants.tsx
│       ├── contact.constants.tsx
│       └── index.ts
│
├── application/               # Capa de Aplicación
│   └── services/             # Servicios de aplicación
│       └── validation.service.ts
│
├── presentation/              # Capa de Presentación
│   ├── components/           # Componentes React
│   │   ├── layout/           # Componentes de layout
│   │   │   ├── Header.tsx
│   │   │   └── index.ts
│   │   └── sections/         # Secciones del portafolio
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Projects.tsx
│   │       ├── Skills.tsx
│   │       ├── Contact.tsx
│   │       └── index.ts
│   └── styles/               # Estilos globales
│       └── index.css
│
├── assets/                    # Recursos estáticos
│   ├── 1000001843.JPG        # Foto de perfil
│   └── react.svg
│
├── App.tsx                   # Componente principal
├── main.tsx                  # Punto de entrada
└── vite-env.d.ts            # Declaraciones de tipos
```

Para más detalles sobre la arquitectura, consulta [ARCHITECTURE.md](./ARCHITECTURE.md).

## 🚀 Instalación

### Prerrequisitos

- **Node.js** >= 18.0.0
- **pnpm** (recomendado) o npm/yarn

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone <url-del-repositorio>
cd porfolio_jesusfvb
```

2. **Instalar dependencias**
```bash
pnpm install
# o
npm install
```

3. **Iniciar el servidor de desarrollo**
```bash
pnpm dev
# o
npm run dev
```

4. **Abrir en el navegador**
```
http://localhost:5173
```

## 📜 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `pnpm dev` | Inicia el servidor de desarrollo con Hot Module Replacement (HMR) |
| `pnpm build` | Compila el proyecto para producción en la carpeta `dist/` |
| `pnpm preview` | Previsualiza la build de producción localmente |
| `pnpm lint` | Ejecuta ESLint para verificar el código |

## 🎨 Secciones del Portafolio

### 🏠 Hero
Sección principal con presentación personal, foto de perfil y botones de acción.

### 👤 Sobre Mí
Información personal, experiencia y estadísticas destacadas.

### 💼 Proyectos
Galería de proyectos realizados con tecnologías utilizadas y enlaces.

### 🛠️ Habilidades
Lista de tecnologías y habilidades técnicas con iconos.

### 📧 Contacto
Formulario de contacto con validación y enlaces a redes sociales.

## 🎯 Personalización

### Modificar Información Personal

1. **Foto de perfil**: Reemplaza `src/assets/1000001843.JPG` con tu propia imagen
2. **Datos personales**: Edita los componentes en `src/presentation/components/sections/`
3. **Proyectos**: Actualiza `src/domain/constants/projects.constants.ts`
4. **Habilidades**: Modifica `src/domain/constants/skills.constants.tsx`
5. **Información de contacto**: Edita `src/domain/constants/contact.constants.tsx`

### Cambiar Colores y Estilos

Los colores principales están definidos en las clases de Tailwind CSS. Los colores del gradiente principal son:
- `#6366f1` (Indigo)
- `#8b5cf6` (Purple)

Puedes cambiarlos buscando estas referencias en los componentes.

## 🏗️ Arquitectura

Este proyecto sigue los principios de **Clean Architecture**:

- **Domain Layer**: Lógica de negocio pura, sin dependencias externas
- **Application Layer**: Casos de uso y servicios de aplicación
- **Presentation Layer**: Componentes React y UI

Las dependencias fluyen en una sola dirección:
```
Presentation → Application → Domain
```

Para más información, consulta [ARCHITECTURE.md](./ARCHITECTURE.md).

## 🔧 Configuración

### Path Aliases

El proyecto utiliza aliases configurados en `vite.config.ts` y `tsconfig.app.json`:

- `@/*` → `./src/*`
- `@/domain/*` → `./src/domain/*`
- `@/application/*` → `./src/application/*`
- `@/presentation/*` → `./src/presentation/*`

Ejemplo de uso:
```typescript
import { Project } from '@/domain/interfaces';
import Header from '@/presentation/components/layout/Header';
```

### Tipos de Imágenes

El proyecto incluye declaraciones de tipos para archivos de imagen en `src/vite-env.d.ts`:
- `.jpg`, `.JPG`
- `.jpeg`
- `.png`
- `.gif`
- `.svg`
- `.webp`

## 📦 Build para Producción

```bash
pnpm build
```

Esto generará una carpeta `dist/` con los archivos optimizados listos para desplegar.

### Previsualizar Build

```bash
pnpm preview
```

## 🚢 Despliegue

### GitHub Pages

El proyecto puede desplegarse en GitHub Pages usando GitHub Actions. El workflow se ejecuta automáticamente al hacer push a la rama `master`.

#### Configuración Inicial

1. **Habilita GitHub Pages en tu repositorio**:
   - Ve a `Settings` → `Pages` en tu repositorio de GitHub
   - En `Source`, selecciona `GitHub Actions`
   - Guarda los cambios

2. **Haz push a la rama master**:
   ```bash
   git push origin master
   ```

3. **La GitHub Action se ejecutará automáticamente**:
   - Ve a la pestaña `Actions` en tu repositorio
   - Verás el workflow ejecutándose
   - Una vez completado, tu sitio estará disponible en:
     - `https://tu-usuario.github.io/nombre-repositorio/`

### Otras Plataformas

El proyecto también puede desplegarse en:

- **Vercel**: Conecta tu repositorio y despliega automáticamente
- **Netlify**: Arrastra la carpeta `dist/` o conecta el repositorio
- **Cloudflare Pages**: Conecta el repositorio y configura el build command

### Variables de Entorno

Si necesitas configurar variables de entorno, crea un archivo `.env` en la raíz:

```env
VITE_API_URL=https://api.ejemplo.com
VITE_BASE_PATH=/
```

Las variables deben comenzar con `VITE_` para ser accesibles en el código.

## 🔍 Expandiendo la Configuración de ESLint

Si estás desarrollando una aplicación de producción, se recomienda actualizar la configuración para habilitar reglas de linting con tipos:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Reemplaza tseslint.configs.recommended con esto
      tseslint.configs.recommendedTypeChecked,
      // Alternativamente, usa esto para reglas más estrictas
      tseslint.configs.strictTypeChecked,
      // Opcionalmente, agrega esto para reglas estilísticas
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

También puedes instalar [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) y [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) para reglas específicas de React.

## 📝 Licencia

Este proyecto es privado y propiedad de Jesús Francisco Vázquez Biltre.

## 👤 Autor

**Jesús Francisco Vázquez Biltre**
- Desarrollador Full Stack
- Especializado en React, TypeScript y tecnologías web modernas

## 🙏 Agradecimientos

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

⭐ Si te gusta este proyecto, ¡no dudes en darle una estrella!
