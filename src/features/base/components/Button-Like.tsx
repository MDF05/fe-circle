import { Flex, Icon, Text } from "@chakra-ui/react";
import ChakraLink from "../../../component/Chakra-Link-Router";
import { TbMessage2 } from "react-icons/tb";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import useThread from "../hook/use-thread";
import { ThreadDTO } from "../../../dto/thread-DTO";
import { LoadingPage } from "../../../component/Loading-Page";

export default function ButtonLike({ thread }: { thread: ThreadDTO }) {
  const { handleLike, handleResetLike, handleSubmit, countLike, likeId, pathname,loading } = useThread(thread);

  

  return (
    <Flex gap="20px" color={"grey"}>
      {loading ? <LoadingPage></LoadingPage> :
      <Flex as={"form"} alignItems={"center"} gap={"5px"} onSubmit={handleSubmit(() => handleLike())} onReset={handleSubmit(() => handleResetLike())}>
        {likeId !== null ? (
          <Flex as="button" type="reset">
            <Icon as={FaHeart} fontSize="1.5rem" color="red" cursor="pointer"></Icon>
          </Flex>
        ) : (
          <Flex as="button" type="submit">
            <Icon as={FaRegHeart} fontSize="1.5rem" color="grey" cursor="pointer"></Icon>
          </Flex>
        )}
        {countLike}
        {pathname != "/" && <Text>Likes</Text>}
      </Flex>}
      <Flex alignItems={"center"} gap={"5px"}>
        <ChakraLink to={`/thread/${thread.id}`} state={{ id: `${thread.id}` }} display={"grid"} alignItems={"center"}>
          <Icon as={TbMessage2} fontSize="1.5rem" color="grey" cursor="pointer"></Icon>
        </ChakraLink>
        {thread?._count?.replies}
        {pathname != "/" && <Text>Replies</Text>}
      </Flex>
    </Flex>
  );
}
