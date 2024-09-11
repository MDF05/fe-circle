import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import avatar from "../../../../assets/image/avatar.png";
import listProfile1 from "../../../../assets/image/listprofile-1.png";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { TbMessage2 } from "react-icons/tb";

export default function AllPostComponent() {
  return (
    <Flex gap={"40px"} flexDirection={"column"} pb={"50px"}>
      <Box
        display="flex"
        gap="20px"
        padding={"10px 20px"}
        alignItems="start"
        borderBottom={"border.grey"}
        width="100%"
      >
        <Image src={avatar}></Image>
        <Box display="flex" flexDirection="column" gap="15px">
          <Flex gap="10px">
            <Text as="span">✨ Stella Audhina ✨</Text>
            <Text as="span" color="grey">
              @audhinafh
            </Text>
            <Text as="span" color="grey">
              4h
            </Text>
          </Flex>
          <Box>
            <Text>Well beauty is in the eye of the beholder</Text>
          </Box>
          <Flex gap="20px" color={"grey"}>
            <Box display={"flex"} gap={"10px"}>
              <Icon
                as={FaHeart}
                fontSize="1.5rem"
                color="red"
                cursor="pointer"
              ></Icon>
              <Text>29</Text>
              {/* <Icon as={FaRegHeart} fontSize="1.5rem" color="grey" cursor="pointer"></Icon> */}
            </Box>
            <Box display={"flex"} gap={"10px"}>
              <Icon
                as={TbMessage2}
                fontSize="1.5rem"
                color="grey"
                cursor="pointer"
              ></Icon>
              <Text>381</Text>
              <Text>Replies</Text>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box
        display="flex"
        gap="20px"
        padding={"10px 20px"}
        alignItems="start"
        borderBottom={"border.grey"}
        width="100%"
      >
        <Image src={avatar}></Image>
        <Box display="flex" flexDirection="column" gap="15px">
          <Flex gap="10px">
            <Text as="span">✨ Stella Audhina ✨</Text>
            <Text as="span" color="grey">
              @audhinafh
            </Text>
            <Text as="span" color="grey">
              4h
            </Text>
          </Flex>
          <Box>
            <Text>
              Yg miss menurut gw minum sih. Mango lassi ok aja, mangga melimpah
              tp sisanya yauda, gw punya standar lbh tinggi di goodlife 🙏🏼
              <br />
              <br />
              Zonknya: butter milk. Udah diperingatkan mbanya sampe "beneran mau
              kak??? Takut ga cocok" tp laki gw nekat pesen. Rasanya kek kuah
              sop dikulkasin 👍🏼👍🏼
            </Text>
          </Box>
          <Flex>
            <Image src={listProfile1}></Image>
          </Flex>
          <Flex gap="20px" color={"grey"}>
            <Box display={"flex"} gap={"10px"}>
              <Icon
                as={FaHeart}
                fontSize="1.5rem"
                color="red"
                cursor="pointer"
              ></Icon>
              <Text>31</Text>
              {/* <Icon as={FaRegHeart} fontSize="1.5rem" color="grey" cursor="pointer"></Icon> */}
            </Box>
            <Box display={"flex"} gap={"10px"}>
              <Icon
                as={TbMessage2}
                fontSize="1.5rem"
                color="grey"
                cursor="pointer"
              ></Icon>
              <Text>31</Text>
              <Text>Replies</Text>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box
        display="flex"
        gap="20px"
        padding={"10px 20px"}
        alignItems="start"
        borderBottom={"border.grey"}
        width="100%"
      >
        <Image src={avatar}></Image>
        <Box display="flex" flexDirection="column" gap="15px">
          <Flex gap="10px">
            <Text as="span">✨ Stella Audhina ✨</Text>
            <Text as="span" color="grey">
              @audhinafh
            </Text>
            <Text as="span" color="grey">
              4h
            </Text>
          </Flex>
          <Box>
            <Text>
              Yg miss menurut gw minum sih. Mango lassi ok aja, mangga melimpah
              tp sisanya yauda, gw punya standar lbh tinggi di goodlife 🙏🏼
              Zonknya: butter milk. Udah diperingatkan mbanya sampe "beneran mau
              kak??? Takut ga cocok" tp laki gw nekat pesen. Rasanya kek kuah
              sop dikulkasin 👍🏼👍🏼
            </Text>
          </Box>
          <Flex gap="20px" color={"grey"}>
            <Box display={"flex"} gap={"10px"}>
              <Icon
                as={FaRegHeart}
                fontSize="1.5rem"
                color="grey"
                cursor="pointer"
              ></Icon>
              <Text>29</Text>
            </Box>
            <Box display={"flex"} gap={"10px"}>
              <Icon
                as={TbMessage2}
                fontSize="1.5rem"
                color="grey"
                cursor="pointer"
              ></Icon>
              <Text>381</Text>
              <Text>Replies</Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}
