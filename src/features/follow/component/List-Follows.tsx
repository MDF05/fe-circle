import { Flex } from "@chakra-ui/react";
import FollowComponent from "./Follow";
import { useListFollows } from "../hooks/use-list-follow";
// import { LoadingPage } from "../../../component/Loading-Page";

export default function FollowsFeatures({ location, limit }: { location: string; limit?: string }) {
  const { profiles } = useListFollows(limit);

  // if(profiles.length == 0) return (
  //   <Flex width={"100%"} h={"100%"}  justifyItems={"center"} alignItems={"center"} justifyContent={"center"}>
  //     <LoadingPage></LoadingPage>
  //   </Flex>
  // )

  return (
    <Flex flexDirection="column" gap="10px" background={location != "follows" ? "brand.backgroundYoung" : "transparent"} color="white" rounded={"10px"}>
      <Flex padding={"10px"}> Suggested For You </Flex>
      {profiles?.map((profile) => {
        return <FollowComponent location={location} profile={profile} key={profile.id}></FollowComponent>;
      })}
    </Flex>
  );
}
