import { Box, Grid, useDisclosure } from "@chakra-ui/react";
import { Navigate, Outlet } from "react-router-dom";
import SideBarLeft from "../../component/Sidebar-Left";
import SideBarRight from "../../component/Sidebar-Right";
import ModalEditProvileProvider from "../../context/Modal-Edit-Profile";
import ModalThreadProvider from "../../context/Modal-Post-Context";
import useTemplate from "./hooks/use-template";


  function TemplateLayout() {
      const {token, user, location} = useTemplate()


    if (!token || Object.getOwnPropertyNames(user).length == 0) return <Navigate to={"/login"}></Navigate>

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
