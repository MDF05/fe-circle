import AuthForm from "../../features/auth/components/Auth-Form";

export default function ForgotPassword() {
  return (
    <AuthForm page="forgot password" handleSubmit={(e: any) => e}></AuthForm>
  );
}
