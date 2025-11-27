export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-4 text-center font-sans dark:bg-black">
      <h1 className="text-5xl font-bold text-zinc-900 dark:text-white">
        404
      </h1>

      <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
        Aradığın sayfa bulunamadı.
      </p>

      <a
        href="/"
        className="mt-6 inline-flex items-center rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
      >
        Ana Sayfaya Dön
      </a>
    </div>
  );
}