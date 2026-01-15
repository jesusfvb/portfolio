import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest'
import { screen, waitFor } from '@testing-library/react'
import { Routes, Route } from 'react-router'
import { render } from '@/test/utils'
import ProjectDetailPage from './ProjectDetailPage'
import { PROJECTS } from '@/domain/constants/projects.constants'

// Mock del módulo de carga de descripciones
vi.mock('@/domain/services/description-loader.service', () => ({
  loadMarkdownDescription: vi.fn(),
}))

// Mock del componente NotFoundPage
vi.mock('@/presentation/features/not-found', () => ({
  NotFoundPage: () => <div data-testid="not-found-page">Page Not Found</div>,
}))

// Mock de los componentes de layout
interface MockProjectLayoutWithImagesProps {
  project: { title: string }
  currentImageIndex: number
}

interface MockProjectLayoutWithoutImagesProps {
  project: { title: string }
}

vi.mock('./components', () => ({
  ProjectLayoutWithImages: ({ project, currentImageIndex }: MockProjectLayoutWithImagesProps) => (
    <div data-testid="layout-with-images">
      <h1>{project.title}</h1>
      <div data-testid="current-image-index">{currentImageIndex}</div>
    </div>
  ),
  ProjectLayoutWithoutImages: ({ project }: MockProjectLayoutWithoutImagesProps) => (
    <div data-testid="layout-without-images">
      <h1>{project.title}</h1>
    </div>
  ),
}))

// Mock de Header
vi.mock('@/presentation/shared/layout/Header', () => ({
  Header: () => <header data-testid="header">Header</header>,
}))

// Mock de PageHead
interface MockPageHeadProps {
  title: string
}

vi.mock('@/presentation/shared/components/PageHead', () => ({
  PageHead: ({ title }: MockPageHeadProps) => <div data-testid="page-head">{title}</div>,
}))

// Helper para renderizar con Router
function renderProjectPage(initialRoute: string) {
  return render(
    <Routes>
      <Route path="/projects/:id" element={<ProjectDetailPage />} />
    </Routes>,
    { initialRoute }
  )
}

describe('ProjectDetailPage', () => {
  beforeEach(() => {
    window.scrollTo = vi.fn()
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  describe('Renderizado básico', () => {
    test('debería renderizar el proyecto con imágenes correctamente', () => {
      const projectWithImages = PROJECTS[0]
      renderProjectPage(`/projects/${projectWithImages.id}`)

      expect(screen.getByTestId('header')).toBeInTheDocument()
      expect(screen.getByTestId('layout-with-images')).toBeInTheDocument()
      expect(screen.getByText(projectWithImages.title)).toBeInTheDocument()
    })

    test('debería renderizar el proyecto sin imágenes correctamente', () => {
      const projectWithoutImages = PROJECTS[1]
      renderProjectPage(`/projects/${projectWithoutImages.id}`)

      expect(screen.getByTestId('header')).toBeInTheDocument()
      expect(screen.getByTestId('layout-without-images')).toBeInTheDocument()
      expect(screen.getByText(projectWithoutImages.title)).toBeInTheDocument()
    })

    test('debería renderizar PageHead con la información correcta del proyecto', () => {
      const project = PROJECTS[0]
      renderProjectPage(`/projects/${project.id}`)

      const pageHead = screen.getByTestId('page-head')
      expect(pageHead).toHaveTextContent(`${project.title} - Jesús Francisco Portfolio`)
    })
  })

  describe('Manejo de errores y casos límite', () => {
    test('debería mostrar NotFoundPage si el proyecto no existe', () => {
      renderProjectPage('/projects/999')

      expect(screen.getByTestId('not-found-page')).toBeInTheDocument()
      expect(screen.getByText('Page Not Found')).toBeInTheDocument()
    })

    test('debería mostrar NotFoundPage si el ID no es un número válido', () => {
      renderProjectPage('/projects/invalid-id')

      expect(screen.getByTestId('not-found-page')).toBeInTheDocument()
    })
  })

  describe('Navegación y scroll', () => {
    test('debería hacer scroll al top cuando el componente se monta', () => {
      renderProjectPage('/projects/1')

      expect(window.scrollTo).toHaveBeenCalledWith(0, 0)
    })

    test('debería hacer scroll al top cuando cambia el ID del proyecto', async () => {
      const { unmount } = renderProjectPage('/projects/1')

      expect(window.scrollTo).toHaveBeenCalledTimes(1)

      unmount()

      renderProjectPage('/projects/2')

      await waitFor(() => {
        expect(window.scrollTo).toHaveBeenCalledTimes(2)
      })
    })
  })

  describe('Manejo de imágenes', () => {
    test('debería inicializar el índice de imagen en 0', () => {
      const projectWithImages = PROJECTS[0]
      renderProjectPage(`/projects/${projectWithImages.id}`)

      const currentIndex = screen.getByTestId('current-image-index')
      expect(currentIndex).toHaveTextContent('0')
    })

    test('debería resetear el índice de imagen cuando cambia el proyecto', async () => {
      const { unmount } = renderProjectPage('/projects/1')

      let currentIndex = screen.getByTestId('current-image-index')
      expect(currentIndex).toHaveTextContent('0')

      unmount()

      renderProjectPage('/projects/1')

      await waitFor(() => {
        currentIndex = screen.getByTestId('current-image-index')
        expect(currentIndex).toHaveTextContent('0')
      })
    })

    test('debería usar ProjectLayoutWithoutImages si el proyecto no tiene imágenes', () => {
      const projectWithoutImages = PROJECTS[1]
      renderProjectPage(`/projects/${projectWithoutImages.id}`)

      expect(screen.getByTestId('layout-without-images')).toBeInTheDocument()
      expect(screen.queryByTestId('layout-with-images')).not.toBeInTheDocument()
    })

    test('debería usar ProjectLayoutWithImages si el proyecto tiene imágenes', () => {
      const projectWithImages = PROJECTS[0]
      renderProjectPage(`/projects/${projectWithImages.id}`)

      expect(screen.getByTestId('layout-with-images')).toBeInTheDocument()
      expect(screen.queryByTestId('layout-without-images')).not.toBeInTheDocument()
    })
  })

  describe('Estructura del DOM', () => {
    test('debería tener la clase de fondo correcta', () => {
      renderProjectPage('/projects/1')

      const container = screen.getByTestId('header').parentElement
      expect(container).toHaveClass('min-h-screen', 'bg-[#1a1a1a]')
    })

    test('debería tener el padding correcto en el contenedor', () => {
      renderProjectPage('/projects/1')

      const layoutContainer = screen.getByTestId('layout-with-images').parentElement
      expect(layoutContainer).toHaveClass('px-4', 'pt-20', 'md:px-6', 'md:pt-24')
    })
  })

  describe('Validación de datos del proyecto', () => {
    test('debería encontrar el proyecto por ID numérico correctamente', () => {
      const project = PROJECTS[0]
      renderProjectPage(`/projects/${project.id}`)

      expect(screen.getByText(project.title)).toBeInTheDocument()
    })

    test('debería manejar conversión de string a número en el ID', () => {
      const project = PROJECTS[0]
      renderProjectPage(`/projects/${project.id}`)

      expect(screen.getByText(project.title)).toBeInTheDocument()
      expect(screen.queryByTestId('not-found-page')).not.toBeInTheDocument()
    })
  })

  describe('Integración con Router', () => {
    test('debería leer correctamente el parámetro id de la URL', () => {
      renderProjectPage('/projects/1')

      expect(screen.getByText(PROJECTS[0].title)).toBeInTheDocument()
    })

    test('debería manejar diferentes IDs de la URL', () => {
      const { unmount } = renderProjectPage('/projects/1')

      expect(screen.getByText(PROJECTS[0].title)).toBeInTheDocument()

      unmount()

      renderProjectPage('/projects/2')
      
      expect(screen.queryByTestId('not-found-page')).not.toBeInTheDocument()
    })
  })

  describe('Edge cases', () => {
    test('debería manejar proyecto con array de imágenes vacío', () => {
      const originalProject = { ...PROJECTS[1] }
      const modifiedProject = { ...originalProject, images: [] }
      
      vi.spyOn(PROJECTS, 'find').mockReturnValue(modifiedProject)

      renderProjectPage(`/projects/${modifiedProject.id}`)

      expect(screen.getByTestId('layout-without-images')).toBeInTheDocument()

      vi.restoreAllMocks()
    })

    test('debería manejar proyecto con imágenes undefined', () => {
      const projectWithoutImages = PROJECTS[1]
      renderProjectPage(`/projects/${projectWithoutImages.id}`)

      expect(screen.getByTestId('layout-without-images')).toBeInTheDocument()
    })
  })

  describe('Accesibilidad', () => {
    test('debería tener una estructura semántica correcta', () => {
      renderProjectPage('/projects/1')

      expect(screen.getByTestId('header')).toBeInTheDocument()
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    })
  })
})
