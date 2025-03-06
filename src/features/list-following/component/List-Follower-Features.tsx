import { Flex, Icon, Text } from "@chakra-ui/react";
// import ListFollowComponent from "./List-Follow";
import { FaArrowLeftLong } from "react-icons/fa6";
// import { FollowerEntity } from "../../../entities/follower-entity";

export default function ListFollowerFeatures() {
  // const { navigate, followList, state } = useListFollower();

  return (
    <Flex flexDirection="column" gap="10px" color="white" rounded={"10px"}>
      <Flex padding={"10px"} flexDirection={"column"}>
        <Flex alignItems="end" ps="20px">
          <Flex
            as="button"
            alignItems="center"
            gap="10px"
            // onClick={() => navigate(-1)}
          >
            <Icon as={FaArrowLeftLong} />
            <Text textTransform="capitalize">back</Text>
          </Flex>
        </Flex>
        <Flex justifyContent={"center"}>
          {/* Follower of {state.profileUsername} */}
        </Flex>
      </Flex>
      {/* {followList.map((profile: FollowerEntity) => {
        return (
          <ListFollowComponent
            location="profile"
            profile={profile.following}
            key={profile.id}
          ></ListFollowComponent>
        );
      })} */}
    </Flex>
  );
}
