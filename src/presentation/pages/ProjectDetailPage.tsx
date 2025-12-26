import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { PROJECTS } from "@/domain/constants";
import ProjectImageSection from "./project-detail/components/ProjectImageSection";
import ProjectContentSection from "./project-detail/components/ProjectContentSection";
import CloseButton from "./project-detail/components/CloseButton";
import NotFound from "./NotFound";

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
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
    return <NotFound />;
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

  const handleClose = () => {
    navigate("/projects");
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] py-8">
      <div className="container">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[#1a1a1a] shadow-2xl">
          <CloseButton onClose={handleClose} />

          <div className="flex min-h-[80vh] flex-col overflow-hidden md:flex-row">
            <div className="h-[50vh] w-full md:h-[80vh] md:w-[450px] md:shrink-0">
              <ProjectImageSection
                images={project.images}
                currentImageIndex={currentImageIndex}
                projectTitle={project.title}
                onPreviousImage={goToPreviousImage}
                onNextImage={goToNextImage}
                onSelectImage={handleSelectImage}
              />
            </div>
            <div className="flex-1">
              <ProjectContentSection project={project} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;

