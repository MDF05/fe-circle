import { Link as ReactRouter } from "react-router-dom";
import { Link } from "@chakra-ui/react";

interface ChakraLinkProps {
  path: string;
  children: JSX.Element;
}

export default function ChakraLink({
  path,
  children,
  ...rest
}: ChakraLinkProps) {
  return (
    <Link
      as={ReactRouter}
      to={path}
      _hover={{ textDecoration: "none" }}
      {...rest}
    >
      {children}
    </Link>
  );
}
