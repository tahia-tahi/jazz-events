import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import About from "../Pages/About";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import AuthLayout from "../Layout/AuthLayout";
import HomeLayout from "../Layout/HomeLayout";
import EventDetails from "../Pages/EventDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import Loading from "../Pages/Loading";

const router = createBrowserRouter([

    {
        path: '/',
        Component: HomeLayout,
        children: [
            {
                path: '',
                Component: Home,
                loader: () => fetch('/data.json'),
                hydrateFallbackElement: <Loading></Loading>

            },

        ]
    },

    {
        path: '/about',
        Component: About
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                Component: LogIn,
            },
            {
                path: '/auth/register',
                Component: Register
            }

        ]
    },
    {
        path: '/*',
        Component: ErrorPage

    },
    {
        path: '/eventdetails/:id',
        element: <PrivateRoute>
            <EventDetails></EventDetails>
        </PrivateRoute>,
        loader: () => fetch('/data.json'),
        hydrateFallbackElement: <Loading></Loading>
    },
    {
        path: '/privacypolicy',
        Component: <h1>Privacy policy</h1>
    },
    {
        path: '/terms&conditions',
        Component: <h1>Terms and cond</h1>
    }
])

export default router;