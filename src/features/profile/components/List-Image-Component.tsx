import { Box, Grid, Image } from "@chakra-ui/react";
import ChakraLink from "../../../component/Chakra-Link-Router";

export default function ListImageComponent({ thread }: { thread?: any }) {
  const filterImage = Array.from(thread).filter((th: any) => th.image !== null);
  return (
    <Box>
      <Grid
        templateColumns="repeat(3,32%)"
        gap={2}
        boxSizing="border-box"
        justifyContent="center"
        paddingBottom={"100px"}
      >
        {filterImage.map((th: any, index: number) => (
          <ChakraLink
            to={`/detail-image/${th.id}`}
            key={index}
            state={{ id: th.id, thisThread: th, thread: filterImage }}
          >
            <Image
              width={"100%"}
              height={"200px"}
              src={`http://localhost:3000/assets/${th.image}`}
            ></Image>
          </ChakraLink>
        ))}
      </Grid>
    </Box>
  );
}
