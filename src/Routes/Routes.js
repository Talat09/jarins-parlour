import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Appointment from "../Pages/Appointment/Appointment";
import Contact from "../Pages/Contact/Contact";
import AddService from "../Pages/DashBoard/AddService";
import DashBoard from "../Pages/DashBoard/DashBoard";
import MakeAdmin from "../Pages/DashBoard/MakeAdmin";
import ManageServices from "../Pages/DashBoard/ManageServices";
import OrderList from "../Pages/DashBoard/OrderList";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Portfolio from "../Pages/Portfolio/Portfolio";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute";
// import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import Message from "../Pages/DashBoard/Message";
import Payment from "../Pages/DashBoard/Payment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/payment/:id",
        element: <Payment></Payment>,
      },
      {
        path: "/services",
        element: (
          <PrivateRoute>
            <OrderList></OrderList>
          </PrivateRoute>
        ),
      },
      {
        path: "/portfolio",
        element: (
          <PrivateRoute>
            <Portfolio></Portfolio>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <AdminRoute>
            <PrivateRoute>
              <DashBoard></DashBoard>
            </PrivateRoute>
          </AdminRoute>
        ),
        children: [
          // {
          //   path: "/dashboard",
          //   element: <OrderList></OrderList>,
          // },
          {
            path: "/dashboard",
            element: <MakeAdmin></MakeAdmin>,
          },
          {
            path: "/dashboard/addservices",
            element: <AddService></AddService>,
          },

          {
            path: "/dashboard/manageservice",
            element: <ManageServices></ManageServices>,
          },
          {
            path: "/dashboard/message",
            element: <Message></Message>,
          },
        ],
      },
      {
        path: "/appointment",
        element: (
          <PrivateRoute>
            <Appointment></Appointment>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
