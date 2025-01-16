import { lazy } from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";

import RootContainer from "../components/layout/RootContainer";

const LoginPage = lazy(() => import("../pages/login"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootContainer />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
];

const Routers = createBrowserRouter(routes);

export default Routers;
