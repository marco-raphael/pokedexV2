import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import PokedexPage from "../Pages/PokedexPage";
import DetailPage from "../Pages/DetailPage";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "*", element: <HomePage /> },
  { path: "/pokedex", element: <PokedexPage /> },
  { path: "/detail/:name", element: <DetailPage /> },
];

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
    </Router>
  );
}
