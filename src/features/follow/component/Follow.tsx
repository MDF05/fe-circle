import { Button, Flex, Image, Text } from "@chakra-ui/react";
import ChakraLink from "../../../component/Chakra-Link-Router";
import FollowComponentProps from "../types/follow-component-types";
import useFollow from "../hooks/use-follow";
import avatarDefault from "../../../../assets/image/avatar.png";

export default function FollowComponent({ profile, location }: FollowComponentProps) {
  const { handleFollow, handleSubmit, handleReset, followId } = useFollow(profile);

  return (
    <Flex
      position="relative"
      borderBottom={location == "follows" ? "1px solid grey" : "1px solid transparent"}
      padding={"2px 20px"}
      justifyContent={"space-between"}
      width={"100%"}
    >
      <Flex>
        <ChakraLink to={`/profile/${profile.id}`} state={{ profileId: profile.id }}>
          <Image src={profile?.image ?? avatarDefault} rounded="full" width="40px" height="40px" objectFit="cover" me="15px"></Image>
        </ChakraLink>
        <Flex flexDirection="column">
          <Text>{profile.fullName}</Text>
          <Text color="grey">@{profile.username}</Text>
        </Flex>
      </Flex>
      <Flex as={"form"} onSubmit={handleSubmit(() => handleFollow())} onReset={handleSubmit(() => handleReset())}>
        {followId == "" ? (
          <Button variant="outline" type="submit" colorScheme="white" rounded="full">
            follow
          </Button>
        ) : (
          <Button variant="outline" type="reset" colorScheme="white" rounded="full">
            following
          </Button>
        )}
      </Flex>
    </Flex>
  );
}
