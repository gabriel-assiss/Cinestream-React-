import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FilmePage from "./pages/FilmePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/telaFilme",
    element: <FilmePage />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
