import { Box, Grid } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

function TemplateLayout2() {
  return (
    <Grid gridTemplateColumns={"20% 45% 35%"}>
      <Box>
        <>asu</>
      </Box>
      <Box height="100vh" overflow="auto" bg={"red"}>
        <Outlet></Outlet>
      </Box>
      <Box height="100vh" overflow="auto" borderLeft="border.grey" bg={"red"}>
        <Box>asu</Box>
      </Box>
    </Grid>
  );
}

export default TemplateLayout2;
