import { Button, Flex, Image, Text } from "@chakra-ui/react";
import avatar from "../../assets/image/avatar.png";

export default function FollowComponent({ location }: { location: string }) {
  return (
    <Flex
      flexDirection="column"
      gap="10px"
      background={
        location != "follows" ? "brand.backgroundYoung" : "transparent"
      }
      padding="20px"
      color="white"
    >
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
  );
}
