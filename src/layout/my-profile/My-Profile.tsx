import { Box, Button, Container } from "@chakra-ui/react";
import ProfileComponent from "../../features/profile/components/Profile-Component";
import { useContext, useEffect, useState } from "react";
import ListImageComponent from "../../features/profile/components/List-Image-Component";
import ModalEditProfile from "../../features/profile/components/Modal-Edit-Profile";
import { apiV1 } from "../../lib/api-v1";
import ListThreads from "../../features/base/components/List-Thread";
import { EditProfileContext } from "../../context/Modal-Edit-Profile";
import { useAppSelector } from "../../hooks/use-store";

export default function MyProfile() {
  const [postOrMedia, setPostOrMedia] = useState<boolean>(false);
  const { isOpen } = useContext(EditProfileContext);
  const [threads, setThreads] = useState<any>();
  const [profile, setProfile] = useState<any>();
  const user = useAppSelector((state) => state.auth);

  useEffect(() => {
    (async function () {
      const res = await apiV1.get(`/profile/${user.profile.id}`);
      setProfile(res.data.data);
      setThreads(res.data.data.thread);
    })();
  }, [isOpen]);

  return (
    <Container p="0">
      <ModalEditProfile Profile={user.profile} />

      <ProfileComponent
        page="my-profile"
        borderProfile="profile.rightSide"
        Profile={profile}
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
        {postOrMedia ? (
          <ListImageComponent threads={threads} />
        ) : (
          threads && <ListThreads threads={threads} />
        )}
      </Box>
    </Container>
  );
}
