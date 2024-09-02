"use client";

import {
  Box,
  CloseButton,
  Flex,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Icon,
  Link,
} from "@chakra-ui/react";

import { Link as RouterLink } from "react-router-dom";
import { IconType } from "react-icons";
import LogoCircle from "./LogoCircle";
import { BiSolidHomeCircle } from "react-icons/bi";
import { TbUserSearch } from "react-icons/tb";
import { FaRegHeart, FaRegCircleUser } from "react-icons/fa6";

interface LinkItemProps {
  name: string;
  icon: IconType;
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: React.ReactNode;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: BiSolidHomeCircle },
  { name: "Search", icon: TbUserSearch },
  { name: "Follows", icon: FaRegHeart },
  { name: "Profile", icon: FaRegCircleUser },
];

const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Box
      as="a"
      href="#"
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
    </Box>
  );
};

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      borderRight="1px"
      bg="brand.background"
      color="white"
      borderRightColor="grey"
      //   pos="fixed"
      width="100%"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <LogoCircle fontSize="3rem" textTransform="lowercase"></LogoCircle>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
      <Box py="10px" px="25px">
        <Link
          as={RouterLink}
          display="flex"
          bg="brand.color"
          h="40px"
          width="100%"
          borderRadius="20px"
          justifyContent="center"
          alignItems="center"
          to="/create-post"
          fontFamily="body"
          fontWeight="bold"
          _hover={{
            color: "white",
          }}
        >
          Create Post
        </Link>
      </Box>
    </Box>
  );
};

const SidebarWithHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box h="100vh" w="100%" position="relative">
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default SidebarWithHeader;
