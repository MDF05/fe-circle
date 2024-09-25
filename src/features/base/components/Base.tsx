import {
  Box,
  Text,
  Image,
  Button,
  Icon,
  Input,
  FormControl,
} from "@chakra-ui/react";

import { LuImagePlus } from "react-icons/lu";
import { ModalContext } from "../../../context/Modal-Post-Context";
import ModalPost from "../../../component/Modal-Post";
import { useContext, useEffect, useState } from "react";
import ListThreads from "./List-Thread";
import axios from "axios";
import threadsEntity from "../../../entities/thread-entity";
import usePostThreadText from "../hooks/use-thread-text-form";
import { useAppSelector } from "../../../hooks/use-store";

export default function Base() {
  const { onOpen, isOpen } = useContext(ModalContext);
  const [threads, setThreads] = useState<threadsEntity[]>([]);
  const { register, onSubmit, handleSubmit, errors, isSubmitted } =
    usePostThreadText();
  const user = useAppSelector((state) => state.auth);

  useEffect(() => {
    const threadsData = axios.get("http://localhost:3000/api/v1/thread");
    threadsData.then((response) => {
      setThreads(response.data.data);
    });
  }, [isOpen, isSubmitted]);

  return (
    <Box position="relative">
      <ModalPost></ModalPost>
      <Box>
        <Text
          as="h1"
          color="white"
          height="50px"
          display="flex"
          alignItems="end"
          px="10px"
          fontWeight="bold"
        >
          Home
        </Text>
      </Box>
      <Box px="10px" py="20px" borderBottom="1px solid grey" color="grey">
        <FormControl
          as={"form"}
          display="flex"
          justifyContent="space-between"
          width="95%"
          onSubmit={handleSubmit(onSubmit)}
          isInvalid={errors.text != undefined}
        >
          <Box
            display="flex"
            gap="20px"
            alignItems="center"
            width={"Calc(100% - 150px)"}
          >
            <Image src={user.profile.image} alt="user-profile"></Image>
            <Input
              color={"white"}
              type={"text"}
              placeholder="What Is Hapenning?"
              {...register("text")}
              border={"none"}
              _focusVisible={{ border: "none" }}
              width={"100%"}
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
              px="30px"
              py="0px"
              h="40px"
              color="white"
              type="submit"
            >
              Post
            </Button>
          </Box>
        </FormControl>
      </Box>
      <ListThreads isOpenModal={isOpen} threads={threads}></ListThreads>
    </Box>
  );
}
