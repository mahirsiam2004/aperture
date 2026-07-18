import { createBrowserRouter } from "react-router";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { MainLayout } from "./../layoutes/MainLayout";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import PrivateRoutes from "./PrivateRoutes";
import BookDetails from "../pages/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      ,
      {
        path: "/book/:id",
        element: (
          <PrivateRoutes>
            {" "}
            <BookDetails></BookDetails>{" "}
          </PrivateRoutes>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoutes>
            {" "}
            <Dashboard></Dashboard>{" "}
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
