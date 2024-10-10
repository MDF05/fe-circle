import { Flex, Grid, Icon, Image } from "@chakra-ui/react";
import { IoIosArrowDropright, IoIosCloseCircleOutline } from "react-icons/io";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DetailThread from "./../detail-post/Detail-Thread";
import ChakraLink from "./../../component/Chakra-Link-Router";
import threadsEntity from "../../entities/thread-entity";

export default function DetailImagePage() {
  const [fullScreenImage, setFullScreenImage] = useState<boolean>(false);
  const { state } = useLocation();
  const Navigate = useNavigate();
  let thread: threadsEntity[] = Array.from(state.thread);
  let nextIndex: number = thread.indexOf(state.thisThread) + 1;

  if (nextIndex == thread.length) nextIndex = 0;

  return (
    <Grid
      width={"100%"}
      gridTemplateColumns={fullScreenImage ? "100%" : "60% 40%"}
      p={"10px 5px"}
      color={"white"}
      position={"fixed"}
      bg={"brand.background"}
      zIndex={100}
      left={0}
      overflow={"auto"}
    >
      <Grid
        p={"0px 10px"}
        h={"100vh"}
        overflowY={"auto"}
        overflowX={"hidden"}
        position={"relative"}
        justifyItems={"center"}
      >
        <Flex
          position={"sticky"}
          top={"0px"}
          justifyContent={"space-between"}
          width={"100%"}
        >
          <Icon
            as={IoIosCloseCircleOutline}
            fontSize={"30px"}
            onClick={() => Navigate(-1)}
            boxShadow={"0px 0px 4px 1px black"}
            rounded={"full"}
            bg={"white"}
            color="black"
          ></Icon>
          {thread.length > 0 && (
            <ChakraLink
              to={`/detail-image/${thread[nextIndex]?.id}`}
              state={{
                id: thread[nextIndex]?.id,
                thisThread: thread[nextIndex],
                thread,
              }}
            >
              <Icon
                as={IoIosArrowDropright}
                fontSize={"30px"}
                rounded={"full"}
                boxShadow={"0px 0px 4px 1px black"}
                bg={"white"}
                color="black"
              ></Icon>
            </ChakraLink>
          )}
        </Flex>
        <Image
          src={`http://localhost:4000/assets/${state.thisThread.image}`}
          width={fullScreenImage ? "80%" : "100%"}
          onClick={() => setFullScreenImage(!fullScreenImage)}
        ></Image>
      </Grid>
      {!fullScreenImage && (
        <Grid overflow={"auto"} height={"100vh"} borderLeft={"1px solid grey"}>
          <DetailThread></DetailThread>
        </Grid>
      )}
    </Grid>
  );
}
