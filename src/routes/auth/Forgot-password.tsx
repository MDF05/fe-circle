import AuthForm from "../../features/auth/components/AuthForm";

export default function ForgotPassword() {
    return <AuthForm page="forgot password" handleSubmit={(e: any) => e}></AuthForm>
}