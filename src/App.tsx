import "@/presentation/styles/index.css";
import "@/application/i18n";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import { HelmetProvider } from "react-helmet-async";
import { HomePage } from "@/presentation/features/home";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <HomePage />
      <Analytics />
    </HelmetProvider>
  </StrictMode>,
);
