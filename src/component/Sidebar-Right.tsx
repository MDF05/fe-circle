import { Flex } from "@chakra-ui/react";
import FollowComponent from "./Follow";
import avatar from "../../assets/image/avatar.png";

import ProfileComponent from "../features/profile/components/Profile-Component";
import cover from "../../assets/image/cover.png";
import DevelopmentInfo from "./Develop-By";
import { useAppSelector } from "../hooks/use-store";

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
          cover={(user.profile.cover || cover) as string}
          name={user.profile.fullName as string}
          page="my-profile"
          status={
            (user.profile.bio || "user baru silahkan ubah bio nya") as string
          }
          username={user.profile.username as string}
          avatar={(user.profile.image || avatar) as string}
          Profile={user.profile}
          borderProfile="profile.rightSide"
          background="brand.backgroundYoung"
        ></ProfileComponent>
      )}

      {page != "follow" && (
        <FollowComponent location="sidebar"></FollowComponent>
      )}

      <DevelopmentInfo></DevelopmentInfo>
    </Flex>
  );
}
