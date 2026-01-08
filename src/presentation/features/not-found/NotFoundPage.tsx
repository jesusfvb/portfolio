import { Link } from "react-router";
import { ROUTES } from "@/domain/constants/routes.constants";

const NotFoundPage = () => {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
      <div className="mb-8">
        <h1 className="mb-4 bg-linear-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-8xl font-bold text-transparent md:text-9xl">
          404
        </h1>
        <h2 className="mb-4 text-3xl font-semibold text-white md:text-4xl">
          Página no encontrada
        </h2>
        <p className="mb-8 text-lg text-[#d0d0d0] md:text-xl">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
      </div>
      <Link
        to={ROUTES.HOME}
        className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-linear-to-r from-[#6366f1] to-[#8b5cf6] px-8 py-4 text-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(99,102,241,0.4)] hover:scale-105"
      >
        <span className="relative z-10 text-white" style={{ color: '#ffffff' }}>Volver al inicio</span>
        <div className="absolute inset-0 bg-linear-to-r from-[#8b5cf6] to-[#ec4899] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </Link>
    </div>
  );
};

export default NotFoundPage;

