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
import { LuImagePlus } from "react-icons/lu";
import ModalPostProps from "../../../types/modal-post";
import useEditProfile from "../hooks/use-edit-profile";

import avatarImage from "../../../../assets/image/avatar.png";
import coverImage from "../../../../assets/image/cover.png";

export default function EditProfileComp({ Profile }: ModalPostProps) {
  const { cover, handleSubmit, register, submitProfile, isOpen, onClose, image, reset } = useEditProfile(Profile);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay backdropFilter="blur(5px)" backgroundColor="rgba(128, 128, 128,0.1)" />
      <ModalContent
        background="brand.background"
        minW="45vw"
        left="-100px"
        minH="70vh"
        overflow="auto"
        rounded={"15px"}
        as={"form"}
        onSubmit={handleSubmit((data) => submitProfile(data))}
      >
        <ModalBody pb={6}>
          <Box display="flex" width="100%" mb="10px">
            <Text color={"white"}> Edit Profile</Text>
            <ModalCloseButton border="1px solid grey" rounded="full" color="grey" width="20px" height="20px" />
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={"20px"} color={"white"}>
            <FormControl>
              <FormLabel>
                <Image src={cover || Profile?.cover || coverImage} alt="cover" rounded="15px" width="100%" height="200px"></Image>
                <Icon as={LuImagePlus} bg={"brand.background"} position={"absolute"} top={"40px"} left={"50%"} rounded={"full"} opacity={0.8} p="5px" fontSize={"50px"}></Icon>
              </FormLabel>
              <Input type="file" hidden {...register("cover")}></Input>
            </FormControl>
            <FormControl>
              <FormLabel>
                <Image
                  src={image || Profile?.image || avatarImage}
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
                <Icon as={LuImagePlus} bg={"brand.background"} position={"absolute"} top={"-50px"} left={"50px"} rounded={"full"} opacity={0.8} p="5px" fontSize={"30px"}></Icon>
              </FormLabel>
              <Input type="file" hidden {...register("image")}></Input>
            </FormControl>
            <FormControl>
              <Input type="text" pt={"30px"} pb={"10px"} height={"50px"} {...register("fullName")}></Input>
              <Text position={"absolute"} top={"0px"} left={"10px"} color={"gray"}>
                Name
              </Text>
            </FormControl>
            <FormControl>
              <Input type="text" pt={"30px"} pb={"10px"} height={"50px"} {...register("username")}></Input>
              <Text position={"absolute"} top={"0px"} left={"10px"} color={"gray"}>
                Username
              </Text>
            </FormControl>
            <FormControl>
              <Textarea resize={"none"} pt={"20px"} pb={"10px"} height={"50px"} {...register("bio")}></Textarea>
              <Text position={"absolute"} top={"0px"} left={"10px"} color={"gray"}>
                Bio
              </Text>
            </FormControl>
          </Box>
        </ModalBody>

        <ModalFooter display="flex" justifyContent="end" borderTop="1px solid grey" padding="20px 5px 20px 10px !important">
          <Button background="red" mr={3} rounded={"full"} color={"white"} onClick={() => reset()}>
            cancel
          </Button>
          <Button background="brand.color" mr={3} rounded={"full"} color={"white"} type="submit">
            save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
