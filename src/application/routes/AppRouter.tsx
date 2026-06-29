import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "@/presentation/features/home";
import { ErrorPage } from "@/presentation/features/error-boundary";
import { ROUTES } from "./paths";

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTES.home} element={<HomePage />} />
      <Route path={ROUTES.projects} element={<HomePage />} />
      <Route path={ROUTES.education} element={<HomePage />} />
      <Route path={ROUTES.contact} element={<HomePage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
);
