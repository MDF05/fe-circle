"use client";
import Cookies from "js-cookie";

import {
  Box,
  CloseButton,
  Flex,
  Icon,
  Link,
  Button,
  Text,
} from "@chakra-ui/react";

import { TbUserSearch } from "react-icons/tb";
import { FaRegHeart, FaRegCircleUser } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";
import { RiHome7Fill } from "react-icons/ri";

import { Link as RouterLink, useNavigate } from "react-router-dom";
import LogoCircle from "./Logo-Circle";
import ButtonPost from "./Button-Post";
import { useDispatch } from "react-redux";
import { removeUser } from "../stores/auth-slice";
import { LinkItemProps, NavItemProps } from "../types/sidebar-left-types";

export const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: RiHome7Fill, path: "/" },
  { name: "Search", icon: TbUserSearch, path: "/search" },
  { name: "Follow", icon: FaRegHeart, path: "/follow" },
  { name: "Profile", icon: FaRegCircleUser, path: "/my-profile" },
];

const NavItem = ({ icon, path, children, ...rest }: NavItemProps) => {
  return (
    <Link
      as={RouterLink}
      to={path}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const SidebarContent = ({ ...rest }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function logOut() {
    Cookies.remove("token");
    dispatch(removeUser());
    window.location.reload();
    return navigate("/");
  }

  return (
    <Flex
      transition="3s ease"
      borderRight="1px"
      bg="brand.background"
      color="white"
      borderRightColor="grey"
      width="100%"
      h="full"
      justifyContent="center"
      alignItems="center"
      flexDirection="row"
      {...rest}
    >
      <Flex flexDirection="column">
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
          <LogoCircle fontSize="3rem" textTransform="lowercase"></LogoCircle>
          <CloseButton display={{ base: "flex", md: "none" }} />
        </Flex>
        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon} path={link.path}>
            {link.name}
          </NavItem>
        ))}
        <ButtonPost />
      </Flex>
      <Button
        alignItems="center"
        gap="10px"
        mx="8"
        bottom="20px"
        position="absolute"
        colorScheme="transparent"
        onClick={logOut}
      >
        <Text>
          <CiLogout></CiLogout>
        </Text>
        <Text>Logout</Text>
      </Button>
    </Flex>
  );
};

const SideBarLeft = () => {
  return (
    <Box h="100vh" w="100%" position="relative">
      <SidebarContent display={{ base: "no  ne", md: "block" }} />
    </Box>
  );
};

export default SideBarLeft;
