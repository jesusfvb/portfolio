import { PROJECTS } from "@/domain/constants/projects.constants";
import { Header } from "@/presentation/components/header";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import NotFoundPage from "../not-found/NotFoundPage";
import ProjectContentSection from "./components/ProjectContentSection";
import ProjectImageSection from "./components/ProjectImageSection";
import ProjectTitle from "./components/ProjectTitle";

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const project = PROJECTS.find((p) => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (project?.images?.length) {
      setCurrentImageIndex(0);
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
          <ProjectDetailWithImages
            project={project}
            currentImageIndex={currentImageIndex}
            imageHandlers={imageHandlers}
          />
        ) : (
          <ProjectDetailWithoutImages project={project} />
        )}
      </div>
    </div>
  );
};

interface ProjectDetailWithImagesProps {
  project: NonNullable<ReturnType<typeof PROJECTS.find>>;
  currentImageIndex: number;
  imageHandlers: {
    goToPrevious: () => void;
    goToNext: () => void;
    selectImage: (index: number) => void;
  };
}

const ProjectDetailWithImages = ({
  project,
  currentImageIndex,
  imageHandlers,
}: ProjectDetailWithImagesProps) => {
  return (
    <div className="flex min-h-[calc(100vh-5rem)] flex-col md:min-h-[calc(100vh-6rem)] md:flex-row">
      <div className="sticky top-20 z-10 mb-4 bg-[#1a1a1a] pb-4 md:hidden">
        <ProjectTitle title={project.title} size="sm" />
      </div>

      <div className="h-[60vh] shrink-0 pb-6 md:mr-5 md:h-[calc(100vh-6rem)] md:w-[340px] md:overflow-hidden lg:mr-7 lg:w-[450px]">
        <ProjectImageSection
          images={project.images}
          currentImageIndex={currentImageIndex}
          projectTitle={project.title}
          onPreviousImage={imageHandlers.goToPrevious}
          onNextImage={imageHandlers.goToNext}
          onSelectImage={imageHandlers.selectImage}
        />
      </div>

      <div className="flex-1 md:h-[calc(100vh-6rem)] md:overflow-y-auto">
        <ProjectContentSection project={project} hasImages={true} />
      </div>
    </div>
  );
};

interface ProjectDetailWithoutImagesProps {
  project: NonNullable<ReturnType<typeof PROJECTS.find>>;
}

const ProjectDetailWithoutImages = ({
  project,
}: ProjectDetailWithoutImagesProps) => {
  return (
    <div className="flex min-h-[calc(100vh-5rem)] items-center justify-center md:min-h-[calc(100vh-6rem)]">
      <div className="w-full max-w-4xl px-6 pb-8 md:px-8 md:pb-10 lg:px-10 lg:pb-12">
        <ProjectContentSection project={project} hasImages={false} />
      </div>
    </div>
  );
};

export default ProjectDetailPage;
