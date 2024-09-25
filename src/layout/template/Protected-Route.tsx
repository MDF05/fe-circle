import { Box, Grid, useDisclosure } from "@chakra-ui/react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import SideBarLeft from "../../component/Sidebar-Left";
import SideBarRight from "../../component/Sidebar-Right";
import EditProfileProvider from "../../context/Modal-Edit-Profile";
import ModalProvider from "../../context/Modal-Post-Context";
import Cookie from "js-cookie";
import { useAppSelector } from "../../hooks/use-store";
import axios from "axios";
import { ResponseUserDTO } from "../../dto/user-dto";
import { useDispatch } from "react-redux";
import { setUser } from "../../stores/auth-slice";
import { useEffect } from "react";

function TemplateLayout() {
  const location = useLocation().pathname.replace("/", "");
  const token = Cookie.get("token");
  const user = useAppSelector((state) => state.auth);
  const dispatch = useDispatch();

  if (!token || !user.id) {
    return <Navigate to={"/login"}></Navigate>;
  }

  // useEffect(() => {
  //   const validateToken = axios.post<{ token: string | undefined }>(
  //     "http://localhost:3000/api/v1/validate-token",
  //     {
  //       token: token,
  //     },
  //   );

  //   validateToken.then((res: any) => {
  //     const user = res.data.data;

  //     dispatch(setUser(user));
  //   });
  // }, []);

  return (
    <ModalProvider stateClosure={useDisclosure()}>
      <EditProfileProvider stateClosure={useDisclosure()}>
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
      </EditProfileProvider>
    </ModalProvider>
  );
}

export default TemplateLayout;
