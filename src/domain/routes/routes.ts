import { createBrowserRouter } from "react-router";
import HomePage from "@/presentation/pages/home/HomePage";
import NotFoundPage from "@/presentation/pages/not-found/NotFoundPage";
import ProjectDetailPage from "@/presentation/pages/project-detail/ProjectDetailPage";

const routes = createBrowserRouter([
    {
        path: "/",
        Component: HomePage,
    },
    {
        path: "/projects/:id",
        Component: ProjectDetailPage,
    },
    {
        path: "*",
        Component: NotFoundPage,
    },
]);

export default routes;