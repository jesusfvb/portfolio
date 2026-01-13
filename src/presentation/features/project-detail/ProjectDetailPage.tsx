import { PROJECTS } from "@/domain/constants/projects.constants";
import { Header } from "@/presentation/shared/layout/Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NotFoundPage } from "@/presentation/features/not-found";
import {
  ProjectLayoutWithImages,
  ProjectLayoutWithoutImages,
} from "./components";

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const project = PROJECTS.find((p) => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (project?.images?.length) {
      setTimeout(() => setCurrentImageIndex(0), 0);
    }
  }, [project]);

  if (!project) {
    return <NotFoundPage />;
  }

  const hasImages = Boolean(project.images?.length);
  const imageHandlers = {
    goToPrevious: () => {
      if (project.images?.length) {
        setCurrentImageIndex((prev) =>
          prev > 0 ? prev - 1 : project.images!.length - 1,
        );
      }
    },
    goToNext: () => {
      if (project.images?.length) {
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
      <Header />
      <div className="px-4 pt-20 md:px-6 md:pt-24">
        {hasImages ? (
          <ProjectLayoutWithImages
            project={project}
            currentImageIndex={currentImageIndex}
            imageHandlers={imageHandlers}
          />
        ) : (
          <ProjectLayoutWithoutImages project={project} />
        )}
      </div>
    </div>
  );
};

export default ProjectDetailPage;
