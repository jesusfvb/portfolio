import { createBrowserRouter } from "react-router";
import App from "@/App";
import NotFound from "@/presentation/pages/NotFound";

const routes = createBrowserRouter([
    {
        path: "/",
        Component: App,
    },
    {
        path: "*",
        Component: NotFound,
    },
]);

export default routes;