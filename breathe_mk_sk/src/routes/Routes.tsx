import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";
import CompanyPage from "../pages/CompanyPage";
import ErrorRoute from "./ErrorRoute";
import NotFoundRoute from "./NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorRoute />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/company",
        element: <CompanyPage />,
      },

      {
        path: "*",
        element: <NotFoundRoute />,
      },
    ],
  },
]);
