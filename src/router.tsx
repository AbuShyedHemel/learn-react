import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthenticatedLayout from "./components/AuthenticatedLayout";
import MainLayout from "./components/MainLayout";
import NotFound from "./components/NotFound";
import DashboardPage from "./pages/Dashboard";
import LoginPage from "./pages/login";
import ProductsPage from "./pages/products";
import ProductPage from "./pages/products/product";

export const publicRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to="/login" /> },
      { path: "login", element: <LoginPage /> },
    ],
  },
]);

export const authenticatedRouter = createBrowserRouter([
  {
    path: "/",
    element: <AuthenticatedLayout />,
    children: [
      { index: true, element: <Navigate to="/dashboard" /> },
      { path: "/dashboard", element: <DashboardPage /> },
      { path: "/products", element: <ProductsPage /> },
      { path: "/products/:product_id", element: <ProductPage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
