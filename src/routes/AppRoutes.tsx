import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Auth/Login";
import Category from "../pages/Category";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <Login /> },
            { path: "user", element: <></> },
            { path: "category/:categoryCode", element: <Category /> },
            { path: "*", element: <></> }
        ]
    }
])