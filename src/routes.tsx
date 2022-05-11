import React from "react";
import GlobalLayout from "./pages/_layout";

const DynamicIndex = React.lazy(() => import("./pages/index"));
const DynamicProductsIndex = React.lazy(() => import("./pages/products/index"));
const DynamicProductsId = React.lazy(() => import("./pages/products/[id]"));
const Cart = React.lazy(() => import("./pages/cart/index"));
export const routes = [
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      { path: "/", element: <DynamicIndex />, index: true },
      { path: "/products", element: <DynamicProductsIndex />, index: true },
      { path: "/products/:id", element: <DynamicProductsId /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
];

export const pages = [
  { route: "/" },
  { route: "/products" },
  { route: "/products/:id" },
  { route: "/cart" },
];
