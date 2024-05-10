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

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement :<ErrorPage></ErrorPage>,
        children :[
          {
              path: "/",
              element: <Home></Home>,
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
        ]
      },
  ]);

export default router;