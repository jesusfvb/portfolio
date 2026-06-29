import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getProjectBySlug } from "@/domain/constants/projects.utils";
import { PROJECT_CODE_SNIPPETS } from "@/domain/constants/project-details/auto-contact.snippets";
import { ROUTES } from "@/application/routes";
import { Header } from "@/presentation/shared/layout/Header";
import { PageHead } from "@/presentation/shared/components";
import ProjectTechStack from "@/presentation/features/home/components/ProjectsSection/components/card/ProjectTechStack";

const screenshotAltKeys = ["settings", "logs"] as const;

const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();
  const project = getProjectBySlug(slug);
  const snippets = slug ? PROJECT_CODE_SNIPPETS[slug] : undefined;
  const highlights = t(`projects.items.${project?.i18nKey}.highlights`, {
    returnObjects: true,
    defaultValue: [],
  }) as string[];

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [i18n.language, slug]);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const title = t(project.title);
  const summary = t(`projects.items.${project.i18nKey}.summary`);
  const description = t(project.description);

  return (
    <div className="min-h-screen w-full bg-[#121212]">
      <PageHead
        title={`${title} | Jesús Francisco Vázquez Biltre`}
        description={summary}
        image={`https://www.jesufvb.dev${project.banner}`}
        url={`https://www.jesufvb.dev/projects/${project.slug}`}
        type="article"
      />
      <Header />
      <main
        id="main-content"
        className="container pb-24 pt-[calc(var(--header-height)+1.5rem)]"
      >
        <Link
          to={ROUTES.projects}
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#a0a0a0] no-underline transition-colors hover:text-white"
        >
          <span aria-hidden>←</span>
          {t("projectDetail.backToProjects")}
        </Link>

        <div className="mx-auto max-w-5xl">
          <div className="mb-10 flex flex-col items-center gap-6 text-center md:flex-row md:items-start md:text-left">
            {project.banner && (
              <div className="mt-6 flex h-32 w-32 shrink-0 items-center justify-center rounded-3xl border border-white/10 bg-[#0a0a0a] p-4">
                <img
                  src={project.banner}
                  alt={title}
                  className="h-full w-full object-contain"
                  loading="eager"
                />
              </div>
            )}
            <div className="flex-1">
              <h1 className="mb-3 bg-linear-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text pt-4 text-4xl leading-tight font-bold text-transparent md:text-5xl">
                {title}
              </h1>
              <p className="text-lg leading-relaxed text-[#d0d0d0]">{summary}</p>
              <div className="mt-4 flex justify-center md:justify-start">
                <ProjectTechStack technologies={project.technologies} />
              </div>
            </div>
          </div>

          <section className="mb-12">
            <p className="text-base leading-relaxed text-gray-400">{description}</p>
          </section>

          {project.screenshots && project.screenshots.length > 0 && (
            <section className="mb-12">
              <h2 className="mb-6 text-2xl font-bold text-white">
                {t("projectDetail.screenshots")}
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {project.screenshots.map((screenshot, index) => (
                  <figure
                    key={screenshot}
                    className="overflow-hidden rounded-xl border border-gray-800/50 bg-[#0a0a0a]"
                  >
                    <img
                      src={screenshot}
                      alt={t(
                        `projects.items.${project.i18nKey}.screenshots.${screenshotAltKeys[index] ?? "settings"}`,
                      )}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </figure>
                ))}
              </div>
            </section>
          )}

          {highlights.length > 0 && (
            <section className="mb-12">
              <h2 className="mb-6 text-2xl font-bold text-white">
                {t("projectDetail.highlights")}
              </h2>
              <ul className="space-y-3">
                {highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-base leading-relaxed text-gray-400"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6366f1]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {snippets && snippets.length > 0 && (
            <section>
              <h2 className="mb-6 text-2xl font-bold text-white">
                {t("projectDetail.codeSnippets")}
              </h2>
              <div className="space-y-6">
                {snippets.map((snippet) => (
                  <article
                    key={snippet.id}
                    className="overflow-hidden rounded-xl border border-gray-800/50 bg-[#0a0a0a]"
                  >
                    <h3 className="border-b border-gray-800/50 px-4 py-3 text-sm font-semibold text-white">
                      {t(
                        `projects.items.${project.i18nKey}.codeSnippets.${snippet.id}`,
                      )}
                    </h3>
                    <pre className="overflow-x-auto p-4 text-sm leading-relaxed text-[#d0d0d0]">
                      <code>{snippet.code}</code>
                    </pre>
                  </article>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-[#d0d0d0]">
        <div className="mx-auto max-w-[1200px] px-8 md:px-4">
          <p>
            &copy; {new Date().getFullYear()} Jesús Francisco Vázquez Biltre.{" "}
            {t("footer.copyright")}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetailPage;
