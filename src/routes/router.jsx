import AuthLayout from "@/layouts/AuthLayout";
import RootLayout from "@/layouts/RootLayout";
import Login from "@/pages/Auth/Login/Login";
import Register from "@/pages/Auth/Register/Register";
import Coverage from "@/pages/Coverage/Coverage";
import Home from "@/pages/Home/Home/Home";
import { createBrowserRouter } from "react-router";
import PrivateRoute from "./PrivateRoute";
import Rider from "@/pages/Rider/Rider";
import AboutUs from "@/pages/AboutUs/AboutUs";
import SendParcel from "@/pages/SendParcel/SendParcel";

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
        path: "/aboutus",
        Component: AboutUs
      },
      {
        path: "/rider",
        element: <PrivateRoute><Rider></Rider></PrivateRoute>
      },
      {
        path:"/send-parcel",
        element:<PrivateRoute><SendParcel></SendParcel></PrivateRoute>
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