import { ErrorPage } from "@/presentation/pages/error-boundary";
import HomePage from "@/presentation/pages/home/HomePage";
import NotFoundPage from "@/presentation/pages/not-found/NotFoundPage";
import ProjectDetailPage from "@/presentation/pages/project-detail/ProjectDetailPage";
import { createBrowserRouter } from "react-router";


const routes = createBrowserRouter([
    {
        path: "/",
        Component: HomePage,
        ErrorBoundary: ErrorPage,
    },
    {
        path: "/projects/:id",
        Component: ProjectDetailPage,
        ErrorBoundary: ErrorPage,
    },
    {
        path: "*",
        Component: NotFoundPage,
        ErrorBoundary: ErrorPage,
    },
]);

export default routes;