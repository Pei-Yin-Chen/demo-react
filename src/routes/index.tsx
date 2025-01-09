import { lazy } from "react"
import { createBrowserRouter, RouteObject } from "react-router-dom";

const LoginPage = lazy(() => import("../pages/login"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <LoginPage />
  }
]

const Routers = createBrowserRouter(routes);

export default Routers;