import RootLayout from "@/layouts/RootLayout";
import Coverage from "@/pages/Coverage/Coverage";
import Home from "@/pages/Home/Home/Home";
import { createBrowserRouter } from "react-router";

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
        path: "/coverage",
        Component: Coverage
      }
    ]
  },
]);