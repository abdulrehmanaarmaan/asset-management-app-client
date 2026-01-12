import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import DashboardLayout from "../layouts/DashboardLayout";
import AddAsset from "../pages/AddAsset";
import ManagerRoute from "../routes/ManagerRoute";
import EmployeeRoute from "../routes/EmployeeRoute";
import PrivateRoute from "../routes/PrivateRoute";
import AssetList from "../pages/AssetList";
import RequestAsset from "../pages/RequestAsset";
import AllRequests from "../pages/AllRequests";
import MyAssets from "../pages/MyAssets";
import Profile from "../pages/Profile";
import UpgradePackage from "../pages/UpgradePackage";
import MyEmployee from "../pages/MyEmployee";
import UpgradeSuccess from "../pages/UpgradeSuccess";
import UpgradeCancelled from "../pages/UpgradeCancelled";
import MyTeam from "../pages/MyTeam";
import Analytics from "../pages/Analytics";
import DashboardError from "../pages/DashboardError";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import PublicRoute from "../routes/PublicRoute";
import AssetDetails from "../pages/AssetDetails";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                path: '/',
                Component: Home
            },
            {
                path: '/about',
                Component: About
            },
            {
                path: '/blog',
                Component: Blog
            },
            {
                path: '/contact',
                Component: Contact
            },
            {
                path: '/registration/:role',
                element: <PublicRoute><Registration></Registration></PublicRoute>
            },
            {
                path: '/login',
                element: <PublicRoute><Login></Login></PublicRoute>
            },
            {
                path: '/asset-details/:id',
                element: <PrivateRoute><AssetDetails></AssetDetails></PrivateRoute>
            }
        ]
    },

    {
        path: '/dashboard',
        Component: DashboardLayout,
        children: [
            {
                index: true,
                path: 'asset-list',
                element: <PrivateRoute><ManagerRoute><AssetList></AssetList></ManagerRoute></PrivateRoute>
            },
            {
                path: 'add-asset',
                element: <PrivateRoute><ManagerRoute><AddAsset></AddAsset></ManagerRoute></PrivateRoute>
            },
            {
                path: 'all-requests',
                element: <PrivateRoute><ManagerRoute><AllRequests></AllRequests></ManagerRoute></PrivateRoute>
            },
            {
                path: 'my-employee-list',
                element: <PrivateRoute><ManagerRoute><MyEmployee></MyEmployee></ManagerRoute></PrivateRoute>
            },
            {
                path: 'upgrade-package',
                element: <PrivateRoute><ManagerRoute><UpgradePackage></UpgradePackage></ManagerRoute></PrivateRoute>
            },
            {
                path: 'analytics',
                element: <PrivateRoute><ManagerRoute><Analytics></Analytics></ManagerRoute></PrivateRoute>
            },
            {
                path: 'upgrade-success',
                element: <PrivateRoute><ManagerRoute><UpgradeSuccess></UpgradeSuccess></ManagerRoute></PrivateRoute>
            },
            {
                path: 'upgrade-cancelled',
                element: <PrivateRoute><ManagerRoute><UpgradeCancelled></UpgradeCancelled></ManagerRoute></PrivateRoute>
            },
            {
                path: 'my-assets',
                element: <PrivateRoute><EmployeeRoute><MyAssets></MyAssets></EmployeeRoute></PrivateRoute>
            },
            {
                path: 'request-asset',
                element: <PrivateRoute><EmployeeRoute><RequestAsset></RequestAsset></EmployeeRoute></PrivateRoute >
            },
            {
                path: 'my-team',
                element: <PrivateRoute><EmployeeRoute><MyTeam></MyTeam></EmployeeRoute></PrivateRoute >
            },
            {
                path: 'profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute >
            },
            {
                path: '*',
                element: <DashboardError></DashboardError>
            }
        ]
    }
]);

export default router