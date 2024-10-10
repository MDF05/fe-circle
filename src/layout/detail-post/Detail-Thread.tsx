import {
  Box,
  Button,
  Container,
  Flex,
  Icon,
  Image,
  Text,
  Grid,
  Input,
} from "@chakra-ui/react";
import { FaArrowLeftLong, FaRegHeart } from "react-icons/fa6";
import { TbMessage2 } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
import { LuImagePlus } from "react-icons/lu";

import detailDatePost from "../../utils/detail-date-post";
import ModalPost from "../../component/Modal-Post";
import ListThreads from "./../../features/base/components/List-Thread";
import useDetailThreads from "./hooks/use-detail-thread";
import { useEffect, useState } from "react";
import { apiV1 } from "../../lib/api-v1";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";

export default function DetailThread() {
  const {
    thread,
    onOpen,
    navigate,
    pathname,
    register,
    handleReplies,
    handleSubmit,
    user,
  } = useDetailThreads();

  const { handleSubmit: handleSubmitLike } = useForm();
  const [like, setLike] = useState<string | null>(null);
  const [countLike, setCountLike] = useState<number>(0);
  const token = Cookies.get("token");

  useEffect(() => {
    (async function setData() {
      try {
        if (thread?.id) {
          if (thread) setCountLike(thread?._count.like);
          const response = await apiV1.get(`/like/${thread?.id}`, {
            headers: {
              Authorization: `Bearer ` + token,
            },
          });
          setLike(response.data.data.id);
        }
      } catch (err) {
        setLike(null);
      }
    })();
  }, [thread?.id]);

  async function handleLike() {
    try {
      const res = await apiV1.post(`/like/${thread?.id}`, {
        headers: {
          Authorization: `Bearer ` + token,
        },
      });
      setLike(res.data.data.id);
      setCountLike(countLike + 1);
    } catch (err) {
      setLike(null);
    }
  }

  async function handleResetLike() {
    try {
      await apiV1.delete(`/like/${like}`, {
        headers: {
          Authorization: `Bearer ` + token,
        },
      });
      setCountLike(countLike - 1);
      setLike(null);
    } catch (err) {
      setLike(like);
    }
  }

  return (
    <Container color="white" p="0 0 50px 0 ">
      <ModalPost></ModalPost>

      <Flex height="50px" width="100%" alignItems="end" ps="20px">
        <Flex
          as="button"
          alignItems="center"
          gap="10px"
          onClick={() => navigate(-1)}
        >
          <Icon as={FaArrowLeftLong} />
          <Text textTransform="capitalize">back</Text>
        </Flex>
      </Flex>
      <Flex
        paddingTop="30px"
        flexDirection="column"
        gap="15px"
        borderBottom="1px solid grey"
        p="20px 20px"
      >
        <Box display="flex" gap="20px">
          <Image
            src={thread?.profile.image}
            rounded="full"
            width="40px"
            height="40px"
          ></Image>
          <Flex flexDirection="column">
            <Text textTransform="capitalize">{thread?.profile.fullName}</Text>
            <Text color="grey">{thread?.profile.username}</Text>
          </Flex>
        </Box>
        <Grid gap={"10px"}>
          <Text>{thread?.text}</Text>
          {thread?.image && !pathname.includes("detail-image") && (
            <Image
              src={`http://localhost:4000/assets/${thread?.image}`}
              alt={`thread-${thread.id}`}
              maxW={"100%"}
            ></Image>
          )}
        </Grid>
        <Box color="grey" display="flex" gap="5px">
          <Flex>{detailDatePost(thread?.createdAt as string)[0]}</Flex>
          <Flex>● </Flex>
          <Flex>{detailDatePost(thread?.createdAt as string)[1]}</Flex>
        </Box>
        <Flex
          gap="20px"
          color="grey"
          as="form"
          onSubmit={handleSubmitLike(() => handleLike())}
          onReset={handleSubmitLike(() => handleResetLike())}
        >
          <Flex gap="5px">
            {!like ? (
              <Box as="button" type={"submit"}>
                <Icon
                  as={FaRegHeart}
                  fontSize="1.5rem"
                  color="grey"
                  cursor="pointer"
                ></Icon>
              </Box>
            ) : (
              <Box as="button" type={"reset"}>
                <Icon
                  as={FaHeart}
                  fontSize="1.5rem"
                  color="red"
                  cursor="pointer"
                ></Icon>
              </Box>
            )}
            <Text>{countLike}</Text>
          </Flex>
          <Flex gap="5px">
            <Icon
              as={TbMessage2}
              fontSize="1.5rem"
              color="grey"
              cursor="pointer"
            ></Icon>
            <Text>{thread?._count.replies} Replies</Text>
          </Flex>
        </Flex>
      </Flex>
      <Box borderBottom="1px solid grey" p="20px">
        <Flex
          width="100%"
          as={"form"}
          onSubmit={handleSubmit((e) => handleReplies(e))}
        >
          <Box display="flex" justifyContent="space-between" width="100%">
            <Box display="flex" gap="20px" alignItems="center" w={"100%"}>
              {user.profile.image && (
                <Image
                  src={user.profile.image}
                  alt="user-profile"
                  width={"50px"}
                  height={"45px"}
                  objectFit={"cover"}
                  rounded="full"
                ></Image>
              )}
              <Input
                color="grey"
                border={"none"}
                placeholder="Type your reply!"
                _focusVisible={{ border: "none" }}
                overflow={"hidden"}
                w="100%"
                {...register("text")}
              ></Input>
            </Box>
            <Box display="flex" alignItems="center" gap="20px">
              <Icon
                as={LuImagePlus}
                color="brand.color"
                fontSize="2rem"
                rounded="full"
                cursor={"pointer"}
                onClick={onOpen}
              ></Icon>
              <Button
                bg="brand.background-disabled"
                borderRadius="full"
                px="20px"
                py="0px"
                h="30px"
                color="white"
                display="flex"
                alignItems="center"
                type="submit"
              >
                reply
              </Button>
            </Box>
          </Box>
        </Flex>
      </Box>

      {thread?.replies && <ListThreads threads={thread?.replies}></ListThreads>}
    </Container>
  );
}
