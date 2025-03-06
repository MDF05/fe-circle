import { Flex, Icon, Text } from "@chakra-ui/react";
import ListFollowComponent from "./List-Follow";
import { FaArrowLeftLong } from "react-icons/fa6";
import useListFollowing from "../hooks/use-list-following";
import { useAppSelector } from "../../../hooks/use-store";
import ProfileEntity from "../../../entities/profile-entity";

export default function ListFollowerFeatures() {
  const { navigate } = useListFollowing();
  const followers = useAppSelector(state => state.followFollower.follower)
  const auth = useAppSelector(state => state.auth)


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
          Follower of {auth.fullName}
        </Flex>
      </Flex>
      {followers?.map((profile) => {
        return (
          <ListFollowComponent
            location="profile"
            profile={profile.following || {} as ProfileEntity}
            key={profile.followerId}
          ></ListFollowComponent>
        );
      })}
    </Flex>
  );
}
