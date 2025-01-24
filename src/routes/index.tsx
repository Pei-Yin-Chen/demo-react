import { lazy } from "react";
import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";

import RootContainer from "../components/layout/RootContainer";
import LoginSettingPage from "../pages/loginSetting";
import OverviewPage from "../pages/overview";

const LoginPage = lazy(() => import("../pages/login"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootContainer />,
    children: [
      {
        index: true,
        element: <Navigate to="overview" replace />,
      },
      {
        path: "overview",
        element: <OverviewPage />,
      },
      {
        path: "loginSetting",
        element: <LoginSettingPage />,
      },
    ],
  },
  {
    path: "login",
    element: <LoginPage />,
  },
];

const Routers = createBrowserRouter(routes);

export default Routers;
