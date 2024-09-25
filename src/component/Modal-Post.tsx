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
  Textarea,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { LuImagePlus } from "react-icons/lu";
import { ModalHookForm } from "../types/modal-post";
import { ModalContext } from "../context/Modal-Post-Context";
import { useForm } from "react-hook-form";
import { useAppSelector } from "../hooks/use-store";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function ModalPost() {
  const { isOpen, onClose } = useContext(ModalContext);
  const { register, handleSubmit, watch } = useForm<ModalHookForm>();
  const [prevImage, setPrevImage] = useState<string | undefined>(undefined);
  let user = useAppSelector((state) => state.auth);
  const watchFile = watch(["image"]);
  const { state } = useLocation();

  useEffect(() => {
    if (watchFile[0]) {
      const image = watchFile[0][0];
      image && setPrevImage(URL.createObjectURL(image));
    } else {
      setPrevImage(undefined);
    }
  }, [watchFile[0]]);

  async function submitEvent(event: ModalHookForm) {
    const image: File = event.image[0];
    const text: string = event.text;
    const formData = new FormData();
    formData.append("image", image);
    formData.append("text", text);
    formData.append("profileId", user.profile.id);

    const api: string = "http://localhost:3000/api/v1/thread";
    if (state?.id) {
      formData.append("threadId", state.id);
    }
    const response = await axios.post<null, any, FormData>(api, formData);
    onClose();
  }

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
        as={"form"}
        onSubmit={handleSubmit((event) => submitEvent(event))}
      >
        <ModalBody pb={6}>
          <Box display="flex" width="100%" mb="10px">
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
              <Image src={user.profile.image} alt="user-profile"></Image>
            </FormLabel>
            <Textarea
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
              {...register("text")}
            />
          </FormControl>
          {prevImage && (
            <Image
              src={prevImage}
              alt="preview"
              width="100%"
              height="100%"
            ></Image>
          )}
        </ModalBody>

        <ModalFooter
          display="flex"
          justifyContent="space-between"
          borderTop="1px solid grey"
          padding="20px 5px 20px 10px !important"
        >
          <FormControl>
            <FormLabel>
              <Icon
                as={LuImagePlus}
                color="brand.color"
                fontSize="2rem"
                rounded="full"
              ></Icon>
            </FormLabel>
            <Input type="file" hidden {...register("image")} />
          </FormControl>
          <Button
            type="submit"
            background="brand.color"
            mr={3}
            rounded={"full"}
          >
            Post
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
