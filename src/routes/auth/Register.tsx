import AuthForm from "../../features/auth/components/AuthForm";
import FormInputProps from "../../features/auth/types/FormInputProps";



export default function Register() {
    function handleSubmitRegister(formData: FormInputProps) {
        const { fullName, email, password } = formData;

        console.log(fullName + " " + email + password)
    }

    return <AuthForm page="register" handleSubmit={handleSubmitRegister}></AuthForm>
}
