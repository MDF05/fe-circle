import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Icon,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Textarea,
} from "@chakra-ui/react";
import { LuImagePlus } from "react-icons/lu";
import modalPostHook from "../hooks/use-modal-post-hooks";
import avatarImage from "../../assets/image/avatar.png";

export default function ModalPost() {
  const { isOpen, onClose, register, handleSubmit, submitEvent, prevImage, initialRef, finalRef, user, loading } = modalPostHook();

  return (
    <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay backdropFilter="blur(10px)" backgroundColor="rgba(128, 128, 128,0.1)" />
      <ModalContent
        background="brand.background"
        minW="45vw"
        left={{ base: "0px", lg: "-100px" }}
        minH="70vh"
        overflow="auto"
        rounded={"15px"}
        as={"form"}
        onSubmit={handleSubmit((event) => submitEvent(event))}
      >
        <ModalBody pb={6}>
          <Box display="flex" width="100%" mb="10px">
            <ModalCloseButton border="1px solid white" rounded="full" color="white" width="20px" height="20px" />
          </Box>
          <FormControl display="flex">
            <FormLabel>
              <Image src={user?.profile?.image ?? avatarImage} alt="user-profile" width={"50px"} height={"45px"} rounded={"full"}></Image>
            </FormLabel>
            <Textarea
              placeholder="What Is Happening?!"
              border="1px solid transparent"
              width="100%"
              height={"auto"}
              minH="20vh"
              maxH={"70vh"}
              resize="none"
              color="white"
              id="TextArea"
              _focusVisible={{
                borderColor: "transparent",
              }}
              _hover={{
                borderColor: "transparent",
              }}
              {...register("text")}
            />
          </FormControl>
          {prevImage && (
            <Grid justifyItems={"center"} padding={"0px 20px 0px 60px"}>
              <Image src={prevImage} alt="preview" width="100%"></Image>
            </Grid>
          )}
        </ModalBody>

        <ModalFooter display="flex" justifyContent="space-between" borderTop="1px solid grey" padding="20px 5px 20px 10px !important">
          <FormControl>
            <FormLabel>
              <Icon as={LuImagePlus} color="brand.color" fontSize="2rem" rounded="full"></Icon>
            </FormLabel>
            <Input type="file" hidden {...register("image")} />
          </FormControl>
          <Button type="submit" background="brand.color" mr={3} rounded={"full"} isLoading={loading}>
            Post
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
