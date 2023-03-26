import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./ThemeContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/Home/Home";
import Levels from "./components/Levels/Levels";
import Affiliate from "./components/Affiliate/Affiliate";
import Privacy from "./components/Privacy/Privacy";
import Reviews from "./components/Reviews/Reviews";
import Accessibility from "./components/Accessibility/Accessibility";

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
