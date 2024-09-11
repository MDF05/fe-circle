import { Box, Button, Container } from "@chakra-ui/react";
import ProfileComponent from "../../features/profile/components/Profile-Component";
import { useState } from "react";
import ListImageComponent from "../../features/profile/components/List-Image-Component";
import AllPostComponent from "../../features/profile/components/All-Post-Component";
import coverGradient from "../../../assets/image/cover-gradient.png";
import profileAvatar from "../../../assets/image/profile-avatar.png";

export default function ProfileView() {
  const [postOrMedia, setPostOrMedia] = useState<boolean>(false);
  return (
    <Container p="0">
      <ProfileComponent
        cover={coverGradient}
        name="Naveen Singh"
        page="profile"
        status="picked over by the worms, and weird fishes"
        username="@audhinafh"
        avatar={profileAvatar}
        borderProfile="profile.baseProfile"
        background="transparent"
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
