import { Box, Button, Container } from "@chakra-ui/react";
import ProfileComponent from "../../features/profile/components/Profile-Component";
import { useEffect, useState } from "react";
import ModalEditProfile from "../../features/profile/components/Modal-Edit-Profile";
import { useAppDispatch, useAppSelector } from "../../hooks/use-store";
import ListImageComponent from "../../features/profile/components/List-Image-Component";
import ListThreads from "../../features/base/components/List-Thread";
import { getThreadAsyncByUserLogin } from "../../stores/thread-profile/thread-profile-async";

export default function MyProfile() {
  const [postOrMedia, setPostOrMedia] = useState<boolean>(false);
  const user = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const threads = useAppSelector((state) => state.threadProfile);

  useEffect(() => {
    if (user?.id) dispatch(getThreadAsyncByUserLogin(user.id));
  }, [user.id]);

  return (
    <Container p="0">
      <ModalEditProfile Profile={user.profile} />

      <ProfileComponent page="my-profile" borderProfile="profile.rightSide"></ProfileComponent>
      <Box borderBottom="border.grey" display="grid" gridTemplateColumns="repeat(2,50%)">
        <Button colorScheme="white" background="transparent" onClick={() => setPostOrMedia(!postOrMedia)} rounded="none" borderBottom={postOrMedia ? "notActive" : "active.color"}>
          All Post
        </Button>
        <Button colorScheme="white" background="transparent" onClick={() => setPostOrMedia(!postOrMedia)} borderBottom={postOrMedia ? "active.color" : "notActive"} rounded="none">
          Media
        </Button>
      </Box>
      <Box color="white" mt={"10px"}>
        {postOrMedia ? <ListImageComponent threads={threads.threads} /> : threads && <ListThreads threads={threads.threads} />}
      </Box>
    </Container>
  );
}
