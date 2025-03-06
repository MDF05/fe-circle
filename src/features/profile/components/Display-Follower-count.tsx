import { Text } from "@chakra-ui/react";
import ChakraLink from "../../../component/Chakra-Link-Router";
import { useAppSelector } from "../../../hooks/use-store"; 

export function DisplayFollowerCount() {
    const user = useAppSelector((state) => state.auth);
    const count = useAppSelector(state => state.followFollower)

    return ( 
    <ChakraLink
        to={`/follower/${user.profile?.username}`}
        display={"flex"}
        gap="5px"
        state={{
          profileId: user.profile?.id,
          profileUsername: user.profile?.username,
        }}
      >
        <Text as="span">{count.follower || 0}</Text>
        <Text as="span" color="grey">
          Followers
        </Text>
      </ChakraLink>
      
    )
}