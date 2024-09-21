import { Box, Grid, Image } from "@chakra-ui/react";
import listProfile3 from "../../../../assets/image/list-profile-3.png";
import ChakraLink from "../../../component/Chakra-Link-Router";

export default function ListImageComponent() {
  return (
    <Box>
      <Grid
        templateColumns="repeat(3,32%)"
        gap={2}
        boxSizing="border-box"
        justifyContent="center"
      >
        <ChakraLink path="/detail-image">
          <Image src={listProfile3}></Image>
        </ChakraLink>
        <ChakraLink path="/detail-image">
          <Image src={listProfile3}></Image>
        </ChakraLink>
        <ChakraLink path="/detail-image">
          <Image src={listProfile3}></Image>
        </ChakraLink>
        <ChakraLink path="/detail-image">
          <Image src={listProfile3}></Image>
        </ChakraLink>
        <ChakraLink path="/detail-image">
          <Image src={listProfile3}></Image>
        </ChakraLink>
        <ChakraLink path="/detail-image">
          <Image src={listProfile3}></Image>
        </ChakraLink>
        <ChakraLink path="/detail-image">
          <Image src={listProfile3}></Image>
        </ChakraLink>
        <ChakraLink path="/detail-image">
          <Image src={listProfile3}></Image>
        </ChakraLink>
        <ChakraLink path="/detail-image">
          <Image src={listProfile3}></Image>
        </ChakraLink>
        <ChakraLink path="/detail-image">
          <Image src={listProfile3}></Image>
        </ChakraLink>
        <ChakraLink path="/detail-image">
          <Image src={listProfile3}></Image>
        </ChakraLink>
        <ChakraLink path="/detail-image">
          <Image src={listProfile3}></Image>
        </ChakraLink>
        <ChakraLink path="/detail-image">
          <Image src={listProfile3}></Image>
        </ChakraLink>
        <ChakraLink path="/detail-image">
          <Image src={listProfile3}></Image>
        </ChakraLink>
        <ChakraLink path="/detail-image">
          <Image src={listProfile3}></Image>
        </ChakraLink>
        <ChakraLink path="/detail-image">
          <Image src={listProfile3}></Image>
        </ChakraLink>
      </Grid>
    </Box>
  );
}
