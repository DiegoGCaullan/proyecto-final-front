import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import LoginForm from "../pages/LoginForm";
import RegisterForm from "../pages/RegisterForm";
import Admin from "../pages/Admin";
import Error404 from "../pages/Error404";
import LayoutPublic from "../layout/LayoutPublic";
import { getEncuestasFetch } from "../api/getEncuestasFetch";
import Encuesta from "../pages/Encuesta";
import { getEncuestaFetch } from "../api/getEncuestaFetch";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: getEncuestasFetch,
      },
      {
        path: "/:id",
        element: <Encuesta />,
        loader: getEncuestaFetch,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/register",
        element: <RegisterForm />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
    ],
  },
]);
