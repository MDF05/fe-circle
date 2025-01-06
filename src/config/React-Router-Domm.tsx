import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Text } from "@chakra-ui/react";
import TemplateLayout from "../layout/template/Protected-Route";
import Home from "../layout/home/Home";
import DetailThread from "../layout/detail-post/Detail-Thread";
import ProfileView from "../layout/profile/Profile";
import MyProfile from "../layout/my-profile/My-Profile";
import Search from "../layout/search/search";
import Follow from "../layout/follow/Follows";
import DetailImagePage from "../layout/detail-image/Detail-Image-layout";
import Login from "../layout/auth/Login";
import Register from "../layout/auth/Register";
import ForgotPassword from "../layout/auth/Forgot-password";
import ResetPassword from "../layout/auth/Reset-password";
import ListFollowing from "../layout/follow/List-Following";
import ListFollower from "../layout/follow/List-Follower";

export default function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <TemplateLayout></TemplateLayout>,
      children: [
        {
          path: "",
          element: <Home></Home>,
        },
        {
          path: "thread/:id",
          element: <DetailThread />,
        },
        {
          path: "profile/:id",
          element: <ProfileView />,
        },
        {
          path: "my-profile",
          element: <MyProfile />,
        },
        {
          path: "search",
          element: <Search />,
        },
        {
          path: "follow",
          element: <Follow />,
        },
        {
          path: "detail-image/:id",
          element: <DetailImagePage />,
        },
        {
          path: "following/:id",
          element: <ListFollowing />,
        },
        {
          path: "follower/:id",
          element: <ListFollower />,
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "reset-password",
      element: <ResetPassword />,
    },

    {
      path: "*",
      element: (
        <Text as={"h1"} color={"white"} height={"100vh"} w={"100vw"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
          Page not found
        </Text>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}
