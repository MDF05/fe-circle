import React from "react"
import { LinkProps } from '@chakra-ui/react';


export default interface ChakraLinkProps extends LinkProps {
  children: React.ReactNode;
  to: string;
}
