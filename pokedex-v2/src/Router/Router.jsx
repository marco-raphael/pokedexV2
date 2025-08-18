import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import DetailPage from "../pages/detailPage/DetailPage";
import PokedexPage from "../pages/pokedexPage/PokedexPage";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/detail/:name", element: <DetailPage /> },
  { path: "/pokedex", element: <PokedexPage /> },
  { path: "*", element: <HomePage /> },
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
