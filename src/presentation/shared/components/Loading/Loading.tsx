export const Loading = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-purple-200 border-t-purple-600"></div>
        <p className="text-lg text-purple-200">Cargando...</p>
      </div>
    </div>
  );
};
