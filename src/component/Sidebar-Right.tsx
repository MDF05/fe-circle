import { Flex } from "@chakra-ui/react";

import ProfileComponent from "../features/profile/components/Profile-Component";
import DevelopmentInfo from "./Develop-By";
import { useAppSelector } from "../hooks/use-store";
import FollowsFeatures from "../features/follow/component/Follows";

interface SideBarRightPops {
  page: string;
}

export default function SideBarRight({ page }: SideBarRightPops) {
  const user = useAppSelector((state) => state.auth);

  return (
    <Flex
      color="white"
      fontFamily="body"
      padding="20px"
      flexDirection="column"
      gap="20px"
    >
      {page != "my-profile" && (
        <ProfileComponent
          page="my-profile"
          Profile={user.profile}
          borderProfile="profile.rightSide"
          background="brand.backgroundYoung"
        ></ProfileComponent>
      )}

      {page != "follow" && (
        <FollowsFeatures location="sidebar"></FollowsFeatures>
      )}

      <DevelopmentInfo></DevelopmentInfo>
    </Flex>
  );
}
