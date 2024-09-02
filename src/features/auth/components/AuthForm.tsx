import {
    FormControl,
    // FormErrorMessage,
    FormHelperText,
    Input,
    Container,
    Center,
    Flex,
    Button,
    Text,
    Box,
    Link
} from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'
import LogoCircle from '../../../component/LogoCircle'




import { useState } from 'react'
import AuthFormProps from '../types/AuthFromProps'
import NavigationForm from '../components/NavigationForm'
import generateTextForm from '../utils/generateTextForm'
import FormInputProps from '../types/FormInputProps'




function AuthForm({ page, handleSubmit }: AuthFormProps) {
    const textForm = generateTextForm(page)
    const [formData, setFormData] = useState<FormInputProps>({
        email: "",
        password: "",
        fullName: "",
        newPassword: "",
    })

    function getData(event: React.ChangeEvent<HTMLInputElement>) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });

        return formData
    }


    return (
        <Flex h="100vh" alignItems="center" >
            <Container maxW="container.lg">
                <Center>
                    <Flex direction="column" w={{ base: "100%", md: "60%", lg: "50%" }}>
                        <LogoCircle fontSize="5rem"></LogoCircle>
                        <Text color="white" fontSize="4xl" mb="10px" textTransform="capitalize" >
                            {textForm}
                        </Text>

                        <FormControl display="grid" gap="20px" color="white" >
                            {page == "register" ? (<Box>
                                <Input type="text" placeholder="Full Name" id='fullName' name="fullName" onChange={(event) => getData(event)} />
                                <FormHelperText>Please enter a valid email address.</FormHelperText>
                            </Box>) : ""}

                            {page != "reset password" ? <Box>
                                <Input type="email" placeholder="Email" name="email" id='email' onChange={(event) => getData(event)} />
                                <FormHelperText>Please enter a valid email address.</FormHelperText>
                            </Box> : ""}

                            {page == "reset password" ? (<Box>
                                <Input type="password" placeholder="new password" id='password' name="newPassword" onChange={(event) => getData(event)} />

                                <FormHelperText>Please enter a valid email address.</FormHelperText>
                            </Box>) : ""}

                            {page != "forgot password" ? (<Box>
                                <Input type="password" placeholder={(page == "reset password" ? "confirm " : "") + "password"} name="password" onChange={(event) => getData(event)} id='forgotPassword' />

                                <FormHelperText>Please enter a valid email address.</FormHelperText>

                                <Box display="flex" justifyContent="end">{page == "login" ? <Link as={ReactRouterLink} to="/forgot-password"> forgot password ?</Link > : ""}</Box>
                            </Box>) : ""}


                            <Button type='submit' variant="solid" textTransform="capitalize" color="white" bg="brand.color" onClick={() => handleSubmit(formData)}>
                                {page}
                            </Button>
                            {
                                page != "reset password" ? <Box>
                                    {page == "login" ?
                                        (<NavigationForm path='register' text="Don't have an account yet ?" />) :
                                        (<NavigationForm path='login' text='Already have account ?' />)}
                                </Box> : ""
                            }
                        </FormControl>
                    </Flex>
                </Center>
            </Container>
        </Flex>
    )
}


export default AuthForm;


