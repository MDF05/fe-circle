import { Box, Button, Container } from "@chakra-ui/react";
import ProfileComponent from "../../features/profile/components/Profile-Component";
import { useState } from "react";
import AllPostComponent from "../../features/profile/components/All-Post-Component";
import ListImageComponent from "../../features/profile/components/List-Image-Component";
import cover from "../../../assets/image/cover.png";
import avatar from "../../../assets/image/avatar.png";
import ModalEditProfile from "../../features/profile/components/Modal-Edit-Profile";

export default function MyProfile() {
  const [postOrMedia, setPostOrMedia] = useState<boolean>(false);

  return (
    <Container p="0">
      <ModalEditProfile avatarImage={avatar} />

      <ProfileComponent
        cover={cover}
        name="✨ Stella Audhina ✨"
        page="my-profile"
        status="picked over by the worms, and weird fishes"
        username="@audhinafh"
        avatar={avatar}
        borderProfile="profile.rightSide"
        // background="transparent"
      ></ProfileComponent>
      <Box
        borderBottom="border.grey"
        display="grid"
        gridTemplateColumns="repeat(2,50%)"
      >
        <Button
          colorScheme="white"
          background="transparent"
          onClick={() => setPostOrMedia(!postOrMedia)}
          rounded="none"
          borderBottom={postOrMedia ? "notActive" : "active.color"}
        >
          All Post
        </Button>
        <Button
          colorScheme="white"
          background="transparent"
          onClick={() => setPostOrMedia(!postOrMedia)}
          borderBottom={postOrMedia ? "active.color" : "notActive"}
          rounded="none"
        >
          Media
        </Button>
      </Box>
      <Box color="white" mt={"10px"}>
        {postOrMedia ? <ListImageComponent /> : <AllPostComponent />}
      </Box>
    </Container>
  );
}
