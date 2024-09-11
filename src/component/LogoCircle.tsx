import { Text } from "@chakra-ui/react";

function LogoCircle({ ...props }) {
  return (
    <Text
      as="h1"
      color="brand.color"
      fontFamily="body"
      margin="0px !important"
      padding="0px !important"
      fontWeight="bold"
      {...props}
    >
      Circle
    </Text>
  );
}

export default LogoCircle;
