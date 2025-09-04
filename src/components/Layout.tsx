import { Link, NavLink, Outlet } from "react-router-dom";
import { Sparkles } from "lucide-react";

function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <Link
            to="/"
            className="text-sm font-semibold tracking-tight inline-flex items-center gap-2"
          >
            <Sparkles className="h-4 w-4 text-blue-600" />
            morewards
          </Link>
          <nav className="flex items-center gap-4 text-sm">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `px-2 py-1 rounded-md ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:text-gray-900"
                }`
              }
            >
              Главная
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-2 py-1 rounded-md ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:text-gray-900"
                }`
              }
            >
              О проекте
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
