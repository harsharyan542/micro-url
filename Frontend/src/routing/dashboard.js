import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "./routeTree"
import DashboardPage from "../pages/DashboardPage"
import { checkAuth } from "../utilis/helper"

export const dasboardRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/dashboard',
    component: DashboardPage,
    beforeLoad: checkAuth
})