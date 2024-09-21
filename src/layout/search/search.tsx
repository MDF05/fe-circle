import { Box, Flex, Icon, Input, InputGroup, Text } from "@chakra-ui/react";
import { MdPersonSearch } from "react-icons/md";

export default function Search() {
  return (
    <Box>
      <Flex
        color={"white"}
        padding={"0px 10px"}
        height={"70px"}
        alignItems={"end"}
      >
        <InputGroup position={"relative"}>
          <Input
            placeholder="search your friend"
            rounded={"full"}
            padding={"0px 0px 0px 40px"}
            bg={"rgba(63, 63, 63, 1)"}
          />
          <Icon
            as={MdPersonSearch}
            width={"30px"}
            height={"30px"}
            color={"rgb(101, 114, 133)"}
            position={"absolute"}
            zIndex={"1000"}
            top={"5px"}
            left={"10px"}
          ></Icon>
        </InputGroup>
      </Flex>
      <Flex
        height={"calc(100vh - 70px)"}
        bg={"r"}
        color={"white"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box width={"350px"} textAlign={"center"}>
          <Text as={"h5"}>No results for “asmorncd”</Text>
          <Text as={"p"} color={"grey"}>
            Try searching for something else or check the spelling of what you
            typed.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
