import { Box, Grid } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";
import SideBarLeft from "../component/Sidebar-Left";
import SideBarRight from "../component/Sidebar-Right";

function TemplateLayout2() {
  const location = useLocation().pathname.replace("/", "");
  return (
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
  );
}

export default TemplateLayout2;
