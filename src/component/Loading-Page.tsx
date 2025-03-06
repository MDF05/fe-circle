import { Flex, Spinner } from "@chakra-ui/react";

export function LoadingPage() {
    return (
        <Flex height={'100%'} width={"100%"} alignItems={"Center"} justifyContent={"center"}>
            <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
            />
        </Flex>
    )
}