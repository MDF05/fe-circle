import { Link as CLink } from "@chakra-ui/react";
import { Link as RRLink } from "react-router-dom";
import ChakraLinkProps from "../types/chakra-link-types";

export default function ChakraLink(props: ChakraLinkProps) {
  const { children, ...restProps } = props;

  return (
    <CLink as={RRLink} {...restProps} _hover={{ textDecoration: "none" }}>
      {children}
    </CLink>
  );
}
