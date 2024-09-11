import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  Textarea,
  useDisclosure,
  ModalFooter,
} from "@chakra-ui/react";
import detaiPost from "../../../assets/image/detailPost.png";
import avatarImage from "../../../assets/image/avatar.png";
import { FaArrowLeftLong, FaRegHeart } from "react-icons/fa6";
import { TbMessage2 } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
import { LuImagePlus } from "react-icons/lu";
import React from "react";

export default function DetailPost() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <Container color="white" p="0 0 50px 0 ">
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
          height="70vh"
          overflow="auto"
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
            <Button
              colorScheme="silver"
              background="brand.color"
              mr={3}
              onClick={onOpen}
            >
              reply
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Flex height="50px" width="100%" alignItems="end" ps="20px">
        <Flex alignItems="center" gap="10px">
          <Icon as={FaArrowLeftLong} />
          <Text textTransform="capitalize">Status</Text>
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
            src={detaiPost}
            rounded="full"
            width="40px"
            height="40px"
          ></Image>
          <Flex flexDirection="column">
            <Text textTransform="capitalize">indah pra karay</Text>
            <Text color="grey">@indahpra</Text>
          </Flex>
        </Box>
        <Box>
          <Text>
            Kalian pernah ga sih bet on saving? Jadi by calculation sebenernya
            kita ga survive sampe tanggal tertentu. Tapi entah gimana bisa aja
            gitu. Ada aja jalannya
          </Text>
        </Box>
        <Box color="grey" display="flex" gap="5px">
          <Flex>11:32 PM</Flex>
          <Flex>● </Flex>
          <Flex>Jul 26, 2023</Flex>
        </Box>
        <Flex gap="20px" color="grey">
          <Flex gap="10px">
            <Icon
              as={FaHeart}
              fontSize="1.5rem"
              color="red"
              cursor="pointer"
            ></Icon>
            {/* <Icon as={FaRegHeart} fontSize="1.5rem" color="grey" cursor="pointer"></Icon> */}
            <Text>39</Text>
          </Flex>
          <Flex gap="10px">
            <Icon
              as={TbMessage2}
              fontSize="1.5rem"
              color="grey"
              cursor="pointer"
            ></Icon>
            <Text>291 Replies</Text>
          </Flex>
        </Flex>
      </Flex>
      <Box borderBottom="1px solid grey" p="20px 0px 20px 20px">
        <Flex width="90%">
          <Box display="flex" justifyContent="space-between" width="95%">
            <Box display="flex" gap="20px" alignItems="center">
              <Image src={avatarImage}></Image>
              <Text color="grey">Type your reply!</Text>
            </Box>
            <Box display="flex" alignItems="center" gap="20px">
              <Icon
                as={LuImagePlus}
                color="brand.color"
                fontSize="2rem"
                rounded="full"
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
                onClick={onOpen}
              >
                reply
              </Button>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box
        display="flex"
        gap="20px"
        padding="20px"
        flexDirection="column"
        borderBottom="1px solid grey"
      >
        <Box display="flex" gap="20px">
          <Image
            src={detaiPost}
            rounded="full"
            width="40px"
            height="40px"
          ></Image>
          <Flex flexDirection="column" gap="10px">
            <Flex flexDirection="row" color="grey" gap="3px">
              <Text textTransform="capitalize" color="white">
                indah pra karay
              </Text>
              <Text>@indahpra</Text>
              <Text>● </Text>
              <Text>4h</Text>
            </Flex>
            <Flex>
              <Text>
                Gw bg, kurleb 12bulan jobless, kondisi berumahtangga, jual2in
                gadget dll downgrade, sempat ada cahaya di jobless bulan ke8 krn
                diajak freelance eh ga dibayar berbulan2, tapi kok masih bisa
                survive, ada aja rejekinya, sampai hari pecah telor tiba pas
                kondisi bener2 0 duit
              </Text>
            </Flex>
            <Flex gap="20px" color="grey">
              <Flex gap="10px">
                <Icon
                  as={FaRegHeart}
                  fontSize="1.5rem"
                  color="grey"
                  cursor="pointer"
                ></Icon>
                <Text>75</Text>
              </Flex>
              <Flex gap="10px">
                <Icon
                  as={TbMessage2}
                  fontSize="1.5rem"
                  color="grey"
                  cursor="pointer"
                ></Icon>
                <Text>291 Replies</Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Box>
      <Box
        display="flex"
        gap="20px"
        padding="20px"
        flexDirection="column"
        borderBottom="1px solid grey"
      >
        <Box display="flex" gap="20px">
          <Image
            src={detaiPost}
            rounded="full"
            width="40px"
            height="40px"
          ></Image>
          <Flex flexDirection="column" gap="10px">
            <Flex flexDirection="row" color="grey" gap="3px">
              <Text textTransform="capitalize" color="white">
                indah pra karay
              </Text>
              <Text>@indahpra</Text>
              <Text>● </Text>
              <Text>4h</Text>
            </Flex>
            <Flex>
              <Text>
                Gw bg, kurleb 12bulan jobless, kondisi berumahtangga, jual2in
                gadget dll downgrade, sempat ada cahaya di jobless bulan ke8 krn
                diajak freelance eh ga dibayar berbulan2, tapi kok masih bisa
                survive, ada aja rejekinya, sampai hari pecah telor tiba pas
                kondisi bener2 0 duit
              </Text>
            </Flex>
            <Flex gap="20px" color="grey">
              <Flex gap="10px">
                <Icon
                  as={FaRegHeart}
                  fontSize="1.5rem"
                  color="grey"
                  cursor="pointer"
                ></Icon>
                <Text>75</Text>
              </Flex>
              <Flex gap="10px">
                <Icon
                  as={TbMessage2}
                  fontSize="1.5rem"
                  color="grey"
                  cursor="pointer"
                ></Icon>
                <Text>291 Replies</Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Box>
      <Box
        display="flex"
        gap="20px"
        padding="20px"
        flexDirection="column"
        borderBottom="1px solid grey"
      >
        <Box display="flex" gap="20px">
          <Image
            src={detaiPost}
            rounded="full"
            width="40px"
            height="40px"
          ></Image>
          <Flex flexDirection="column" gap="10px">
            <Flex flexDirection="row" color="grey" gap="3px">
              <Text textTransform="capitalize" color="white">
                indah pra karay
              </Text>
              <Text>@indahpra</Text>
              <Text>● </Text>
              <Text>4h</Text>
            </Flex>
            <Flex>
              <Text>
                Gw bg, kurleb 12bulan jobless, kondisi berumahtangga, jual2in
                gadget dll downgrade, sempat ada cahaya di jobless bulan ke8 krn
                diajak freelance eh ga dibayar berbulan2, tapi kok masih bisa
                survive, ada aja rejekinya, sampai hari pecah telor tiba pas
                kondisi bener2 0 duit
              </Text>
            </Flex>
            <Flex gap="20px" color="grey">
              <Flex gap="10px">
                <Icon
                  as={FaRegHeart}
                  fontSize="1.5rem"
                  color="grey"
                  cursor="pointer"
                ></Icon>
                <Text>75</Text>
              </Flex>
              <Flex gap="10px">
                <Icon
                  as={TbMessage2}
                  fontSize="1.5rem"
                  color="grey"
                  cursor="pointer"
                ></Icon>
                <Text>291 Replies</Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Box>
      <Box
        display="flex"
        gap="20px"
        padding="20px"
        flexDirection="column"
        borderBottom="1px solid grey"
      >
        <Box display="flex" gap="20px">
          <Image
            src={detaiPost}
            rounded="full"
            width="40px"
            height="40px"
          ></Image>
          <Flex flexDirection="column" gap="10px">
            <Flex flexDirection="row" color="grey" gap="3px">
              <Text textTransform="capitalize" color="white">
                indah pra karay
              </Text>
              <Text>@indahpra</Text>
              <Text>● </Text>
              <Text>4h</Text>
            </Flex>
            <Flex>
              <Text>
                Gw bg, kurleb 12bulan jobless, kondisi berumahtangga, jual2in
                gadget dll downgrade, sempat ada cahaya di jobless bulan ke8 krn
                diajak freelance eh ga dibayar berbulan2, tapi kok masih bisa
                survive, ada aja rejekinya, sampai hari pecah telor tiba pas
                kondisi bener2 0 duit
              </Text>
            </Flex>
            <Flex gap="20px" color="grey">
              <Flex gap="10px">
                <Icon
                  as={FaRegHeart}
                  fontSize="1.5rem"
                  color="grey"
                  cursor="pointer"
                ></Icon>
                <Text>75</Text>
              </Flex>
              <Flex gap="10px">
                <Icon
                  as={TbMessage2}
                  fontSize="1.5rem"
                  color="grey"
                  cursor="pointer"
                ></Icon>
                <Text>291 Replies</Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Box>
      <Box
        display="flex"
        gap="20px"
        padding="20px"
        flexDirection="column"
        borderBottom="1px solid grey"
      >
        <Box display="flex" gap="20px">
          <Image
            src={detaiPost}
            rounded="full"
            width="40px"
            height="40px"
          ></Image>
          <Flex flexDirection="column" gap="10px">
            <Flex flexDirection="row" color="grey" gap="3px">
              <Text textTransform="capitalize" color="white">
                indah pra karay
              </Text>
              <Text>@indahpra</Text>
              <Text>● </Text>
              <Text>4h</Text>
            </Flex>
            <Flex>
              <Text>
                Gw bg, kurleb 12bulan jobless, kondisi berumahtangga, jual2in
                gadget dll downgrade, sempat ada cahaya di jobless bulan ke8 krn
                diajak freelance eh ga dibayar berbulan2, tapi kok masih bisa
                survive, ada aja rejekinya, sampai hari pecah telor tiba pas
                kondisi bener2 0 duit
              </Text>
            </Flex>
            <Flex gap="20px" color="grey">
              <Flex gap="10px">
                <Icon
                  as={FaRegHeart}
                  fontSize="1.5rem"
                  color="grey"
                  cursor="pointer"
                ></Icon>
                <Text>75</Text>
              </Flex>
              <Flex gap="10px">
                <Icon
                  as={TbMessage2}
                  fontSize="1.5rem"
                  color="grey"
                  cursor="pointer"
                ></Icon>
                <Text>291 Replies</Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Box>
      <Box
        display="flex"
        gap="20px"
        padding="20px"
        flexDirection="column"
        borderBottom="1px solid grey"
      >
        <Box display="flex" gap="20px">
          <Image
            src={detaiPost}
            rounded="full"
            width="40px"
            height="40px"
          ></Image>
          <Flex flexDirection="column" gap="10px">
            <Flex flexDirection="row" color="grey" gap="3px">
              <Text textTransform="capitalize" color="white">
                indah pra karay
              </Text>
              <Text>@indahpra</Text>
              <Text>● </Text>
              <Text>4h</Text>
            </Flex>
            <Flex>
              <Text>
                Gw bg, kurleb 12bulan jobless, kondisi berumahtangga, jual2in
                gadget dll downgrade, sempat ada cahaya di jobless bulan ke8 krn
                diajak freelance eh ga dibayar berbulan2, tapi kok masih bisa
                survive, ada aja rejekinya, sampai hari pecah telor tiba pas
                kondisi bener2 0 duit
              </Text>
            </Flex>
            <Flex gap="20px" color="grey">
              <Flex gap="10px">
                <Icon
                  as={FaRegHeart}
                  fontSize="1.5rem"
                  color="grey"
                  cursor="pointer"
                ></Icon>
                <Text>75</Text>
              </Flex>
              <Flex gap="10px">
                <Icon
                  as={TbMessage2}
                  fontSize="1.5rem"
                  color="grey"
                  cursor="pointer"
                ></Icon>
                <Text>291 Replies</Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Box>
      <Box
        display="flex"
        gap="20px"
        padding="20px"
        flexDirection="column"
        borderBottom="1px solid grey"
      >
        <Box display="flex" gap="20px">
          <Image
            src={detaiPost}
            rounded="full"
            width="40px"
            height="40px"
          ></Image>
          <Flex flexDirection="column" gap="10px">
            <Flex flexDirection="row" color="grey" gap="3px">
              <Text textTransform="capitalize" color="white">
                indah pra karay
              </Text>
              <Text>@indahpra</Text>
              <Text>● </Text>
              <Text>4h</Text>
            </Flex>
            <Flex>
              <Text>
                Gw bg, kurleb 12bulan jobless, kondisi berumahtangga, jual2in
                gadget dll downgrade, sempat ada cahaya di jobless bulan ke8 krn
                diajak freelance eh ga dibayar berbulan2, tapi kok masih bisa
                survive, ada aja rejekinya, sampai hari pecah telor tiba pas
                kondisi bener2 0 duit
              </Text>
            </Flex>
            <Flex gap="20px" color="grey">
              <Flex gap="10px">
                <Icon
                  as={FaRegHeart}
                  fontSize="1.5rem"
                  color="grey"
                  cursor="pointer"
                ></Icon>
                <Text>75</Text>
              </Flex>
              <Flex gap="10px">
                <Icon
                  as={TbMessage2}
                  fontSize="1.5rem"
                  color="grey"
                  cursor="pointer"
                ></Icon>
                <Text>291 Replies</Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Box>
      <Box
        display="flex"
        gap="20px"
        padding="20px"
        flexDirection="column"
        borderBottom="1px solid grey"
      >
        <Box display="flex" gap="20px">
          <Image
            src={detaiPost}
            rounded="full"
            width="40px"
            height="40px"
          ></Image>
          <Flex flexDirection="column" gap="10px">
            <Flex flexDirection="row" color="grey" gap="3px">
              <Text textTransform="capitalize" color="white">
                indah pra karay
              </Text>
              <Text>@indahpra</Text>
              <Text>● </Text>
              <Text>4h</Text>
            </Flex>
            <Flex>
              <Text>
                Gw bg, kurleb 12bulan jobless, kondisi berumahtangga, jual2in
                gadget dll downgrade, sempat ada cahaya di jobless bulan ke8 krn
                diajak freelance eh ga dibayar berbulan2, tapi kok masih bisa
                survive, ada aja rejekinya, sampai hari pecah telor tiba pas
                kondisi bener2 0 duit
              </Text>
            </Flex>
            <Flex gap="20px" color="grey">
              <Flex gap="10px">
                <Icon
                  as={FaRegHeart}
                  fontSize="1.5rem"
                  color="grey"
                  cursor="pointer"
                ></Icon>
                <Text>75</Text>
              </Flex>
              <Flex gap="10px">
                <Icon
                  as={TbMessage2}
                  fontSize="1.5rem"
                  color="grey"
                  cursor="pointer"
                ></Icon>
                <Text>291 Replies</Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Box>
      <Box
        display="flex"
        gap="20px"
        padding="20px"
        flexDirection="column"
        borderBottom="1px solid grey"
      >
        <Box display="flex" gap="20px">
          <Image
            src={detaiPost}
            rounded="full"
            width="40px"
            height="40px"
          ></Image>
          <Flex flexDirection="column" gap="10px">
            <Flex flexDirection="row" color="grey" gap="3px">
              <Text textTransform="capitalize" color="white">
                indah pra karay
              </Text>
              <Text>@indahpra</Text>
              <Text>● </Text>
              <Text>4h</Text>
            </Flex>
            <Flex>
              <Text>
                Gw bg, kurleb 12bulan jobless, kondisi berumahtangga, jual2in
                gadget dll downgrade, sempat ada cahaya di jobless bulan ke8 krn
                diajak freelance eh ga dibayar berbulan2, tapi kok masih bisa
                survive, ada aja rejekinya, sampai hari pecah telor tiba pas
                kondisi bener2 0 duit
              </Text>
            </Flex>
            <Flex gap="20px" color="grey">
              <Flex gap="10px">
                <Icon
                  as={FaRegHeart}
                  fontSize="1.5rem"
                  color="grey"
                  cursor="pointer"
                ></Icon>
                <Text>75</Text>
              </Flex>
              <Flex gap="10px">
                <Icon
                  as={TbMessage2}
                  fontSize="1.5rem"
                  color="grey"
                  cursor="pointer"
                ></Icon>
                <Text>291 Replies</Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Container>
  );
}
