import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ROUTE_SECTIONS, ROUTES } from "../routes/paths";

export const useScrollToSectionOnRoute = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const sectionId = ROUTE_SECTIONS[pathname];

    if (sectionId) {
      const timer = window.setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 0);

      return () => window.clearTimeout(timer);
    }

    if (pathname === ROUTES.home) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);
};
