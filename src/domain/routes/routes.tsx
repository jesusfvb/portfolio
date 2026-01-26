import { ErrorPage } from "@/presentation/features/error-boundary";
import { HomePage } from "@/presentation/features/home";
import { NotFoundPage } from "@/presentation/features/not-found";
import { createBrowserRouter } from "react-router";
import { ROUTES } from "@/domain/constants/routes.constants";

const routes = createBrowserRouter([
    {
        path: ROUTES.HOME,
        Component: HomePage,
        ErrorBoundary: ErrorPage,
    },
    {
        path: ROUTES.NOT_FOUND,
        Component: NotFoundPage,
        ErrorBoundary: ErrorPage,
    },
]);

export default routes;
