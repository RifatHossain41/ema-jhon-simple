import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Shop from "./components/Shop/Shop";
import Orders from "./components/Orders/Orders";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import cartProductsLoader from "./Loaders/CartProductsLoader";
import Checkout from "./components/Checkout/checkout";
import SignUp from "./components/SignUp/SignUp";
import AuthProvider from "./components/Provider/AuthProvider";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: "orders",
        element: <Orders></Orders>,
        loader: cartProductsLoader,
      },
      {
        path: "inventory",
        element: <Inventory></Inventory>,
      },
      {
        path: "checkout",
        element: <Checkout></Checkout>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
