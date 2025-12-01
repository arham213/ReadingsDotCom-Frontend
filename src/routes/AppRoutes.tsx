import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Auth/Login";
import Category from "../pages/Category";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Author from "../pages/Author";
import Cart from "../pages/Cart";
import AdvancedSearch from "../pages/Advanced-Search";
import SearchResults from "../pages/SearchResults";
import Wishlist from "../pages/Wishlist";
import Signup from "../pages/Auth/Signup";
import VerifyEmail from "../pages/Auth/VerifyEmail";
import OrderList from "../pages/OrderList";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: '/register', element: <Signup /> },
            { path: '/verify-email/:userId', element: <VerifyEmail /> },
            { path: "/login", element: <Login /> },
            { path: "/orders", element: <OrderList /> },
            { path: "/category/:categoryCode", element: <Category /> },
            { path: "/product/:productId", element: <Product /> },
            { path: "/cart", element: <Cart /> },
            { path: "/author/:authorId", element: <Author /> },
            { path: "/wishlist", element: <Wishlist /> },
            { path: "/advanced-search", element: <AdvancedSearch /> },
            { path: "/search", element: <SearchResults /> },
            { path: "*", element: <p className="page-heading">404! Page Not Found</p> }
        ]
    }
])