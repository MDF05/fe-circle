import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Icon,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { LuImagePlus } from "react-icons/lu";
import ModalPostProps from "../types/modal-post";
import { ModalContext } from "../context/Modal-Post-Context";

export default function ModalPost({ avatarImage }: ModalPostProps) {
  const { isOpen, onClose } = useContext(ModalContext);

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay
        backdropFilter="blur(10px)"
        backgroundColor="rgba(128, 128, 128,0.1)"
      />
      <ModalContent
        background="brand.background"
        minW="45vw"
        left="-100px"
        minH="70vh"
        overflow="auto"
        rounded={"15px"}
      >
        <ModalBody pb={6}>
          <Box display="flex" width="100%" mb="10px">
            <Text> .</Text>
            <ModalCloseButton
              border="1px solid white"
              rounded="full"
              color="white"
              width="20px"
              height="20px"
            />
          </Box>
          <FormControl display="flex">
            <FormLabel>
              <Image src={avatarImage}></Image>
            </FormLabel>
            <Textarea
              ref={initialRef}
              placeholder="What Is Happening?!"
              border="1px solid transparent"
              width="100%"
              minH="40vh"
              resize="none"
              color="white"
              _focusVisible={{
                borderColor: "transparent",
              }}
              _hover={{
                borderColor: "transparent",
              }}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter
          display="flex"
          justifyContent="space-between"
          borderTop="1px solid grey"
          padding="20px 5px 20px 10px !important"
        >
          <Icon
            as={LuImagePlus}
            color="brand.color"
            fontSize="2rem"
            rounded="full"
          ></Icon>
          <Button background="brand.color" mr={3} rounded={"full"}>
            Post
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
