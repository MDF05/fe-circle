import { Box, Flex, Image, Text,   } from "@chakra-ui/react";
import { FaArrowLeftLong } from "react-icons/fa6";
import ChakraLink from "../../../component/Chakra-Link-Router";
import ProfileComponentProps from "../types/Profile";
import {  useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { apiV1 } from "../../../lib/api-v1";
import cookies from "js-cookie";
import avatarImage from "../../../../assets/image/avatar.png";
import cover from "../../../../assets/image/cover.png";
import { useAppDispatch, useAppSelector } from "../../../hooks/use-store";
import { ButtonProfileSide } from "./Button-Profile-Side";
import { getFollowerByProfileIdAsync } from "../../../stores/follow-follower/follow-follower-async";
import { DisplayFollowerCount } from "../Display-Follower-count";

export default function ProfileComponent({ page, borderProfile, following , ...rest }: ProfileComponentProps) {
  
  const {
    handleSubmit,
    register,
    formState: { isSubmitted },
  } = useForm();
  const [follow, setFollow] = useState("");
  const token: string | undefined = cookies.get("token");
  const user = useAppSelector((state) => state.auth);
  const Profile = useAppSelector((state) => state.profile)?.profile;
  const dispatch = useAppDispatch();
  dispatch(getFollowerByProfileIdAsync(user?.profile?.id))







  useEffect(() => {
    (async function () {
      try {
        if (Profile?.id && page !== "my-profile") {
          const res = await apiV1.get(`/follow/${Profile?.id}`, {
            headers: { Authorization: "Bearer " + token },
          });
          setFollow(res.data.data.id);
        } else return;
      } catch (err: unknown) {
        setFollow("");
        return err;
      }
    })();
  }, [Profile?.id, isSubmitted, page, token]);

  async function handleFollow() {
    try {
      const res = await apiV1.post(`/follow/${Profile?.id}`, {});
      setFollow(res.data.data.id);
    } catch (err) {
      setFollow("");
      return err;
    }
  }

  async function handleReset() {
    try {
      await apiV1.delete(`/follow/${follow}`);
      setFollow("");
    } catch (err) {
      setFollow("");
      return err;
    }
  }


  return (
    <Flex gap="20px" backdropBlur="20px" backdropFilter="blur(20px)" flexDirection="column" padding="20px" color="white" {...rest}>
      <Text>
        {page == "my-profile" ? (
          "My Profile"
        ) : (
          <ChakraLink to="/">
            <Flex alignItems="center" gap="10px">
              <FaArrowLeftLong />
              {page}
            </Flex>
          </ChakraLink>
        )}
      </Text>
      <Box>
        <Box height="100px" display="flex" rounded="10px">
          <Image src={Profile?.cover || (user.profile?.cover ?? cover)} width="100%" height={"100px"} rounded={"20px"}></Image>
        </Box>
        <Flex
          position="relative"
          justifyContent="end"
          height="80px"
          align="center"
          as={"form"}
          onSubmit={handleSubmit(() => handleFollow())}
          onReset={handleSubmit(() => handleReset())}
        >
          <Image
            src={Profile?.image || (user?.profile?.image ?? avatarImage)}
            position="absolute"
            left="10px"
            top="-25px"
            rounded="full"
            width="80px"
            height="80px"
            objectFit="cover"
            border={borderProfile}
          ></Image>
        <ButtonProfileSide page={page} follow={follow} register={register}></ButtonProfileSide>
          
        </Flex>
        <Flex gap="10px" flexDirection="column">
          <Text as="h1">{Profile?.fullName ?? user.profile?.fullName}</Text>
          <Text color="grey">@{Profile?.username ?? user.profile?.username}</Text>
          <Text>{Profile?.bio ?? user?.profile?.bio}</Text>
          <Flex gap="20px">
            <ChakraLink
              to={`/following/${user.profile?.username}`}
              state={{
                profileId: user.profile?.id,
                profileUsername: user.profile?.username,
              }}
              display={"flex"}
              gap="5px"
            >
              <Text as="span">{following || user.profile?._count.following}</Text>
              <Text as="span" color="grey">
                Following
              </Text>
            </ChakraLink>
           <DisplayFollowerCount></DisplayFollowerCount>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
