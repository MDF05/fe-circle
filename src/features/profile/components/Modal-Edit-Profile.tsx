import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Icon,
  Image,
  Input,
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
import ModalPostProps from "../../../types/modal-post";
import { EditProfileContext } from "../../../context/Modal-Edit-Profile";
import cover from "../../../../assets/image/cover.png";

export default function EditProfileComp({ avatarImage }: ModalPostProps) {
  const { isOpen, onClose } = useContext(EditProfileContext);

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
        backdropFilter="blur(5px)"
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
            <Text color={"white"}> Edit Profile</Text>
            <ModalCloseButton
              border="1px solid grey"
              rounded="full"
              color="grey"
              width="20px"
              height="20px"
            />
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={"20px"}
            color={"white"}
          >
            <FormControl>
              <FormLabel>
                <Image
                  src={cover}
                  alt="cover"
                  rounded="15px"
                  width="100%"
                ></Image>
                <Icon
                  as={LuImagePlus}
                  bg={"brand.background"}
                  position={"absolute"}
                  top={"40px"}
                  left={"50%"}
                  rounded={"full"}
                  opacity={0.8}
                  p="5px"
                  fontSize={"50px"}
                ></Icon>
              </FormLabel>
              <Input type="file" hidden></Input>
            </FormControl>
            <FormControl>
              <FormLabel>
                <Image
                  src={avatarImage}
                  alt="cover"
                  rounded="full"
                  height={"90px"}
                  width={"90px"}
                  background={"brand.background"}
                  padding={"5px"}
                  position={"absolute"}
                  top={"-80px"}
                  left={"25px"}
                />
                <Icon
                  as={LuImagePlus}
                  bg={"brand.background"}
                  position={"absolute"}
                  top={"-50px"}
                  left={"50px"}
                  rounded={"full"}
                  opacity={0.8}
                  p="5px"
                  fontSize={"30px"}
                ></Icon>
              </FormLabel>
              <Input type="file" hidden></Input>
            </FormControl>
            <FormControl>
              <Input
                type="text"
                value={"✨ Stella Audhina ✨"}
                pt={"30px"}
                pb={"10px"}
                height={"50px"}
              ></Input>
              <Text
                position={"absolute"}
                top={"0px"}
                left={"10px"}
                color={"gray"}
              >
                Name
              </Text>
            </FormControl>
            <FormControl>
              <Input
                type="text"
                value={"audhinafh"}
                pt={"30px"}
                pb={"10px"}
                height={"50px"}
              ></Input>
              <Text
                position={"absolute"}
                top={"0px"}
                left={"10px"}
                color={"gray"}
              >
                Username
              </Text>
            </FormControl>
            <FormControl>
              <Textarea
                resize={"none"}
                value={"picked over by the worms, and weird fishes"}
                pt={"20px"}
                pb={"10px"}
                height={"50px"}
              ></Textarea>
              <Text
                position={"absolute"}
                top={"0px"}
                left={"10px"}
                color={"gray"}
              >
                Bio
              </Text>
            </FormControl>
          </Box>
        </ModalBody>

        <ModalFooter
          display="flex"
          justifyContent="end"
          borderTop="1px solid grey"
          padding="20px 5px 20px 10px !important"
        >
          <Button
            background="brand.color"
            mr={3}
            rounded={"full"}
            color={"white"}
          >
            save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
