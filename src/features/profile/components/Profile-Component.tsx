import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";
import { FaArrowLeftLong } from "react-icons/fa6";
import ChakraLink from "../../../component/Chakra-Link-Router";
import ProfileComponentProps from "../types/Profile";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { EditProfileContext } from "../../../context/Modal-Edit-Profile";

export default function ProfileComponent({
  page,
  cover,
  name,
  username,
  status,
  avatar,
  borderProfile,
  Profile,
  ...rest
}: ProfileComponentProps) {
  const { onOpen } = useContext(EditProfileContext);
  //
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
        <Box height="80px" display="flex" rounded="10px">
          <Image src={Profile?.cover as string} width="100%"></Image>
        </Box>
        <Flex
          position="relative"
          justifyContent="end"
          height="80px"
          align="center"
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

          {page == "my-profile" ? (
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
            <Button variant="outline" colorScheme="white" rounded="full">
              Follow
            </Button>
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
