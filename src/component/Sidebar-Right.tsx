import { Flex } from "@chakra-ui/react";
import FollowComponent from "./Follow";
import avatar from "../../assets/image/avatar.png";

import ProfileComponent from "../features/profile/components/Profile-Component";
import cover from "../../assets/image/cover.png";
import DevelopmentInfo from "./Develop-By";

interface SideBarRightPops {
  page: string;
}

export default function SideBarRight({ page }: SideBarRightPops) {
  return (
    <Flex
      color="white"
      fontFamily="body"
      padding="20px"
      flexDirection="column"
      gap="20px"
    >
      {page != "my-profile" ? (
        <ProfileComponent
          cover={cover}
          name="✨ Stella Audhina ✨"
          page="my-profile"
          status="picked over by the worms, and weird fishes"
          username="@audhinafh"
          avatar={avatar}
          borderProfile="profile.rightSide"
          background="brand.backgroundYoung"
        ></ProfileComponent>
      ) : (
        ""
      )}

      {page != "follow" ? (
        <FollowComponent location="sidebar"></FollowComponent>
      ) : (
        ""
      )}

      <DevelopmentInfo></DevelopmentInfo>
    </Flex>
  );
}
