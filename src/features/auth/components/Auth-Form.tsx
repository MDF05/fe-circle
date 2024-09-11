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
import LogoCircle from "../../../component/LogoCircle";

import AuthFormProps from "../types/Auth-From-Props";
import NavigationForm from "./Navigation-Form";
import generateTextForm from "../utils/generate-Text-Form";
import ListInputFromTypes from "../../../types/Form-Input-Types";
import ChakraLink from "../../../component/chakra-link";

function AuthForm({
  page,
  handleSubmit,
  hookForm,
  submitData,
  errors,
  datas,
}: AuthFormProps) {
  const textForm = generateTextForm(page);

  return (
    <Flex h="100vh" alignItems="center">
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
                return (
                  <FormControl
                    color="white"
                    key={index}
                    isInvalid={errors[data.formName]}
                  >
                    <Input
                      type={data.typeInput}
                      placeholder={data.placeHolder}
                      {...hookForm(data.formName, {
                        required: {
                          value: true,
                          message: data.message,
                        },
                      })}
                    />
                    {errors[data.formName] && (
                      <FormErrorMessage>
                        {errors[data.formName].message}
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
              >
                {page}
              </Button>

              {page == "login" && (
                <ChakraLink path="/forgot-password">
                  <Text textAlign={"end"}>Forgot Password ?</Text>
                </ChakraLink>
              )}

              {page != "reset password" && (
                <Box>
                  {page == "login" ? (
                    <NavigationForm
                      path="register"
                      text="Don't have an account yet ? "
                    />
                  ) : (
                    <NavigationForm
                      path="login"
                      text="Already have account ? "
                    />
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
