import { Box, Text, Image, Button, Icon, Flex } from "@chakra-ui/react";
import { LuImagePlus } from "react-icons/lu";
import avatarImage from "../../../../assets/image/avatar.png";
import { TbMessage2 } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";

function AddPostComp(expanded : boolean) {
    return (
      <Box position="absolute">

      </Box>
    )
}

export default function Base() {
  return (
    <Box>
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
        <Box display="flex" justifyContent="space-between" width="95%">
          <Box display="flex" gap="20px" alignItems="center">
            <Image src={avatarImage}></Image>
            <Text as="p">What Is Hapenning?!</Text>
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
              px="30px"
              py="0px"
              h="40px"
              color="white"
            >
              Post
            </Button>
          </Box>
        </Box>
      </Box>
      <Box px="10px" py="20px" borderBottom="1px solid grey" color="white">
        <Box display="flex" gap="20px" alignItems="start">
          <Image src={avatarImage}></Image>
          <Box display="flex" flexDirection="column" gap="15px">
            <Flex gap="10px">
              <Text as="span">Indah Pra Karya</Text>
              <Text as="span" color="grey">
                @indahpra
              </Text>
              <Text as="span" color="grey">
                4h
              </Text>
            </Flex>
            <Box>
              <Text as="p">
                Kalian pernah ga sih bet on saving? Jadi by calculation
                sebenernya kita ga survive sampe tanggal tertentu. Tapi entah
                gimana bisa aja gitu. Ada aja jalannya augmented reality real
                time puppet I made. You can try it now went below in the thread.
              </Text>
            </Box>
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
          </Box>
        </Box>
      </Box>
      <Box px="10px" py="20px" borderBottom="1px solid grey" color="white">
        <Box display="flex" gap="20px" alignItems="start">
          <Image src={avatarImage}></Image>
          <Box display="flex" flexDirection="column" gap="15px">
            <Flex gap="10px">
              <Text as="span">Indah Pra Karya</Text>
              <Text as="span" color="grey">
                @indahpra
              </Text>
              <Text as="span" color="grey">
                4h
              </Text>
            </Flex>
            <Box>
              <Text as="p">
                Kalian pernah ga sih bet on saving? Jadi by calculation
                sebenernya kita ga survive sampe tanggal tertentu. Tapi entah
                gimana bisa aja gitu. Ada aja jalannya augmented reality real
                time puppet I made. You can try it now went below in the thread.
              </Text>
            </Box>
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
          </Box>
        </Box>
      </Box>
      <Box px="10px" py="20px" borderBottom="1px solid grey" color="white">
        <Box display="flex" gap="20px" alignItems="start">
          <Image src={avatarImage}></Image>
          <Box display="flex" flexDirection="column" gap="15px">
            <Flex gap="10px">
              <Text as="span">Indah Pra Karya</Text>
              <Text as="span" color="grey">
                @indahpra
              </Text>
              <Text as="span" color="grey">
                4h
              </Text>
            </Flex>
            <Box>
              <Text as="p">
                Kalian pernah ga sih bet on saving? Jadi by calculation
                sebenernya kita ga survive sampe tanggal tertentu. Tapi entah
                gimana bisa aja gitu. Ada aja jalannya augmented reality real
                time puppet I made. You can try it now went below in the thread.
              </Text>
            </Box>
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
          </Box>
        </Box>
      </Box>
      <Box px="10px" py="20px" borderBottom="1px solid grey" color="white">
        <Box display="flex" gap="20px" alignItems="start">
          <Image src={avatarImage}></Image>
          <Box display="flex" flexDirection="column" gap="15px">
            <Flex gap="10px">
              <Text as="span">Indah Pra Karya</Text>
              <Text as="span" color="grey">
                @indahpra
              </Text>
              <Text as="span" color="grey">
                4h
              </Text>
            </Flex>
            <Box>
              <Text as="p">
                Kalian pernah ga sih bet on saving? Jadi by calculation
                sebenernya kita ga survive sampe tanggal tertentu. Tapi entah
                gimana bisa aja gitu. Ada aja jalannya augmented reality real
                time puppet I made. You can try it now went below in the thread.
              </Text>
            </Box>
            <Flex gap="20px">
              <Box>
                <Icon
                  as={FaRegHeart}
                  fontSize="1.5rem"
                  color="grey"
                  cursor="pointer"
                ></Icon>
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
          </Box>
        </Box>
      </Box>
      <Box px="10px" py="20px" borderBottom="1px solid grey" color="white">
        <Box display="flex" gap="20px" alignItems="start">
          <Image src={avatarImage}></Image>
          <Box display="flex" flexDirection="column" gap="15px">
            <Flex gap="10px">
              <Text as="span">Indah Pra Karya</Text>
              <Text as="span" color="grey">
                @indahpra
              </Text>
              <Text as="span" color="grey">
                4h
              </Text>
            </Flex>
            <Box>
              <Text as="p">
                Kalian pernah ga sih bet on saving? Jadi by calculation
                sebenernya kita ga survive sampe tanggal tertentu. Tapi entah
                gimana bisa aja gitu. Ada aja jalannya augmented reality real
                time puppet I made. You can try it now went below in the thread.
              </Text>
            </Box>
            <Flex gap="20px">
              <Box>
                <Icon
                  as={FaRegHeart}
                  fontSize="1.5rem"
                  color="grey"
                  cursor="pointer"
                ></Icon>
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
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
