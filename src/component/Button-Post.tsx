import { Box, Button } from "@chakra-ui/react";
import { useContext } from "react";
import { ModalContext } from "../context/Modal-Post-Context";
import { useLocation, useNavigate } from "react-router-dom";

export default function ButtonPost() {
  const { onOpen } = useContext(ModalContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = () => {
    if (location.pathname == "/") {
      onOpen();
    } else {
      navigate("/");
      setTimeout(() => {
        const button =
          document.querySelector<HTMLButtonElement>(".button-post");
        button?.click();
      }, 100);
    }
  };

  return (
    <Box py="10px" px="25px">
      <Button
        display="flex"
        className="button-post"
        bg="brand.color"
        h="40px"
        width="100%"
        borderRadius="20px"
        justifyContent="center"
        alignItems="center"
        color="white"
        onClick={handleNavigation}
        _hover={{
          color: "white",
          backgroundColor: "cyan.400",
        }}
      >
        Create Post
      </Button>
    </Box>
  );
}
