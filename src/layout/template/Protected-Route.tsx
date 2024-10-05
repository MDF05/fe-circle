import { Box, Grid, useDisclosure } from "@chakra-ui/react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import SideBarLeft from "../../component/Sidebar-Left";
import SideBarRight from "../../component/Sidebar-Right";
import ModalEditProvileProvider from "../../context/Modal-Edit-Profile";
import ModalThreadProvider from "../../context/Modal-Post-Context";
import Cookie from "js-cookie";
import { useAppSelector } from "../../hooks/use-store";
import { apiV1 } from "../../lib/api-v1";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../stores/auth-slice";

function TemplateLayout() {
  const location = useLocation().pathname.replace("/", "");
  const [token, setToken] = useState(Cookie.get("token"));
  // const token = Cookie.get("token");
  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.auth);

  // useEffect(() => {
  //   setToken(Cookie.get("token"));
  //   const validateToken = apiV1.post("validate-token", {
  //     token: token,
  //   });

  //   validateToken.then((res: any) => {
  //     const user = res.data.data;

  //     dispatch(setUser(user));
  //   });
  // }, []);

  if (!token || !user.id) {
    return <Navigate to={"/login"}></Navigate>;
  }
  return (
    <ModalThreadProvider stateClosure={useDisclosure()}>
      <ModalEditProvileProvider stateClosure={useDisclosure()}>
        <Grid gridTemplateColumns={"20% 45% 35%"}>
          <Box>
            <SideBarLeft />
          </Box>
          <Box height="100vh" overflow="auto">
            <Outlet></Outlet>
          </Box>
          <Box height="100vh" overflow="auto" borderLeft="border.grey">
            <SideBarRight page={location}></SideBarRight>
          </Box>
        </Grid>
      </ModalEditProvileProvider>
    </ModalThreadProvider>
  );
}

export default TemplateLayout;
