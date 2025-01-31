"use client";

import { Box, Flex, Icon, Link, Text } from "@chakra-ui/react";

import { TbUserSearch } from "react-icons/tb";
import { FaRegHeart, FaRegCircleUser } from "react-icons/fa6";
import { RiHome7Fill } from "react-icons/ri";

import { Link as RouterLink } from "react-router-dom";
import LogoCircle from "./Logo-Circle";
import ButtonPost from "./Button-Post";
import { LinkItemProps, NavItemProps } from "../types/sidebar-left-types";
import ButtonLogout from "./Button-Logout";

export const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: RiHome7Fill, path: "/" },
  { name: "Search", icon: TbUserSearch, path: "/search" },
  { name: "Follow", icon: FaRegHeart, path: "/follow" },
  { name: "Profile", icon: FaRegCircleUser, path: "/my-profile" },
];

const NavItem = ({ icon, path, children, ...rest }: NavItemProps) => {
  return (
    <Link as={RouterLink} to={path} style={{ textDecoration: "none" }} _focus={{ boxShadow: "none" }} w={"full"} display={"grid"} gap={"20px"} justifyContent={"space-round"}>
      <Flex
        align="center"
        p="4"
        mx={{ base: 0, lg: 4 }}
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
            mr={{ base: 0, lg: 4 }}
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
  return (
    <Flex
      transition="3s ease"
      borderRight="1px"
      color="white"
      borderRightColor="grey"
      width="100%"
      h="100%"
      justifyContent={{ base: "center", lg: "start" }}
      alignItems={{ base: "center", lg: "start" }}
      flexDirection="row"
      {...rest}
    >
      <Flex flexDirection={{ base: "row", lg: "column" }} w={{ base: "100%", lg: "90%" }}>
        <Flex h="100%" alignItems="center" mx={{ base: "0", lg: "1" }} justifyContent="space-between" boxSizing="border-box">
          <LogoCircle fontSize="3rem" textTransform="lowercase" display={{ base: "none", lg: "inherit" }}></LogoCircle>
        </Flex>
        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon} path={link.path} w={{ base: "full" }} justifyContent={{ base: "center", lg: "start" }}>
            <Text display={{ base: "none", lg: "inherit" }}>{link.name}</Text>
          </NavItem>
        ))}
        <ButtonPost />
        <ButtonLogout display={{ base: "none", lg: "inherit" }}></ButtonLogout>
      </Flex>
    </Flex>
  );
};

const SideBarLeft = () => {
  return (
    <Box h={{ base: "60px", lg: "100vh" }} w="100%" position="relative">
      <SidebarContent />
    </Box>
  );
};

export default SideBarLeft;
