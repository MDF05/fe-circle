import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { apiV1 } from "../lib/api-v1";
import ChakraLink from "./Chakra-Link-Router";
import { useForm } from "react-hook-form";

export default function FollowComponent({
  profile,
  location,
}: {
  profile: any;
  location: any;
}) {
  const [follow, setFollow] = useState("");
  const {
    handleSubmit,
    register,
    formState: { isSubmitted },
  } = useForm();

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

  async function handleFollow(event: any) {
    try {
      const res = await apiV1.post(`/follow/${profile?.id}`, {});
      setFollow(res.data.data.id);
    } catch (err) {
      setFollow("");
    }
  }

  async function handleReset(event: any) {
    try {
      const res = await apiV1.delete(`/follow/${follow}`);
      setFollow("");
    } catch (err) {
      setFollow("");
    }
  }

  return (
    <Flex
      position="relative"
      borderBottom={
        location == "follows" ? "1px solid grey" : "1px solid transparent"
      }
      padding={"2px 20px"}
      justifyContent={"space-between"}
    >
      <Flex>
        <ChakraLink
          to={`/profile/${profile.id}`}
          state={{ profileId: profile.id }}
        >
          <Image
            src={profile.image}
            rounded="full"
            width="40px"
            height="40px"
            objectFit="cover"
            me="15px"
          ></Image>
        </ChakraLink>
        <Flex flexDirection="column">
          <Text>{profile.fullName}</Text>
          <Text color="grey">@{profile.username}</Text>
        </Flex>
      </Flex>
      <Flex
        as={"form"}
        onSubmit={handleSubmit((e) => handleFollow(e))}
        onReset={handleSubmit((e) => handleReset(e))}
      >
        {follow == "" ? (
          <Button
            variant="outline"
            type="submit"
            colorScheme="white"
            rounded="full"
          >
            follow
          </Button>
        ) : (
          <Button
            variant="outline"
            type="reset"
            colorScheme="white"
            rounded="full"
          >
            following
          </Button>
        )}
      </Flex>
    </Flex>
  );
}
