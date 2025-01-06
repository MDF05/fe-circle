import { Box, Grid, useDisclosure } from "@chakra-ui/react";
import { Navigate, Outlet } from "react-router-dom";
import SideBarLeft from "../../component/Sidebar-Left";
import SideBarRight from "../../component/Sidebar-Right";
import ModalEditProvileProvider from "../../context/Modal-Edit-Profile";
import ModalThreadProvider from "../../context/Modal-Post-Context";
import useTemplate from "./hooks/use-template";

function TemplateLayout() {
  const { token, location } = useTemplate();

  if (!token) {
    return <Navigate to={"/login"}></Navigate>;
  }

  return (
    <ModalThreadProvider stateClosure={useDisclosure()}>
      <ModalEditProvileProvider stateClosure={useDisclosure()}>
        <Grid gridTemplateColumns={{ base: "100%", lg: "17% 48% 35%" }}>
          <Box display={{ base: "flex" }} w={"100%"}>
            <SideBarLeft />
          </Box>
          <Box height="100vh" overflow="auto">
            <Outlet></Outlet>
          </Box>
          <Box height="100vh" overflow="auto" borderLeft="border.grey" display={{ base: "none", md: "inherit", lg: "inherit" }}>
            <SideBarRight page={location}></SideBarRight>
          </Box>
        </Grid>
      </ModalEditProvileProvider>
    </ModalThreadProvider>
  );
}

export default TemplateLayout;
