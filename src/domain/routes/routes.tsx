import { lazy, Suspense } from "react";
import { ErrorPage } from "@/presentation/features/error-boundary";
import { HomePage } from "@/presentation/features/home";
import { NotFoundPage } from "@/presentation/features/not-found";
import { Loading } from "@/presentation/shared";
import { createBrowserRouter } from "react-router";
import { ROUTES } from "@/domain/constants/routes.constants";

// Lazy load pages for code splitting
const ProjectDetailPage = lazy(() => import("@/presentation/features/project-detail").then(module => ({ default: module.ProjectDetailPage })));

const routes = createBrowserRouter([
    {
        path: ROUTES.HOME,
        Component: HomePage,
        ErrorBoundary: ErrorPage,
    },
    {
        path: ROUTES.PROJECT_DETAIL,
        element: (
            <Suspense fallback={<Loading />}>
                <ProjectDetailPage />
            </Suspense>
        ),
        ErrorBoundary: ErrorPage,
    },
    {
        path: ROUTES.NOT_FOUND,
        Component: NotFoundPage,
        ErrorBoundary: ErrorPage,
    },
]);

export default routes;
