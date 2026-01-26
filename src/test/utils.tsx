import React, { type ReactElement } from "react";
import { render, type RenderOptions } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import userEvent from "@testing-library/user-event";

interface CustomRenderOptions extends Omit<RenderOptions, "wrapper"> {
  // Opciones personalizadas si se necesitan en el futuro
}

/**
 * Custom render function que envuelve componentes con proveedores necesarios
 * - HelmetProvider para react-helmet-async
 */
export function renderWithProviders(
  ui: ReactElement,
  options?: CustomRenderOptions,
) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <HelmetProvider>
        {children}
      </HelmetProvider>
    );
  }

  return render(ui, { wrapper: Wrapper, ...options });
}

// Re-exportar todo desde testing-library para conveniencia
// eslint-disable-next-line react-refresh/only-export-components
export * from "@testing-library/react";
export { userEvent };

// Exportar custom render como default
export { renderWithProviders as render };
