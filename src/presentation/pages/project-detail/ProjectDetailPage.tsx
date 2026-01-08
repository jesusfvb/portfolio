import { PROJECTS } from "@/domain/constants/projects.constants";
import { Header } from "@/presentation/components/header";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import NotFoundPage from "../not-found/NotFoundPage";
import ProjectContentSection from "./components/ProjectContentSection";
import ProjectImageSection from "./components/ProjectImageSection";

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const project = PROJECTS.find((p) => p.id === Number(id));

  useEffect(() => {
    if (project && project.images && project.images.length > 0) {
      setCurrentImageIndex(0);
    }
  }, [project]);

  useEffect(() => {
    // Scroll al inicio cuando se carga la página
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <NotFoundPage />;
  }

  const goToPreviousImage = () => {
    if (project.images && project.images.length > 0) {
      setCurrentImageIndex((prev) =>
        prev > 0 ? prev - 1 : project.images!.length - 1,
      );
    }
  };

  const goToNextImage = () => {
    if (project.images && project.images.length > 0) {
      setCurrentImageIndex((prev) =>
        prev < project.images!.length - 1 ? prev + 1 : 0,
      );
    }
  };

  const handleSelectImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const hasImages = project.images && project.images.length > 0;

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <Header />
      <div className={`px-4 md:px-6 ${hasImages ? "pt-20 md:pt-24" : "pt-20"}`}>
        {hasImages ? (
          <div className="flex min-h-[calc(100vh-5rem)] flex-col md:min-h-[calc(100vh-6rem)] md:flex-row">
            <div className="h-[60vh] pb-6 md:mr-5 md:h-[calc(100vh-6rem)] md:w-[340px] md:shrink-0 md:overflow-hidden lg:mr-7 lg:w-[450px]">
              <ProjectImageSection
                images={project.images}
                currentImageIndex={currentImageIndex}
                projectTitle={project.title}
                onPreviousImage={goToPreviousImage}
                onNextImage={goToNextImage}
                onSelectImage={handleSelectImage}
              />
            </div>
            <div className="flex-1 md:h-[calc(100vh-6rem)] md:overflow-y-auto">
              <ProjectContentSection project={project} hasImages={true} />
            </div>
          </div>
        ) : (
          <div className="flex min-h-[calc(100vh-5rem)] items-center justify-center md:min-h-[calc(100vh-6rem)]">
            <div className="w-full max-w-4xl px-6 pb-8 md:px-8 md:pb-10 lg:px-10 lg:pb-12">
              <ProjectContentSection project={project} hasImages={false} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailPage;
