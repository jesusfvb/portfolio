import { createBrowserRouter } from "react-router";
import App from "@/App";
import NotFound from "@/presentation/pages/NotFound";
import ProjectDetailPage from "@/presentation/pages/ProjectDetailPage";

const routes = createBrowserRouter([
    {
        path: "/",
        Component: App,
    },
    {
        path: "/projects/:id",
        Component: ProjectDetailPage,
    },
    {
        path: "*",
        Component: NotFound,
    },
]);

export default routes;