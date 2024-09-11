import { Flex, Icon, Image, Text, Box } from "@chakra-ui/react";
import mainLogo from "../../assets/image/main-logo.png";
import github from "../../assets/image/github.png";
import instagram from "../../assets/image/instagram.png";
import inkedin from "../../assets/image/inkedin.png";
import facebook from "../../assets/image/faceebook.png";

export default function DevelopmentInfo() {
  return (
    <Flex
      flexDirection="column"
      background="brand.backgroundYoung"
      padding="20px"
      gap="10px"
    >
      <Flex wrap="wrap" gap="5px" fontSize={"12px"} alignItems={"center"}>
        Develop by Muhammad Dava Fahreza ●<Image src={github}></Image>
        <Image src={inkedin}></Image>
        <Image src={instagram}></Image>
        <Image src={facebook}></Image>
      </Flex>
      <Text
        display="flex"
        color="grey"
        justifyContent="justify"
        alignItems="center"
        width="100%"
        fontSize="11px"
        gap="5px"
      >
        Powered By <Image src={mainLogo} width="15px" height="12px"></Image>{" "}
        DumbWays Indonesia ● #1 Coding Bootcamp
      </Text>
    </Flex>
  );
}
