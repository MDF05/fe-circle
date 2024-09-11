import { createBrowserRouter, RouterProvider } from "react-router-dom";

//! auth Routes
import LoginRoute from "../routes/Login";
import RegisterRoutes from "../routes/Register-Routes";
import ForgotPasswordRoutes from "../routes/Forgot-Password-Routes";
import ResetPasswordRoutes from "../routes/Reset-Password-Routes";

//! home routes
import HomeRoutes from "../routes/Home-Routes";
import DetailPostRoutes from "../routes/Detail-Post-Routes";
import ProfileRoutes from "../routes/Profile-Routes";
import MyProfileRoutes from "../routes/My-Profile";
import FollowRoute from "../routes/Follow-Routes";
import SearchRoute from "../routes/Search-Route";
import { Text } from "@chakra-ui/react";
import { DetailImageRoutes } from "../routes/Detail-Image-Routes";

export default function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeRoutes />,
    },
    {
      path: "/detail-post",
      element: <DetailPostRoutes />,
    },
    {
      path: "/profile",
      element: <ProfileRoutes />,
    },
    {
      path: "/my-profile",
      element: <MyProfileRoutes />,
    },
    {
      path: "/search",
      element: <SearchRoute />,
    },
    {
      path: "/follows",
      element: <FollowRoute />,
    },
    {
      path: "/login",
      element: <LoginRoute />,
    },
    {
      path: "/register",
      element: <RegisterRoutes />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPasswordRoutes />,
    },
    {
      path: "/reset-password",
      element: <ResetPasswordRoutes />,
    },
    {
      path: "/detail-image",
      element: <DetailImageRoutes />,
    },
    {
      path: "*",
      element: (
        <Text
          as={"h1"}
          color={"white"}
          height={"100vh"}
          w={"100vw"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          Page not found
        </Text>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}
