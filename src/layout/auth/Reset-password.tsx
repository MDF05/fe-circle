import { useForm } from "react-hook-form";
import AuthForm from "../../features/auth/components/Auth-Form";
import FormInputTypes from "../../types/form-input-type";
import { zodResolver } from "@hookform/resolvers/zod";
import ResetPasswordTypes from "../../features/auth/types/Reset-Password-Types";
import { resetSchema } from "../../features/auth/schema/reset-password-schema";
import { useSearchParams, useNavigate } from "react-router-dom";
import { apiV1 } from "../../lib/api-v1";
import { toast } from "react-toastify";

const listResetPassword: FormInputTypes[] = [
  {
    typeInput: "password",
    placeHolder: "password",
    inputName: "password",
  },
  {
    typeInput: "password",
    placeHolder: "new password ",
    inputName: "newPassword",
  },
];

export default function ResetPassword() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: zodResolver(resetSchema) });

  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const Navigate = useNavigate();

  async function submitData(data: ResetPasswordTypes) {
    if (!token) {
      toast.error("Invalid or missing token");
      return;
    }

    try {
      await apiV1.post("/reset-password", { ...data, token });
      toast.success("Password reset successfully");
      setTimeout(() => Navigate("/login"), 2000);
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  }

  return (
    <AuthForm
      page="reset password"
      handleSubmit={handleSubmit}
      submitData={submitData}
      hookForm={register}
      errors={errors}
      datas={listResetPassword}
    ></AuthForm>
  );
}
