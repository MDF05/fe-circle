import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { apiV1 } from "../../../lib/api-v1";
import ChakraLink from "../../../component/Chakra-Link-Router";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "./../../../hooks/use-store";
import { setFollowFollower } from "../../../stores/follow-follower/follow-follower-slice";
import ProfileEntity from "../../../entities/profile-entity";

export default function ListFollowComponent({ profile, location }: { profile: ProfileEntity; location: string }) {
  const [follow, setFollow] = useState("");
  const {
    handleSubmit,
    formState: { isSubmitted },
  } = useForm();
  const dispatch = useAppDispatch();
  const ff = useAppSelector((state) => state.followFollower);

  useEffect(() => {
    (async function () {
      try {
        if (profile) {
          const res = await apiV1.get(`/follow/${profile?.id}`);
          setFollow(res.data.data.id);
        }
      } catch (err) {
        setFollow("");
      }
    })();
  }, [profile, isSubmitted]);

  async function handleFollow() {
    try {
      const res = await apiV1.post(`/follow/${profile?.id}`, {});
      setFollow(res.data.data.id);
      dispatch(
        setFollowFollower({
          follower: ff.follower,
          following: ff.following + 1,
        }),
      );
      localStorage.setItem("followFollower", JSON.stringify({ follower: ff.follower, following: ff.following + 1 }));
    } catch (err) {
      setFollow("");
    }
  }

  async function handleReset() {
    try {
      await apiV1.delete(`/follow/${follow}`);
      setFollow("");
      dispatch(
        setFollowFollower({
          follower: ff.follower,
          following: ff.following - 1,
        }),
      );
      localStorage.setItem("followFollower", JSON.stringify({ follower: ff.follower, following: ff.following - 1 }));
    } catch (err) {
      setFollow("");
    }
  }

  return (
    <Flex
      position="relative"
      borderBottom={location == "follows" ? "1px solid grey" : "1px solid transparent"}
      padding={"2px 20px"}
      justifyContent={"space-between"}
      width={"100%"}
    >
      <Flex>
        <ChakraLink to={`/profile/${profile.id}`} state={{ profileId: profile.id }}>
          <Image src={profile.image} rounded="full" width="40px" height="40px" objectFit="cover" me="15px"></Image>
        </ChakraLink>
        <Flex flexDirection="column">
          <Text>{profile.fullName}</Text>
          <Text color="grey">@{profile.username}</Text>
        </Flex>
      </Flex>
      <Flex as={"form"} onSubmit={handleSubmit(() => handleFollow())} onReset={handleSubmit(() => handleReset())}>
        {follow == "" ? (
          <Button variant="outline" type="submit" colorScheme="white" rounded="full">
            follow
          </Button>
        ) : (
          <Button variant="outline" type="reset" colorScheme="white" rounded="full">
            following
          </Button>
        )}
      </Flex>
    </Flex>
  );
}
