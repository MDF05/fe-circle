import { Text } from "@chakra-ui/react";
import ChakraLink from "../../../component/Chakra-Link-Router";
import { useAppSelector } from "../../../hooks/use-store";

export function DisplayFollowingCount() {
  const user = useAppSelector((state) => state.auth);
  const count = useAppSelector(state => state.followFollower)
  

  return (
    <ChakraLink
              to={`/following/${user.profile?.username}`}
              state={{
                profileId: user.profile?.id,
                profileUsername: user.profile?.username,
              }}
              display={"flex"}
              gap="5px"
            >
              <Text as="span">{count.following }</Text>
              <Text as="span" color="grey">
                Following
              </Text>
    </ChakraLink>
  )
}