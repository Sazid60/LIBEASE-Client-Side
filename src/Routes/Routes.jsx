import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import MainLayout from "../Layout/MainLayout";

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
        ]
      },
  ]);

export default router;