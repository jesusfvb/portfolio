import routes from "@/domain/routes/routes";
import "@/presentation/styles/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { Analytics } from "@vercel/analytics/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={routes} />;
    <Analytics />
  </StrictMode>,
);
