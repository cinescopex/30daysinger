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
import Course from "./pages/Course/Course";
import Technology from "./pages/Technology/Technology";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/learn/:level",
    element: <Levels />,
  },
  {
    path: "/learn/:level/:course",
    element: <Course />,
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
  {
    path: "/technology-stack",
    element: <Technology />,
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
