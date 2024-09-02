import { Box, Text, Button, Image, Flex } from "@chakra-ui/react";
import avatar from "../../assets/image/avatar.png";
import cover from "../../assets/image/cover.png";

export default function SideBarRight() {
  return (
    <Flex
      color="white"
      fontFamily="body"
      padding="20px"
      borderLeft="1px solid grey"
      flexDirection="column"
      gap="20px"
    >
      <Flex
        gap="20px"
        backdropBlur="20px"
        backdropFilter="blur(20px)"
        flexDirection="column"
        background="brand.backgroundYoung"
        padding="20px"
      >
        <Text>My Profile</Text>
        <Box>
          <Box height="80px" background="red" display="flex" rounded="10px">
            <Image src={cover} width="100%"></Image>
          </Box>
          <Flex
            position="relative"
            justifyContent="end"
            height="80px"
            align="center"
          >
            <Image
              src={avatar}
              position="absolute"
              left="10px"
              top="-25px"
              rounded="full"
              width="80px"
              height="80px"
              objectFit="cover"
              border="5px solid rgb(38, 38, 38)"
            ></Image>
            <Button variant="outline" colorScheme="white" rounded="full">
              Edit Profile
            </Button>
          </Flex>
          <Flex gap="10px" flexDirection="column">
            <Text as="h1">✨ Stella Audhina ✨</Text>
            <Text as="p" color="grey">
              @audhinafh
            </Text>
            <Text as="p">picked over by the worms, and weird fishes</Text>
            <Flex gap="20px">
              <Flex as="span" gap="5px">
                <Text as="span">291</Text>
                <Text as="span" color="grey">
                  Following
                </Text>
              </Flex>
              <Flex as="span" gap="5px">
                <Text as="span">23</Text>
                <Text as="span" color="grey">
                  Followers
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Flex>
      <Flex flexDirection="column" gap="10px">
        <Flex>Suggested For You</Flex>
        <Flex position="relative">
          <Image
            src={avatar}
            rounded="full"
            width="40px"
            height="40px"
            objectFit="cover"
            me="15px"
          ></Image>
          <Flex flexDirection="column">
            <Text>Shakia Kimathi</Text>
            <Text color="grey">@shakiakim</Text>
          </Flex>
          <Flex position="absolute" right="0px">
            <Button variant="outline" colorScheme="white" rounded="full">
              following
            </Button>
          </Flex>
        </Flex>
        <Flex position="relative">
          <Image
            src={avatar}
            rounded="full"
            width="40px"
            height="40px"
            objectFit="cover"
            me="15px"
          ></Image>
          <Flex flexDirection="column">
            <Text>Shakia Kimathi</Text>
            <Text color="grey">@shakiakim</Text>
          </Flex>
          <Flex position="absolute" right="0px">
            <Button variant="outline" colorScheme="white" rounded="full">
              follow
            </Button>
          </Flex>
        </Flex>
        <Flex position="relative">
          <Image
            src={avatar}
            rounded="full"
            width="40px"
            height="40px"
            objectFit="cover"
            me="15px"
          ></Image>
          <Flex flexDirection="column">
            <Text>Shakia Kimathi</Text>
            <Text color="grey">@shakiakim</Text>
          </Flex>
          <Flex position="absolute" right="0px">
            <Button variant="outline" colorScheme="white" rounded="full">
              Follow
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
