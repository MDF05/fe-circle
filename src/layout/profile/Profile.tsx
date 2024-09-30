import { Box, Button, Container } from "@chakra-ui/react";
import ProfileComponent from "../../features/profile/components/Profile-Component";
import { useEffect, useState } from "react";
import ListImageComponent from "../../features/profile/components/List-Image-Component";
import { useLocation } from "react-router-dom";
import { apiV1 } from "../../lib/api-v1";
import ListThreads from "../../features/base/components/List-Thread";

export default function ProfileView() {
  const [postOrMedia, setPostOrMedia] = useState<boolean>(false);
  const { state } = useLocation();
  const [profile, setProfile] = useState<any>();

  useEffect(() => {
    (async function () {
      const res = await apiV1.get(`/profile/${state.profileId}`);
      setProfile(res.data.data);
    })();
  }, []);

  return (
    <Container p="0">
      <ProfileComponent
        page="profile"
        borderProfile="profile.baseProfile"
        background="transparent"
        Profile={profile}
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
        {postOrMedia ? (
          <ListImageComponent threads={profile.thread} />
        ) : (
          profile?.thread && <ListThreads threads={profile.thread} />
        )}
      </Box>
    </Container>
  );
}
