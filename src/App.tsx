import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex items-center justify-center p-6">
      <div className="w-full max-w-xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            React + Tailwind
          </h1>
          <p className="text-gray-600 mt-2">
            Проект создан на Vite, стили — Tailwind CSS.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Счетчик</span>
            <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
              {count}
            </span>
          </div>

          <button
            className="mt-4 w-full rounded-lg bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={() => setCount((n) => n + 1)}
          >
            Увеличить
          </button>

          <p className="mt-4 text-xs text-gray-500">
            Отредактируйте <code className="font-mono">src/App.tsx</code> и
            сохраните, чтобы проверить HMR.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
