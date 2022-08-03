import { Navigate, useRoutes } from "react-router-dom";
import App from "../App";
import GameDetail from "../pages/GameDetail";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";

export default function Routes() {
  let routes = useRoutes([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "detail/:gameId",
          element: <GameDetail />,
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "signup",
      element: <Register />,
    },
    {
      path: "404-page-not-found",
      element: <NotFound />,
    },
    {
      path: "*",
      element: <Navigate to="/404-page-not-found" replace />,
    },
  ]);

  return routes;
}
