interface ErrorPageProps {
  error: Error | null;
  onReset?: () => void;
}

const ErrorPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#1a1a1a] px-4 text-center">
      <div className="mb-8 max-w-2xl">
        <h1 className="mb-4 bg-linear-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-8xl font-bold text-transparent md:text-9xl">
          Oops!
        </h1>
        <h2 className="mb-4 text-3xl font-semibold text-white md:text-4xl">
          Algo salió mal
        </h2>
        <p className="mb-8 text-lg text-[#d0d0d0] md:text-xl">
          Lo sentimos, ocurrió un error inesperado. Por favor, intenta recargar
          la página o vuelve al inicio.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="/"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg border border-[rgba(255,255,255,0.2)] bg-transparent px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#6366f1] hover:bg-[#6366f1]/10"
          >
            <span className="relative z-10">Volver al inicio</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
