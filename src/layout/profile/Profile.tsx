import { Box, Button, Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ListImageComponent from "../../features/profile/components/List-Image-Component";
import { useLocation } from "react-router-dom";
import ListThreads from "../../features/base/components/List-Thread";
import { useAppDispatch, useAppSelector } from "../../hooks/use-store";
import { getProfileByIdAsync } from "../../stores/profile/profile-async";
import ProfileComponentOther from "../../features/profile/components/Profile-Component-Other";
import { getThreadAsyncByUserLogin } from "../../stores/thread-profile/thread-profile-async";
import { LoadingPage } from "../../component/Loading-Page";

export default function ProfileView() {
  const [postOrMedia, setPostOrMedia] = useState<boolean>(false);
  const { state } = useLocation();
  const profileState = useAppSelector((state) => state.profile);

  const dispatch = useAppDispatch();

  useEffect(() => {
    (async function () {
      await dispatch(getProfileByIdAsync(state?.profileId));
      await dispatch(getThreadAsyncByUserLogin(profileState?.profile?.id));
    })();
  }, [state]);

  if (profileState.loading) return <LoadingPage></LoadingPage>;

  return (
    <Container p="0">
      {profileState?.profile && (
        <ProfileComponentOther
          page="profile"
          borderProfile="profile.baseProfile"
          background="transparent"
          Profile={profileState.profile}
        ></ProfileComponentOther>
      )}
      <Box
        borderBottom="border.grey"
        display="grid"
        gridTemplateColumns="repeat(2,50%)"
        color={"white"}
      >
        <Button
          colorScheme="white"
          color={"white"}
          background="transparent"
          onClick={() => setPostOrMedia(!postOrMedia)}
          rounded="none"
          borderBottom={postOrMedia ? "notActive" : "active.color"}
        >
          All Post
        </Button>
        <Button
          colorScheme="white"
          color={"white"}
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
          <ListImageComponent threads={profileState?.profile?.thread} />
        ) : (
          <ListThreads threads={profileState?.profile?.thread} />
        )}
      </Box>
    </Container>
  );
}
