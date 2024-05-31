import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { router } from "./routes/router";
import { ThemeContextProvider } from "./utils/theme/ThemeContextProvider";
import BreathingLoader from "./components/loader/BreathingLoader";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <RouterProvider router={router} fallbackElement={<BreathingLoader />} />
    </ThemeContextProvider>
  </React.StrictMode>
);

reportWebVitals();
