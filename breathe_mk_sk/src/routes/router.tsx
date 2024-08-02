import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";
import CompanyPage from "../pages/CompanyPage";
import ErrorRoute from "./ErrorRoute";
import NotFoundRoute from "./NotFound";
import MakeReportPage from "../pages/MakeReportPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";

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
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "company",
        element: <CompanyPage />,
      },
      {
        path: "make-report",
        element: <MakeReportPage />,
      },
      {
        path: "sign-up",
        element: <SignUpPage />,
      },
      {
        path: "sign-in",
        element: <SignInPage />,
      },

      // {
      //   path: "*",
      //   element: <NotFoundRoute />,
      // },
    ],
  },
]);
