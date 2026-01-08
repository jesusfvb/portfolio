import { ErrorPage } from "@/presentation/pages/error-boundary";
import HomePage from "@/presentation/pages/home/HomePage";
import NotFoundPage from "@/presentation/pages/not-found/NotFoundPage";
import ProjectDetailPage from "@/presentation/pages/project-detail/ProjectDetailPage";
import { createBrowserRouter } from "react-router";
import { ROUTES } from "@/domain/constants/routes.constants";


const routes = createBrowserRouter([
    {
        path: ROUTES.HOME,
        Component: HomePage,
        ErrorBoundary: ErrorPage,
    },
    {
        path: ROUTES.PROJECT_DETAIL,
        Component: ProjectDetailPage,
        ErrorBoundary: ErrorPage,
    },
    {
        path: ROUTES.NOT_FOUND,
        Component: NotFoundPage,
        ErrorBoundary: ErrorPage,
    },
]);

export default routes;