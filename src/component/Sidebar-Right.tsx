import { Flex } from "@chakra-ui/react";

import ProfileComponent from "../features/profile/components/Profile-Component";
import DevelopmentInfo from "./Develop-By";
import FollowsFeatures from "../features/follow/component/List-Follows";
import { SideBarRightPops } from "../types/sidebar-right-types";
import sidebarRightHook from "../hooks/sidebar-right-hooks";

export default function SideBarRight({ page }: SideBarRightPops) {
  const { user } = sidebarRightHook();

  return (
    <Flex color="white" fontFamily="body" padding="20px" flexDirection="column" gap="20px">
      {page != "my-profile" && <ProfileComponent page="my-profile" Profile={user.profile} borderProfile="profile.rightSide" background="brand.backgroundYoung"></ProfileComponent>}

      {page != "follow" && <FollowsFeatures location="sidebar" limit="3"></FollowsFeatures>}

      <DevelopmentInfo></DevelopmentInfo>
    </Flex>
  );
}
