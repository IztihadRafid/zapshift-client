import AuthLayout from "@/layouts/AuthLayout";
import RootLayout from "@/layouts/RootLayout";
import Login from "@/pages/Auth/Login/Login";
import Register from "@/pages/Auth/Register/Register";
import Coverage from "@/pages/Coverage/Coverage";
import Home from "@/pages/Home/Home/Home";
import { createBrowserRouter } from "react-router";
import PrivateRoute from "./PrivateRoute";
import Rider from "@/pages/Rider/Rider";

export const router = createBrowserRouter([
  {

    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "/rider",
        element: <PrivateRoute><Rider></Rider></PrivateRoute>
      },
      {
        path: "/coverage",
        Component: Coverage
      }
    ]
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "/login",
        Component: Login
      },
      {
        path: "/register",
        Component: Register
      }
    ]
  }
]);