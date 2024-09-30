import { Box, Flex, Image, Text, Button, Input } from "@chakra-ui/react";
import { FaArrowLeftLong } from "react-icons/fa6";
import ChakraLink from "../../../component/Chakra-Link-Router";
import ProfileComponentProps from "../types/Profile";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { EditProfileContext } from "../../../context/Modal-Edit-Profile";
import { useAppSelector } from "../../../hooks/use-store";
import { useForm } from "react-hook-form";
import { apiV1 } from "../../../lib/api-v1";

export default function ProfileComponent({
  page,
  borderProfile,
  Profile,
  ...rest
}: ProfileComponentProps) {
  const { onOpen } = useContext(EditProfileContext);
  const user = useAppSelector((state) => state.auth);
  const {
    handleSubmit,
    register,
    formState: { isSubmitted },
  } = useForm();
  const [follow, setFollow] = useState("");

  useEffect(() => {
    (async function () {
      try {
        if (Profile) {
          const res = await apiV1.get(`/follow/${Profile?.id}`);
          setFollow(res.data.data.id);
        }
      } catch (err) {
        setFollow("");
      }
    })();
  }, [Profile, isSubmitted]);

  async function handleFollow(event: any) {
    try {
      const res = await apiV1.post(`/follow/${Profile?.id}`, {});
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

  const Navigate = useNavigate();
  function handleClick() {
    if (location.pathname === "/my-profile") {
      onOpen();
    } else {
      Navigate("/my-profile");
      setTimeout(() => {
        const ButtonEditProfile = document.querySelector<HTMLButtonElement>(
          ".modal-edit-profile",
        );
        ButtonEditProfile?.click();
      }, 100);
    }
  }

  return (
    <Flex
      gap="20px"
      backdropBlur="20px"
      backdropFilter="blur(20px)"
      flexDirection="column"
      padding="20px"
      color="white"
      {...rest}
    >
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
          <Image
            src={Profile?.cover as string}
            width="100%"
            height={"100px"}
            rounded={"20px"}
          ></Image>
        </Box>
        <Flex
          position="relative"
          justifyContent="end"
          height="80px"
          align="center"
          as={"form"}
          onSubmit={handleSubmit((event) => handleFollow(event))}
          onReset={handleSubmit((event) => handleReset(event))}
        >
          <Image
            src={Profile?.image as string}
            position="absolute"
            left="10px"
            top="-25px"
            rounded="full"
            width="80px"
            height="80px"
            objectFit="cover"
            border={borderProfile}
          ></Image>

          {page == "my-profile" || user.id == Profile?.userId ? (
            <Button
              className="modal-edit-profile"
              variant="outline"
              colorScheme="white"
              rounded="full"
              onClick={handleClick}
            >
              Edit Profile
            </Button>
          ) : (
            <Box>
              {follow == "" ? (
                <Button
                  type="submit"
                  variant="outline"
                  colorScheme="white"
                  rounded="full"
                >
                  <Input type="text" hidden {...register("follow")} />
                  Follow
                </Button>
              ) : (
                <Button
                  type="reset"
                  variant="outline"
                  colorScheme="white"
                  rounded="full"
                >
                  <Input type="text" hidden {...register("unFollow")} />
                  Following
                </Button>
              )}
            </Box>
          )}
        </Flex>
        <Flex gap="10px" flexDirection="column">
          <Text as="h1">{Profile?.fullName}</Text>
          <Text color="grey">{Profile?.username}</Text>
          <Text>{Profile?.bio}</Text>
          <Flex gap="20px">
            <Flex as="span" gap="5px">
              <Text as="span">{Profile?._count.following}</Text>
              <Text as="span" color="grey">
                Following
              </Text>
            </Flex>
            <Flex as="span" gap="5px">
              <Text as="span">{Profile?._count.follower}</Text>
              <Text as="span" color="grey">
                Followers
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
