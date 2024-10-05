import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import MainLayout from "../Layout/MainLayout";
import AddBook from "../Pages/AddBook";
import AllBooks from "../Pages/AllBooks";
import BorrowedBooks from "../Pages/BorrowedBooks";
import PrivateRoutes from "./PrivateRoutes";
import BookUpdatePage from "../Pages/BookUpdatePage";

import CategorizedBooks from "../Pages/CategorizedBooks";
import BookDetailsPage from "../Pages/BookDetailsPage";
import AdminPrivateRoutes from "./AdminPrivateRoutes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://lib-ease-server-b9-a11.vercel.app/all-categories')
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/add-book",
                element: <PrivateRoutes><AdminPrivateRoutes><AddBook></AddBook></AdminPrivateRoutes></PrivateRoutes>,
            },
            {
                path: "/all-books",
                element: <PrivateRoutes><AdminPrivateRoutes><AllBooks></AllBooks></AdminPrivateRoutes></PrivateRoutes>,
            },
            {
                path: "/borrowed-books",
                element: <PrivateRoutes><BorrowedBooks></BorrowedBooks></PrivateRoutes>,
            },
            {
                path: "/book-update/:id",
                element: <PrivateRoutes><BookUpdatePage></BookUpdatePage></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://lib-ease-server-b9-a11.vercel.app/all-books/${params.id}`)
            },
            {
                path: "/categorized-books/:categoryName",
                element: <PrivateRoutes><CategorizedBooks></CategorizedBooks></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://lib-ease-server-b9-a11.vercel.app/categorizedBooks/${params.categoryName}`)
            },
            {
                path: "/book-details/:id",
                element: <PrivateRoutes><BookDetailsPage></BookDetailsPage></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://lib-ease-server-b9-a11.vercel.app/all-books/${params.id}`)
            },
        ]
    },
]);

export default router;