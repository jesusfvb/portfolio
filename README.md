# Portfolio - Jesús Francisco Vázquez Biltre

Personal portfolio built with React, TypeScript, and Tailwind CSS v4. This project showcases my skills, projects, and experience as a Full Stack developer.

---

### 🌍 Language / Idioma

This documentation is available in multiple languages:

- 🇪🇸 **[Español - Spanish Version](./README.es.md)**


## 🚀 Features

- ✨ **Modern Design**: Clean, professional interface with smooth animations
- 📱 **Fully Responsive**: Optimized for all devices
- 🎨 **Tailwind CSS v4**: Uses the latest Tailwind CSS features
- 🏗️ **Clean Architecture**: Clean, scalable architecture
- ⚡ **Optimized Performance**: Built with Vite for fast load times
- 🔒 **TypeScript**: Static typing for safety and maintainability
- 🎯 **SEO Friendly**: Semantic, optimized structure

## 🛠️ Tech Stack

### Frontend

- **React 19.2.0** - UI library
- **TypeScript 5.9.3** - Static typing
- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **Vite 7.2.2** - Build tool and dev server
- **React Icons 5.5.0** - Popular icon set

### Dev Tools

- **ESLint** - JavaScript/TypeScript linter
- **TypeScript ESLint** - TypeScript-specific rules
- **PostCSS** - CSS processor
- **Autoprefixer** - Browser compatibility

## 📁 Project Structure

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
│   │   │   ├── header/
│   │   │   │   └── Header.tsx
│   │   │   └── index.ts
│   │   ├── sections/         # Secciones del portafolio
│   │   │   ├── hero/
│   │   │   │   └── Hero.tsx
│   │   │   ├── about/
│   │   │   │   └── About.tsx
│   │   │   ├── projects/      # Sección de proyectos
│   │   │   │   ├── components/
│   │   │   │   │   ├── card/          # Componentes de tarjeta
│   │   │   │   │   │   ├── ProjectCard.tsx
│   │   │   │   │   │   ├── ProjectCardContent.tsx
│   │   │   │   │   │   ├── ProjectBanner.tsx
│   │   │   │   │   │   ├── ProjectOverlay.tsx
│   │   │   │   │   │   └── ProjectTechStack.tsx
│   │   │   │   │   ├── carousel/      # Componente del carrusel
│   │   │   │   │   │   └── ProjectsCarousel.tsx
│   │   │   │   │   └── detail/        # Componentes del modal de detalle
│   │   │   │   │       ├── ProjectDetail.tsx
│   │   │   │   │       ├── ProjectImageSection.tsx
│   │   │   │   │       ├── ProjectContentSection.tsx
│   │   │   │   │       ├── ProjectHeader.tsx
│   │   │   │   │       ├── ProjectTechnologies.tsx
│   │   │   │   │       ├── ProjectLinks.tsx
│   │   │   │   │       ├── ProjectImageNavigation.tsx
│   │   │   │   │       ├── ProjectImageIndicators.tsx
│   │   │   │   │       ├── ProjectImageCounter.tsx
│   │   │   │   │       └── CloseButton.tsx
│   │   │   │   ├── hooks/             # Hooks personalizados
│   │   │   │   │   ├── useCarouselAutoPlay.ts
│   │   │   │   │   ├── useCarouselNavigation.ts
│   │   │   │   │   ├── useCarouselScroll.ts
│   │   │   │   │   ├── useItemsPerView.ts
│   │   │   │   │   └── index.ts
│   │   │   │   └── Projects.tsx
│   │   │   ├── skills/
│   │   │   │   └── Skills.tsx
│   │   │   ├── contact/
│   │   │   │   └── Contact.tsx
│   │   │   └── index.ts
│   │   └── shared/           # Componentes compartidos
│   │       ├── icons/
│   │       └── ContactButton.tsx
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

For more details about the architecture, see [ARCHITECTURE.md](./ARCHITECTURE.md).

## 🚀 Installation

### Prerequisites

- **Node.js** >= 18.0.0
- **pnpm** (recommended) or npm/yarn

### Installation Steps

1. **Clone the repository**

```bash
git clone <url-del-repositorio>
cd porfolio_jesusfvb
```

2. **Install dependencies**

```bash
pnpm install
# o
npm install
```

3. **Start the development server**

```bash
pnpm dev
# o
npm run dev
```

4. **Open in the browser**

```
http://localhost:5173
```

## 📜 Available Scripts

| Script         | Description                                                       |
| -------------- | ----------------------------------------------------------------- |
| `pnpm dev`     | Starts the dev server with Hot Module Replacement (HMR)           |
| `pnpm build`   | Builds the project for production in the `dist/` folder           |
| `pnpm preview` | Previews the production build locally                             |
| `pnpm lint`    | Runs ESLint to check the code                                     |

## 🎨 Portfolio Sections

### 🏠 Hero

Main section with a personal intro, profile photo, and call-to-action buttons.

### 👤 About Me

Personal information, experience, and highlighted stats.

### 💼 Projects

Project gallery with tech stack and links. Includes:
- **Interactive carousel**: Smooth navigation between projects
- **Project cards**: Preview with image, title, description, and tech stack
- **Detail modal**: Full view with images, extended description, tech, and links
- **Image navigation**: For projects with multiple screenshots

### 🛠️ Skills

List of technologies and technical skills with icons.

### 📧 Contact

Contact form with validation and social links.

## 🎯 Customization

### Update Personal Information

1. **Profile photo**: Replace `src/assets/1000001843.JPG` with your own image
2. **Personal data**: Edit components in `src/presentation/components/sections/`
3. **Projects**:
  - Update `src/domain/constants/projects.constants.ts` to add or modify projects
  - Customize card components in `src/presentation/components/sections/projects/components/card/`
  - Modify the detail modal in `src/presentation/components/sections/projects/components/detail/`
4. **Skills**: Update `src/domain/constants/skills.constants.tsx`
5. **Contact info**: Edit `src/domain/constants/contact.constants.tsx`

### Change Colors and Styles

Main colors are defined in Tailwind CSS classes. The primary gradient colors are:

- `#6366f1` (Indigo)
- `#8b5cf6` (Purple)

You can change them by searching for these references in components.

## 🏗️ Architecture

This project follows **Clean Architecture** principles:

- **Domain Layer**: Pure business logic, no external dependencies
- **Application Layer**: Use cases and application services
- **Presentation Layer**: React components and UI

Dependencies flow in a single direction:

```
Presentation → Application → Domain
```

### Component Organization

Components are organized modularly by functionality:

- **`card/`**: Project card components (banner, content, overlay, etc.)
- **`carousel/`**: Projects carousel component
- **`detail/`**: Detail modal components (images, content, navigation, etc.)
- **`hooks/`**: Custom hooks for carousel logic

This organization improves maintainability, reusability, and scalability.

For more information, see [ARCHITECTURE.md](./ARCHITECTURE.md).

## 🔧 Configuration

### Path Aliases

The project uses aliases configured in `vite.config.ts` and `tsconfig.app.json`:

- `@/*` → `./src/*`
- `@/domain/*` → `./src/domain/*`
- `@/application/*` → `./src/application/*`
- `@/presentation/*` → `./src/presentation/*`

Example usage:

```typescript
import { Project } from "@/domain/interfaces";
import Header from "@/presentation/components/layout/Header";
```

### Image Types

The project includes type declarations for image files in `src/vite-env.d.ts`:

- `.jpg`, `.JPG`
- `.jpeg`
- `.png`
- `.gif`
- `.svg`
- `.webp`

## 📦 Production Build

```bash
pnpm build
```

Esto generará una carpeta `dist/` con los archivos optimizados listos para desplegar.

### Preview Build

```bash
pnpm preview
```

## 🚢 Deployment

### GitHub Pages

The project can be deployed to GitHub Pages using GitHub Actions. The workflow runs automatically when pushing to the `master` branch.

#### Initial Setup

1. **Enable GitHub Pages in your repository**:
  - Go to `Settings` → `Pages` in your GitHub repository
  - In `Source`, select `GitHub Actions`
  - Save the changes

2. **Push to the master branch**:

   ```bash
   git push origin master
   ```

3. **The GitHub Action runs automatically**:
  - Go to the `Actions` tab in your repository
  - You will see the workflow running
  - Once completed, your site will be available at:
     - `https://tu-usuario.github.io/nombre-repositorio/`

### Other Platforms

The project can also be deployed to:

- **Vercel**: Connect your repo and deploy automatically
- **Netlify**: Drag the `dist/` folder or connect the repo
- **Cloudflare Pages**: Connect the repo and configure the build command

### Environment Variables

If you need to configure environment variables, create a `.env` file in the root:

```env
VITE_API_URL=https://api.ejemplo.com
VITE_BASE_PATH=/
```

Variables must start with `VITE_` to be accessible in code.

## 🔍 Expanding ESLint Configuration

If you are building a production application, it is recommended to update the configuration to enable type-aware linting rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
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
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific rules.

## 📝 License

This project is private and owned by Jesús Francisco Vázquez Biltre.

## 👤 Author

**Jesús Francisco Vázquez Biltre**

- Full Stack Developer
- Specialized in React, TypeScript, and modern web technologies

## 🙏 Acknowledgments

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)


---

⭐ If you like this project, feel free to give it a star!
