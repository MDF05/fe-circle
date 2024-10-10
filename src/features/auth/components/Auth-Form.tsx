import {
  FormControl,
  FormErrorMessage,
  Input,
  Container,
  Center,
  Flex,
  Button,
  Text,
  Box,
  Grid,
} from "@chakra-ui/react";
import LogoCircle from "../../../component/Logo-Circle";

import AuthFormProps from "../types/Auth-From-Props";
import generateTextForm from "../utils/generate-Text-Form";
import ListInputFromTypes from "../../../types/form-input-type";
import ChakraLink from "../../../component/Chakra-Link-Router";
import "react-toastify/dist/ReactToastify.css";

function AuthForm({
  page,
  handleSubmit,
  hookForm,
  submitData,
  errors,
  datas,
  isLoading, 
}: AuthFormProps) {
  const textForm = generateTextForm(page);

  return (
    <Flex
      h="100vh"
      alignItems="center"
      paddingBottom={"50px"}
      overflowY={"auto"}
    >
      <Container maxW="container.lg">
        <Center>
          <Flex direction="column" w={{ base: "100%", md: "60%", lg: "50%" }}>
            <LogoCircle fontSize="5rem"></LogoCircle>
            <Text
              color="white"
              fontSize="4xl"
              mb="10px"
              textTransform="capitalize"
              mt={"0px"}
            >
              {textForm}
            </Text>
            <Grid
              as="form"
              onSubmit={handleSubmit((data: object) => submitData(data))}
              gap="20px"
              color="white"
            >
              {datas.map((data: ListInputFromTypes, index: number) => {
                let inputName = data.inputName;
                return (
                  <FormControl
                    color="white"
                    key={index}
                    isInvalid={errors[inputName] !== undefined}
                  >
                    <Input
                      type={data.typeInput}
                      placeholder={data.placeHolder}
                      {...hookForm(inputName)}
                    />
                    {errors[inputName] && (
                      <FormErrorMessage>
                        {errors[inputName].message}
                      </FormErrorMessage>
                    )}
                  </FormControl>
                );
              })}
              <Button
                type="submit"
                variant="solid"
                textTransform="capitalize"
                color="white"
                bg="brand.color"
                isLoading={isLoading}
              >
                {page}
              </Button>

              {(page == "login" || page == "register") && (
                <Box
                  as="form"
                  width={"100%"}
                  action="http://localhost:4000/api/v1/google"
                  method="GET"
                >
                  <Text textAlign={"center"} mb={"15px"}>
                    or{" "}
                  </Text>
                  <Button
                    type="submit"
                    variant="outline"
                    textTransform="capitalize"
                    color="white"
                    bg="brand.color"
                    width={"100%"}
                  >
                    Google
                  </Button>
                </Box>
              )}

              {page == "login" && (
                <ChakraLink
                  to="/forgot-password"
                  color={"brand.color"}
                  textAlign={"end"}
                >
                  Forgot Password ?
                </ChakraLink>
              )}

              {page != "reset password" && (
                <Box>
                  {page == "login" ? (
                    <Box>
                      Don't have an account yet ?
                      <ChakraLink to="/register" color={"brand.color"}>
                        {" "}
                        Create Account
                      </ChakraLink>
                    </Box>
                  ) : (
                    <Box>
                      Already have account ?
                      <ChakraLink to="/login" color={"brand.color"}>
                        {" "}
                        Login
                      </ChakraLink>
                    </Box>
                  )}
                </Box>
              )}
            </Grid>
          </Flex>
        </Center>
      </Container>
    </Flex>
  );
}

export default AuthForm;
