import { lazy } from "react";
import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";

import RootContainer from "../components/layout/RootContainer";
import LoginSettingPage from "../pages/loginSetting";

const LoginPage = lazy(() => import("../pages/login"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootContainer />,
    children: [
      {
        index: true,
        element: <Navigate to="loginSetting" replace />,
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
