import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./ThemeContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home/Home";
import Levels from "./pages/Levels/Levels";
import Affiliate from "./pages/Affiliate/Affiliate";
import Privacy from "./pages/Privacy/Privacy";
import Accessibility from "./pages/Accessibility/Accessibility";
import Reviews from "./pages/Reviews/Reviews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/level/:level",
    element: <Levels />,
  },
  {
    path: "/reviews",
    element: <Reviews />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
  {
    path: "/accessibility",
    element: <Accessibility />,
  },
  {
    path: "/affiliate",
    element: <Affiliate />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
