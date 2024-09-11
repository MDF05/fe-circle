import AuthForm from "../../features/auth/components/Auth-Form";

export default function ResetPassword() {
  return (
    <AuthForm page="reset password" handleSubmit={(e: any) => e}></AuthForm>
  );
}
