import { Box, Flex, Grid, Icon, Image, Text, Button } from "@chakra-ui/react";
import listImage from "../../../assets/image/list-profile-2.png";
import avatarimage from "../../../assets/image/avatar.png";
import avatarimage2 from "../../../assets/image/profile-avatar.png";
import { FaHeart } from "react-icons/fa6";
import { TbMessage2 } from "react-icons/tb";
import { LuImagePlus } from "react-icons/lu";
import { IoIosArrowDropright, IoIosCloseCircleOutline } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DetailImagePage() {
  const [fullScreenImage, setFullScreenImage] = useState<boolean>(false);
  const Navigate = useNavigate();

  return (
    <Grid
      width={"100%"}
      gridTemplateColumns={fullScreenImage ? "100%" : "60% 40%"}
      p={"0px 5px"}
      color={"white"}
    >
      <Grid
        p={"0px 10px"}
        h={"100vh"}
        overflowY={"auto"}
        overflowX={"hidden"}
        position={"relative"}
        justifyItems={"center"}
      >
        <Image
          src={listImage}
          width={fullScreenImage ? "80%" : "100%"}
          onClick={() => setFullScreenImage(!fullScreenImage)}
        ></Image>
        <Flex
          position={"absolute"}
          top={"10px"}
          justifyContent={"space-between"}
          width={"100%"}
          pe={"20px"}
        >
          <Icon
            as={IoIosCloseCircleOutline}
            color={"white"}
            fontSize={"30px"}
            onClick={() => Navigate(-1)}
          ></Icon>
          <Icon
            as={IoIosArrowDropright}
            color={"white"}
            fontSize={"30px"}
          ></Icon>
        </Flex>
      </Grid>
      {!fullScreenImage && (
        <Box
          display={"flex"}
          flexDirection={"column"}
          borderLeft={"1px solid grey"}
          h={"100vh"}
          overflow={"auto"}
        >
          <Flex gap={"15px"} borderBottom={"1px solid grey"} p={"10px"}>
            <Image
              src={avatarimage}
              height={"50px"}
              width={"50px"}
              rounded={"full"}
            ></Image>
            <Flex gap={"15px"} flexDirection={"column"}>
              <Flex gap={"5px"}>
                <Text>✨ Stella Audhina ✨</Text>
                <Text as={"p"} color={"grey"}>
                  @audhinafh
                </Text>
                <Text as={"p"} color={"grey"}>
                  •
                </Text>
                <Text as={"p"} color={"grey"}>
                  12h
                </Text>
              </Flex>
              <Flex>
                Yg miss menurut gw minum sih. Mango lassi ok aja, mangga
                melimpah tp sisanya yauda, gw punya standar lbh tinggi di
                goodlife 🙏🏼 Zonknya: butter milk. Udah diperingatkan mbanya
                sampe "beneran mau kak??? Takut ga cocok" tp laki gw nekat
                pesen. Rasanya kek kuah sop dikulkasin 👍🏼👍🏼
              </Flex>
              <Flex gap="20px">
                <Box>
                  <Icon
                    as={FaHeart}
                    fontSize="1.5rem"
                    color="red"
                    cursor="pointer"
                  ></Icon>
                  {/* <Icon as={FaRegHeart} fontSize="1.5rem" color="grey" cursor="pointer"></Icon> */}
                </Box>
                <Box>
                  <Icon
                    as={TbMessage2}
                    fontSize="1.5rem"
                    color="grey"
                    cursor="pointer"
                  ></Icon>
                </Box>
              </Flex>
            </Flex>
          </Flex>
          <Flex p={"15px"} gap={"15px"} borderBottom={"1px solid grey"}>
            <Image
              src={avatarimage2}
              height={"50px"}
              width={"50px"}
              rounded={"full"}
            ></Image>
            <Box
              display="flex"
              alignItems="center"
              gap="20px"
              justifyContent={"space-between"}
              width="100%"
            >
              <Text color={"grey"}>Type Your Reply!</Text>
              <Flex gap={"15px"}>
                <Icon
                  as={LuImagePlus}
                  color="brand.color"
                  fontSize="2rem"
                  rounded="full"
                ></Icon>
                <Button
                  bg="brand.background-disabled"
                  borderRadius="full"
                  px="30px"
                  py="0px"
                  h="40px"
                  color="white"
                >
                  Reply
                </Button>
              </Flex>
            </Box>
          </Flex>
          <Flex gap={"15px"} borderBottom={"1px solid grey"} p={"10px"}>
            <Image
              src={avatarimage}
              height={"50px"}
              width={"50px"}
              rounded={"full"}
            ></Image>
            <Flex gap={"15px"} flexDirection={"column"}>
              <Flex gap={"5px"}>
                <Text>✨ Stella Audhina ✨</Text>
                <Text as={"p"} color={"grey"}>
                  @audhinafh
                </Text>
                <Text as={"p"} color={"grey"}>
                  •
                </Text>
                <Text as={"p"} color={"grey"}>
                  12h
                </Text>
              </Flex>
              <Flex>
                Yg miss menurut gw minum sih. Mango lassi ok aja, mangga
                melimpah tp sisanya yauda, gw punya standar lbh tinggi di
                goodlife 🙏🏼 Zonknya: butter milk. Udah diperingatkan mbanya
                sampe "beneran mau kak??? Takut ga cocok" tp laki gw nekat
                pesen. Rasanya kek kuah sop dikulkasin 👍🏼👍🏼
              </Flex>
              <Flex gap="20px">
                <Box>
                  <Icon
                    as={FaHeart}
                    fontSize="1.5rem"
                    color="red"
                    cursor="pointer"
                  ></Icon>
                  {/* <Icon as={FaRegHeart} fontSize="1.5rem" color="grey" cursor="pointer"></Icon> */}
                </Box>
                <Box>
                  <Icon
                    as={TbMessage2}
                    fontSize="1.5rem"
                    color="grey"
                    cursor="pointer"
                  ></Icon>
                </Box>
              </Flex>
            </Flex>
          </Flex>
          <Flex gap={"15px"} borderBottom={"1px solid grey"} p={"10px"}>
            <Image
              src={avatarimage}
              height={"50px"}
              width={"50px"}
              rounded={"full"}
            ></Image>
            <Flex gap={"15px"} flexDirection={"column"}>
              <Flex gap={"5px"}>
                <Text>✨ Stella Audhina ✨</Text>
                <Text as={"p"} color={"grey"}>
                  @audhinafh
                </Text>
                <Text as={"p"} color={"grey"}>
                  •
                </Text>
                <Text as={"p"} color={"grey"}>
                  12h
                </Text>
              </Flex>
              <Flex>
                Yg miss menurut gw minum sih. Mango lassi ok aja, mangga
                melimpah tp sisanya yauda, gw punya standar lbh tinggi di
                goodlife 🙏🏼 Zonknya: butter milk. Udah diperingatkan mbanya
                sampe "beneran mau kak??? Takut ga cocok" tp laki gw nekat
                pesen. Rasanya kek kuah sop dikulkasin 👍🏼👍🏼
              </Flex>
              <Flex gap="20px">
                <Box>
                  <Icon
                    as={FaHeart}
                    fontSize="1.5rem"
                    color="red"
                    cursor="pointer"
                  ></Icon>
                  {/* <Icon as={FaRegHeart} fontSize="1.5rem" color="grey" cursor="pointer"></Icon> */}
                </Box>
                <Box>
                  <Icon
                    as={TbMessage2}
                    fontSize="1.5rem"
                    color="grey"
                    cursor="pointer"
                  ></Icon>
                </Box>
              </Flex>
            </Flex>
          </Flex>
          <Flex gap={"15px"} borderBottom={"1px solid grey"} p={"10px"}>
            <Image
              src={avatarimage}
              height={"50px"}
              width={"50px"}
              rounded={"full"}
            ></Image>
            <Flex gap={"15px"} flexDirection={"column"}>
              <Flex gap={"5px"}>
                <Text>✨ Stella Audhina ✨</Text>
                <Text as={"p"} color={"grey"}>
                  @audhinafh
                </Text>
                <Text as={"p"} color={"grey"}>
                  •
                </Text>
                <Text as={"p"} color={"grey"}>
                  12h
                </Text>
              </Flex>
              <Flex>
                Yg miss menurut gw minum sih. Mango lassi ok aja, mangga
                melimpah tp sisanya yauda, gw punya standar lbh tinggi di
                goodlife 🙏🏼 Zonknya: butter milk. Udah diperingatkan mbanya
                sampe "beneran mau kak??? Takut ga cocok" tp laki gw nekat
                pesen. Rasanya kek kuah sop dikulkasin 👍🏼👍🏼
              </Flex>
              <Flex gap="20px">
                <Box>
                  <Icon
                    as={FaHeart}
                    fontSize="1.5rem"
                    color="red"
                    cursor="pointer"
                  ></Icon>
                  {/* <Icon as={FaRegHeart} fontSize="1.5rem" color="grey" cursor="pointer"></Icon> */}
                </Box>
                <Box>
                  <Icon
                    as={TbMessage2}
                    fontSize="1.5rem"
                    color="grey"
                    cursor="pointer"
                  ></Icon>
                </Box>
              </Flex>
            </Flex>
          </Flex>
          <Flex gap={"15px"} borderBottom={"1px solid grey"} p={"10px"}>
            <Image
              src={avatarimage}
              height={"50px"}
              width={"50px"}
              rounded={"full"}
            ></Image>
            <Flex gap={"15px"} flexDirection={"column"}>
              <Flex gap={"5px"}>
                <Text>✨ Stella Audhina ✨</Text>
                <Text as={"p"} color={"grey"}>
                  @audhinafh
                </Text>
                <Text as={"p"} color={"grey"}>
                  •
                </Text>
                <Text as={"p"} color={"grey"}>
                  12h
                </Text>
              </Flex>
              <Flex>
                Yg miss menurut gw minum sih. Mango lassi ok aja, mangga
                melimpah tp sisanya yauda, gw punya standar lbh tinggi di
                goodlife 🙏🏼 Zonknya: butter milk. Udah diperingatkan mbanya
                sampe "beneran mau kak??? Takut ga cocok" tp laki gw nekat
                pesen. Rasanya kek kuah sop dikulkasin 👍🏼👍🏼
              </Flex>
              <Flex gap="20px">
                <Box>
                  <Icon
                    as={FaHeart}
                    fontSize="1.5rem"
                    color="red"
                    cursor="pointer"
                  ></Icon>
                  {/* <Icon as={FaRegHeart} fontSize="1.5rem" color="grey" cursor="pointer"></Icon> */}
                </Box>
                <Box>
                  <Icon
                    as={TbMessage2}
                    fontSize="1.5rem"
                    color="grey"
                    cursor="pointer"
                  ></Icon>
                </Box>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      )}
    </Grid>
  );
}
