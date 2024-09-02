import { Box } from "@chakra-ui/react";
import React from "react";

interface ReanderPageProps {
  CenterBar: React.ReactElement;
  RightBar?: React.ReactElement;
  LeftBar?: React.ReactElement;
}

function App({ CenterBar, RightBar, LeftBar }: ReanderPageProps) {
  return (
    <Box
      display="grid"
      flexDirection="row"
      gridTemplateColumns={
        RightBar || LeftBar ? "20% 45% 35%" : "repeat(1,100%)"
      }
      background="brand.background"
    >
      <Box>{LeftBar ? LeftBar : <></>}</Box>
      <Box height="100vh" overflow="auto">
        {CenterBar}
      </Box>
      <Box height="100vh" overflow="auto">
        {RightBar ? RightBar : <></>}
      </Box>
    </Box>
  );
}

export default App;
