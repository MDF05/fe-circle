import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import threadsEntity from "../../../entities/thread-entity";
import ChakraLink from "../../../component/Chakra-Link-Router";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { TbMessage2 } from "react-icons/tb";
import calcAgePost from "../../../utils/convert-date";
import useThread from "../hook/use-thread";

export function Thread({ thread }: { thread: threadsEntity }): ReactNode {
  const { handleLike, handleResetLike, handleSubmit, countLike, likeId } =
    useThread(thread);

  return (
    <Box
      px="20px"
      py="20px"
      borderBottom="1px solid grey"
      color="white"
      key={thread.id}
    >
      <Box
        display="grid"
        gap="20px"
        boxSizing="border-box"
        gridTemplateColumns={"40px Calc(100% - 60px)"}
      >
        <ChakraLink
          to={`/profile/${thread.profile.id}`}
          rounded={"full"}
          state={{ profileId: thread.profile.id }}
        >
          <Image
            src={thread.profile.image as string}
            h={"40px"}
            w={"40px"}
            rounded={"full"}
          />
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
              <ChakraLink
                to={`/detail-image/${thread.id}`}
                state={{ id: thread.id, thisThread: thread, thread: [] }}
              >
                <Image src={`http://localhost:3000/assets/${thread.image}`} />
              </ChakraLink>
            )}
          </Flex>
          <Flex gap="20px" color={"grey"}>
            <Flex
              as={"form"}
              alignItems={"center"}
              gap={"5px"}
              onSubmit={handleSubmit(() => handleLike())}
              onReset={handleSubmit(() => handleResetLike())}
            >
              {likeId !== null ? (
                <Flex as="button" type="reset">
                  <Icon
                    as={FaHeart}
                    fontSize="1.5rem"
                    color="red"
                    cursor="pointer"
                  ></Icon>
                </Flex>
              ) : (
                <Flex as="button" type="submit">
                  <Icon
                    as={FaRegHeart}
                    fontSize="1.5rem"
                    color="grey"
                    cursor="pointer"
                  ></Icon>
                </Flex>
              )}
              {countLike}
            </Flex>
            <Flex alignItems={"center"} gap={"5px"}>
              <ChakraLink
                to={`/thread/${thread.id}`}
                state={{ id: `${thread.id}` }}
                display={"grid"}
                alignItems={"center"}
              >
                <Icon
                  as={TbMessage2}
                  fontSize="1.5rem"
                  color="grey"
                  cursor="pointer"
                ></Icon>
              </ChakraLink>
              {thread._count.replies}
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
