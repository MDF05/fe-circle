import AuthForm from "../../features/auth/components/AuthForm"

export default function ResetPassword() {

    return <AuthForm page="reset password" handleSubmit={(e: any) => e}></AuthForm>
}