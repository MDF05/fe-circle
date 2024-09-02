import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "../App";
import SidebarLeft from "../component/Sidebar-Left";
import SideBarRight from "../component/Sidebar-Right";

//! auth Routes
import Login from "../routes/auth/Login";
import ResetPassword from "../routes/auth/Reset-password";
import Register from "../routes/auth/Register";
import ForgotPassword from "../routes/auth/Forgot-password";

//! home routes
import Home from "../routes/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App
        CenterBar={<Home />}
        LeftBar={<SidebarLeft />}
        RightBar={<SideBarRight />}
      ></App>
    ),
  },
  {
    path: "/login",
    element: <App CenterBar={<Login />} />,
  },
  {
    path: "/register",
    element: <App CenterBar={<Register />}></App>,
  },
  {
    path: "/forgot-password",
    element: <App CenterBar={<ForgotPassword />} />,
  },
  {
    path: "/reset-password",
    element: <App CenterBar={<ResetPassword />} />,
  },
]);

export { RouterProvider, router };
