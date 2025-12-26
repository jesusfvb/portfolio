import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import routes from "@/domain/routes/routes";
import "@/presentation/styles/index.css";
import { RouterProvider } from "react-router";

function App() {
  return <RouterProvider router={routes} />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
