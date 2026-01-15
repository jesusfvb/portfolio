import React, { type ReactElement } from "react";
import { render, type RenderOptions } from "@testing-library/react";
import { MemoryRouter, type MemoryRouterProps } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import userEvent from "@testing-library/user-event";

interface CustomRenderOptions extends Omit<RenderOptions, "wrapper"> {
  initialRoute?: string;
  routerProps?: Omit<MemoryRouterProps, "initialEntries" | "children">;
}

/**
 * Custom render function que envuelve componentes con proveedores necesarios
 * - MemoryRouter para React Router
 * - HelmetProvider para react-helmet-async
 */
export function renderWithProviders(
  ui: ReactElement,
  {
    initialRoute = "/",
    routerProps = {},
    ...renderOptions
  }: CustomRenderOptions = {},
) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <HelmetProvider>
        <MemoryRouter initialEntries={[initialRoute]} {...routerProps}>
          {children}
        </MemoryRouter>
      </HelmetProvider>
    );
  }

  return render(ui, { wrapper: Wrapper, ...renderOptions });
}

// Re-exportar todo desde testing-library para conveniencia
// eslint-disable-next-line react-refresh/only-export-components
export * from "@testing-library/react";
export { userEvent };

// Exportar custom render como default
export { renderWithProviders as render };
