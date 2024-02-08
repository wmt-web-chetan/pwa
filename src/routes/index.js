import { lazy } from "react";

const PublicRoutes = [
  {
    path: "/login",
    component: lazy(() => import("../pages/auth/Login")),
    exact: true,
  },
  {
    path: "/register",
    component: lazy(() => import("../pages/auth/Register")),
    exact: true,
  },
]

const PrivateRoutes = [
  {
    path: "/",
    component: lazy(() => import("../pages/dashboard")),
    exact: true,
  },
];

export { PublicRoutes, PrivateRoutes };
