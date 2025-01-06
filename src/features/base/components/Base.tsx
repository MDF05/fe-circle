import { Box, Text, Image, Button, Icon, Input, FormControl } from "@chakra-ui/react";

import { LuImagePlus } from "react-icons/lu";
import ModalPost from "../../../component/Modal-Post";
import { ReactElement } from "react";
import ListThreads from "./List-Thread";
import useBase from "../hook/use-base";
import avatarImage from "../../../../assets/image/avatar.png";
import SideBarLeft from "../../../component/Sidebar-Left";

export default function Base(): ReactElement {
  const { threads, handleSubmit, register, errors, user, onSubmit, onOpen, loading } = useBase();

  return (
    <Box position="relative">
      <ModalPost></ModalPost>
      <Box display={{ base: "flex", lg: "none" }}>
        <SideBarLeft></SideBarLeft>
      </Box>
      <Box>
        <Text as="h1" color="white" height="50px" display="flex" alignItems="end" px="10px" fontWeight="bold">
          Home
        </Text>
      </Box>
      <Box px="10px" py="20px" borderBottom="1px solid grey" color="grey">
        <FormControl as={"form"} display="flex" justifyContent="space-between" width="95%" onSubmit={handleSubmit(onSubmit)} isInvalid={errors.text != undefined}>
          <Box display="flex" gap="10px" alignItems="center" width={"Calc(100% - 150px)"}>
            <Image src={user?.profile?.image ?? avatarImage} alt="user-profile" width={"50px"} height={"45px"} objectFit={"cover"} rounded="full"></Image>
            <Input color={"white"} type={"text"} placeholder="What Is Hapenning?" {...register("text")} border={"none"} _focusVisible={{ border: "none" }} width={"100%"}></Input>
          </Box>
          <Box display="flex" alignItems="center" gap="20px">
            <Icon as={LuImagePlus} color="brand.color" fontSize="2rem" rounded="full" cursor={"pointer"} onClick={onOpen}></Icon>
            <Button bg="brand.background-disabled" borderRadius="full" px="30px" py="0px" h="40px" color="white" type="submit" isLoading={loading}>
              Post
            </Button>
          </Box>
        </FormControl>
      </Box>
      {threads && <ListThreads threads={threads}></ListThreads>}
    </Box>
  );
}
