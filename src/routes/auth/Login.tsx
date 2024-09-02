import AuthForm from "../../features/auth/components/AuthForm";

export default function Login() {


    return <AuthForm page="login" handleSubmit={(e: any) => e}></AuthForm>
}