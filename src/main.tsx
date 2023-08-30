import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoutes from "./services/ProtectedRoutes.tsx";
import PublicRoutes from "./services/PublicRoutes";

import LandingPage from "./pages/LandingPage";
import ShoppingList from "./pages/ShoppingList";
import ShoppingCart from "./pages/ShoppingCart";
import ErrorPage from "./pages/ErrorPage.tsx";
import LogIn from "./pages/LogIn.tsx";
import SignUp from "./pages/SignUp.tsx";
import Backpack from "./pages/Backpack.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/",
        element: <PublicRoutes />,
        children: [
          {
            path: "/login",
            element: <LogIn />,
          },
          {
            path: "/signup",
            element: <SignUp />,
          },
        ],
      },
      {
        path: "/",
        element: <ProtectedRoutes />,
        children: [
          {
            path: "/shop",
            element: <ShoppingList />,
          },
          {
            path: "/cart",
            element: <ShoppingCart />,
          },
          {
            path: "/bag",
            element: <Backpack />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
);
