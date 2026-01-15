import { PROJECTS } from "@/domain/constants/projects.constants";
import { useValidateProjectId } from "@/domain/services/route-validation.service";
import { PageHead, SkipLinks } from "@/presentation/shared/components";
import { Header } from "@/presentation/shared/layout/Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  ProjectLayoutWithImages,
  ProjectLayoutWithoutImages,
} from "./components";

interface RouteError {
  type: "invalid-id" | "project-not-found";
  message: string;
}

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Validar ID de la ruta
  const { isValid, projectId, error: idError } = useValidateProjectId(id);
  
  // Buscar proyecto solo si el ID es válido
  const project =
    isValid && projectId ? PROJECTS.find((p) => p.id === projectId) : undefined;

  // Determinar tipo de error
  const routeError: RouteError | null = !isValid
    ? {
        type: "invalid-id",
        message: idError || "El ID del proyecto es inválido",
      }
    : !project
      ? {
          type: "project-not-found",
          message: `El proyecto con ID ${projectId} no existe. Por favor, verifica el URL e intenta de nuevo.`,
        }
      : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (project?.images?.length) {
      setTimeout(() => setCurrentImageIndex(0), 0);
    }
  }, [project]);

  // Mostrar página de error si hay problemas de validación
  if (routeError) {
    return (
      <div className="min-h-screen bg-[#1a1a1a]">
        <SkipLinks />
        <Header />
        <main id="main-content" className="flex min-h-screen items-center justify-center px-4">
          <div className="max-w-md text-center">
            <h1 className="mb-4 text-4xl font-bold text-white">
              {routeError.type === "invalid-id"
                ? "URL Inválida"
                : "Proyecto no encontrado"}
            </h1>
            <p className="mb-8 text-[#d0d0d0]">{routeError.message}</p>
            <a
              href="/"
              className="inline-flex items-center gap-2 overflow-hidden rounded-lg bg-linear-to-r from-[#6366f1] to-[#8b5cf6] px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(99,102,241,0.4)] hover:scale-105"
            >
              <span style={{ color: '#ffffff' }}>Volver al inicio</span>
              <span style={{ color: '#ffffff' }}>←</span>
            </a>
          </div>
        </main>
      </div>
    );
  }

  // Si pasó todas las validaciones, continuar normalmente
  // En este punto, project debe estar definido
  const hasImages = Boolean(project?.images?.length);
  const imageHandlers = {
    goToPrevious: () => {
      if (project?.images?.length) {
        setCurrentImageIndex((prev) =>
          prev > 0 ? prev - 1 : project.images!.length - 1,
        );
      }
    },
    goToNext: () => {
      if (project?.images?.length) {
        setCurrentImageIndex((prev) =>
          prev < project.images!.length - 1 ? prev + 1 : 0,
        );
      }
    },
    selectImage: (index: number) => {
      setCurrentImageIndex(index);
    },
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <SkipLinks />
      <PageHead
        title={`${project!.title} - Jesús Francisco Portfolio`}
        description={project!.description.short}
        image={project!.banner}
        url={`https://www.jesufvb.dev/projects/${project!.id}`}
        type="article"
      />
      <Header />
      <div className="px-4 pt-20 md:px-6 md:pt-24">
        {hasImages ? (
          <ProjectLayoutWithImages
            project={project!}
            currentImageIndex={currentImageIndex}
            imageHandlers={imageHandlers}
          />
        ) : (
          <ProjectLayoutWithoutImages project={project!} />
        )}
      </div>
    </div>
  );
};

export default ProjectDetailPage;
