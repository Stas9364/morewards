import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-center space-y-4">
      <h1 className="text-3xl font-bold">404</h1>
      <p className="text-gray-600">Страница не найдена.</p>
      <Link to="/" className="text-blue-600 hover:underline">
        На главную
      </Link>
    </div>
  );
}

export default NotFound;
