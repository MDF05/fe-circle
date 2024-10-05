import { Flex } from "@chakra-ui/react";
import FollowComponent from "./Follow";
import { useListFollows } from "../hooks/use-list-follow";

export default function FollowsFeatures({
  location,
  limit,
}: {
  location: string;
  limit?: string;
}) {
  const { profiles } = useListFollows(limit);

  return (
    <Flex
      flexDirection="column"
      gap="10px"
      background={
        location != "follows" ? "brand.backgroundYoung" : "transparent"
      }
      color="white"
      rounded={"10px"}
    >
      <Flex padding={"10px"}> Suggested For You </Flex>
      {profiles.map((profile) => {
        return (
          <FollowComponent
            location={location}
            profile={profile}
            key={profile.id}
          ></FollowComponent>
        );
      })}
    </Flex>
  );
}
