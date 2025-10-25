// main.tsx veya App.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./Components/Layout";
import { PageNotFound } from "./Components/PageNotFound";
import HomePage from "./Components/HomePage";
import { HaberPage } from "./Components/HaberPage";
import HaberDetayPage from "./Components/HaberDetayPage";
import ProjePage from "./Components/ProjePage";
import ProjeDetayPage from "./Components/ProjeDetayPage";
import DevlogDetay from "./Components/DevlogDetay";
import DevlogPage from "./Components/DevlogPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "haberler",
        element: <HaberPage />,
        children: [
          {
            path: ":kupurNo",
            element: <HaberDetayPage />
          }
        ]
      },
      {
        path: "projeler",
        element: <ProjePage />,
        children: [
          {
            path: ":id",
            element: <ProjeDetayPage />
          }
        ]
      },
      {
        path: "devlog",
        element: <DevlogPage />, // Ana devlog sayfası
        children: [
          {
            path: ":id", // Devlog detay sayfası
            element: <DevlogDetay />
          }
        ]
      },
    ]
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
