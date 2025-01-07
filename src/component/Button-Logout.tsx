import { Button, ButtonProps, Text } from "@chakra-ui/react";
import { CiLogout } from "react-icons/ci";
import { useAppDispatch } from "../hooks/use-store";
import { removeUser } from "../stores/auth/auth-slice";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { removeProfile } from "../stores/profile/profile-slice";

interface ButtonLogoutProps extends ButtonProps {
  children?: React.ReactNode;
}

export default function ButtonLogout(props: ButtonLogoutProps) {
  const { children, ...restProps } = props;

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function logOut() {
    Cookies.remove("token");
    dispatch(removeUser());
    dispatch(removeProfile());
    return navigate("/login");
  }

  return (
    <Button alignItems="center" gap="10px" mx="8" bottom="20px" position="absolute" colorScheme="transparent" {...restProps} onClick={logOut}>
      <Text color={"white"}>
        <CiLogout></CiLogout>
      </Text>
      <Text color={"white"}>Logout {children}</Text>
    </Button>
  );
}
