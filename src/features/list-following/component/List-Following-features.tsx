import { Flex, Icon, Text } from "@chakra-ui/react";
import ListFollowComponent from "./List-Follow";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FollowingEntity } from "../../../entities/following-entity";
import useListFollowing from "../hooks/use-list-following";

export default function ListFollowingFeatures() {
  const { navigate, followList, state } = useListFollowing();

  return (
    <Flex flexDirection="column" gap="10px" color="white" rounded={"10px"}>
      <Flex padding={"10px"} flexDirection={"column"}>
        <Flex alignItems="end" ps="20px">
          <Flex
            as="button"
            alignItems="center"
            gap="10px"
            onClick={() => navigate(-1)}
          >
            <Icon as={FaArrowLeftLong} />
            <Text textTransform="capitalize">back</Text>
          </Flex>
        </Flex>
        <Flex justifyContent={"center"}>
          Following of {state.profileUsername}
        </Flex>
      </Flex>
      {followList.map((profile: FollowingEntity) => {
        return (
          <ListFollowComponent
            location="profile"
            profile={profile.follower}
            key={profile.id}
          ></ListFollowComponent>
        );
      })}
    </Flex>
  );
}
