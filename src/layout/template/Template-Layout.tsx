import { Box, Grid, useDisclosure } from "@chakra-ui/react";
import React from "react";
import ModalProvider from "../../context/Modal-Post-Context";
import EditProfileProvider from "../../context/Modal-Edit-Profile";

interface TemplateLayoutProps {
  CenterBar: React.ReactElement;
  RightBar?: React.ReactElement;
  LeftBar?: React.ReactElement;
}

function TemplateLayout({ CenterBar, RightBar, LeftBar }: TemplateLayoutProps) {
  return (
    <ModalProvider stateClosure={useDisclosure()}>
      <EditProfileProvider stateClosure={useDisclosure()}>
        <Grid
          gridTemplateColumns={
            RightBar || LeftBar ? "20% 45% 35%" : "repeat(1,100%)"
          }
        >
          <Box>{LeftBar ? LeftBar : null}</Box>
          <Box height="100vh" overflow="auto">
            {CenterBar}
          </Box>
          <Box height="100vh" overflow="auto" borderLeft="border.grey">
            {RightBar ? RightBar : null}
          </Box>
        </Grid>
      </EditProfileProvider>
    </ModalProvider>
  );
}

export default TemplateLayout;
