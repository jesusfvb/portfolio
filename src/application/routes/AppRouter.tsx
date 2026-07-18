import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "@/presentation/features/home";
import { ErrorPage } from "@/presentation/features/error-boundary";
import { ProjectDetailPage } from "@/presentation/features/project-detail";
import { ROUTES } from "./paths";

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTES.home} element={<HomePage />} />
      <Route path={`${ROUTES.projects}/:slug`} element={<ProjectDetailPage />} />
      <Route path={ROUTES.projects} element={<HomePage />} />
      <Route path={ROUTES.education} element={<HomePage />} />
      <Route path={ROUTES.certifications} element={<HomePage />} />
      <Route path={ROUTES.contact} element={<HomePage />} />
      <Route path="/404" element={<ErrorPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
);
