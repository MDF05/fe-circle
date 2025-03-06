import { Flex, Icon, Text } from "@chakra-ui/react";
import ListFollowComponent from "./List-Follow";
import { FaArrowLeftLong } from "react-icons/fa6";
import useListFollowing from "../hooks/use-list-following";
import { useAppSelector } from "../../../hooks/use-store";
import ProfileEntity from "../../../entities/profile-entity";

export default function ListFollowingFeatures() {
  const { navigate,  state } = useListFollowing();
  const following = useAppSelector(state => state.followFollower.following)

  return (
    <Flex flexDirection="column" gap="10px" color="white" rounded={"10px"}>
      <Flex padding={"10px"} flexDirection={"column"}>
        <Flex alignItems="end" ps="20px">
          <Flex
            as="button"
            alignItems="center"
            gap="10px"
            onClick={() => navigate("/")}
          >
            <Icon as={FaArrowLeftLong} />
            <Text textTransform="capitalize">back</Text>
          </Flex>
        </Flex>
        <Flex justifyContent={"center"}>
          Following of {state.profileUsername}
        </Flex>
      </Flex>
      {following?.map((profile) => {
        return (
          <ListFollowComponent
            location="profile"
            profile={profile?.follower || {} as ProfileEntity}
            key={profile.followingId}
          ></ListFollowComponent>
        );
      })}
    </Flex>
  );
}
