import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { apiV1 } from "../../../lib/api-v1";
import ChakraLink from "../../../component/Chakra-Link-Router";
import { useForm } from "react-hook-form";
import ProfileEntity from "../../../entities/profile-entity";
import defaultAvatar from "../../../../assets/image/avatar.png"

export default function ListFollowComponent({ profile, location }: { profile: ProfileEntity ; location: string }) {
  const [follow, setFollow] = useState("");
  const {
    handleSubmit,
    formState: { isSubmitted },
  } = useForm();


  useEffect(() => {
    (async function () {
      try {
        if (profile) {
          const res = await apiV1.get(`/follow/${profile?.id}`);
          setFollow(res.data.data.id);
        }
      } catch (err : unknown ) {
        setFollow("");
        return err;
      }
    })();
  }, [profile, isSubmitted]);

  async function handleFollow() {
    try {
      const res = await apiV1.post(`/follow/${profile?.id}`, {});
      setFollow(res.data.data.id);
      
    } catch (err : unknown) {
      setFollow("");
      return err;
    }
  }

  async function handleReset() {
    try {
      await apiV1.delete(`/follow/${follow}`);
      setFollow("");
      
    } catch (err : unknown) {
      setFollow("");
      return err;
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
          <Image src={profile?.image || defaultAvatar} rounded="full" width="40px" height="40px" objectFit="cover" me="15px"></Image>
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
