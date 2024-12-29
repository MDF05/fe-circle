import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import threadsEntity from "../../../entities/thread-entity";
import ChakraLink from "../../../component/Chakra-Link-Router";
import calcAgePost from "../../../utils/convert-date";
import avatarImage from "../../../../assets/image/avatar.png";
import ButtonLike from "./Button-Like";

export function Thread({ thread }: { thread: threadsEntity }): ReactNode {
  return (
    <Box px="20px" py="20px" borderBottom="1px solid grey" color="white" key={thread.id}>
      <Box display="grid" gap="20px" boxSizing="border-box" gridTemplateColumns={"40px Calc(100% - 60px)"}>
        <ChakraLink to={`/profile/${thread.profile.id}`} rounded={"full"} state={{ profileId: thread.profile.id }}>
          <Image src={thread.profile.image ?? avatarImage} h={"40px"} w={"40px"} rounded={"full"} />
        </ChakraLink>
        <Box display="flex" flexDirection="column" gap="15px">
          <Flex gap="5px">
            <Text>{thread.profile.fullName} </Text>
            <Text color="grey"> @{thread.profile.username} </Text>
            <Text color="grey"> • </Text>
            <Text color="grey"> {calcAgePost(thread.createdAt)}</Text>
          </Flex>
          <Flex gap={"20px"} flexDir={"column"}>
            <Text>{thread.text}</Text>
            {thread.image && (
              <ChakraLink to={`/detail-image/${thread.id}`} state={{ id: thread.id, thisThread: thread, thread: [] }}>
                <Image src={`${thread.image}`} width={"100%"} />
              </ChakraLink>
            )}
          </Flex>
          <ButtonLike thread={thread}></ButtonLike>
        </Box>
      </Box>
    </Box>
  );
}
