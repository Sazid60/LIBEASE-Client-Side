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

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement :<ErrorPage></ErrorPage>,
        children :[
          {
              path: "/",
              element: <Home></Home>,
              loader :()=> fetch('http://localhost:5000/all-categories')
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
              element: <PrivateRoutes><AddBook></AddBook></PrivateRoutes>,
          },
          {
              path: "/all-books",
              element: <PrivateRoutes><AllBooks></AllBooks></PrivateRoutes>,
          },
          {
              path: "/borrowed-books",
              element: <PrivateRoutes><BorrowedBooks></BorrowedBooks></PrivateRoutes>,
          },
          {
              path: "/book-update/:id",
              element: <PrivateRoutes><BookUpdatePage></BookUpdatePage></PrivateRoutes>,
              loader : ({params}) => fetch(`http://localhost:5000/all-books/${params.id}`)
          },
          {
              path: "/categorized-books/:categoryName",
              element: <CategorizedBooks></CategorizedBooks>,
              loader : ({params}) => fetch(`http://localhost:5000/categorizedBooks/${params.categoryName}`) 
          },
          {
              path: "/book-details/:id",
              element: <BookDetailsPage></BookDetailsPage>,
              loader : ({params}) => fetch(`http://localhost:5000/all-books/${params.id}`)
          },
        ]
      },
  ]);

export default router;