import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { ReactNode, useEffect, useState } from "react";
import threadsEntity from "../../../entities/thread-entity";
import ChakraLink from "../../../component/Chakra-Link-Router";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { TbMessage2 } from "react-icons/tb";
import convertDateAge from "../../../utils/convert-date";
import { useForm } from "react-hook-form";
import { apiV1 } from "../../../lib/api-v1";

export function Thread({ thread }: { thread: threadsEntity }): ReactNode {
  const { handleSubmit } = useForm();
  const [like, setLike] = useState<string>("");

  useEffect(() => {
    (async function setData() {
      try {
        const response = await apiV1.get(`/like/${thread.id}`);
        setLike(response.data.data.id);
      } catch (err) {
        setLike("");
      }
    })();
  }, [like]);

  async function handleLike() {
    if (like == "") {
      try {
        const res = await apiV1.post(`/like/${thread.id}`);
        setLike(res.data.data.id);
      } catch (err) {
        setLike("");
      }
    } else {
      try {
        const res = await apiV1.delete(`/like/${like}`);
        setLike("");
      } catch (err) {
        setLike("");
      }
    }
  }

  const agePost = convertDateAge(thread.createdAt);
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
        <ChakraLink to="/profile" rounded={"full"}>
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
            <Text color="grey"> {agePost}</Text>
          </Flex>
          <Flex gap={"20px"} flexDir={"column"}>
            <Text>{thread.text}</Text>
            {thread.image && (
              <Image src={`http://localhost:3000/assets/${thread.image}`} />
            )}
          </Flex>
          <Flex gap="20px" color={"grey"}>
            <Flex
              as={"form"}
              alignItems={"center"}
              gap={"5px"}
              onSubmit={handleSubmit(() => handleLike())}
            >
              {like !== "" ? (
                <Box as="button" type="submit">
                  <Icon
                    as={FaHeart}
                    fontSize="1.5rem"
                    color="red"
                    cursor="pointer"
                  ></Icon>
                </Box>
              ) : (
                <Box as="button" type="submit">
                  <Icon
                    as={FaRegHeart}
                    fontSize="1.5rem"
                    color="grey"
                    cursor="pointer"
                  ></Icon>
                </Box>
              )}
              {thread._count.like}
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
