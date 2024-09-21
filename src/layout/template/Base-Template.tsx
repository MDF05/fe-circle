import { Box, Grid, useDisclosure } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";
import SideBarLeft from "../../component/Sidebar-Left";
import SideBarRight from "../../component/Sidebar-Right";
import EditProfileProvider from "../../context/Modal-Edit-Profile";
import ModalProvider from "../../context/Modal-Post-Context";

function TemplateLayout() {
  const location = useLocation().pathname.replace("/", "");
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
