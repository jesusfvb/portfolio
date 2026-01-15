import routes from "@/domain/routes/routes.tsx";
import "@/presentation/styles/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { Analytics } from "@vercel/analytics/react";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={routes} />
      <Analytics />
    </HelmetProvider>
  </StrictMode>,
);
