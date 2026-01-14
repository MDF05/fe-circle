import { useForm } from "react-hook-form";
import AuthForm from "../../features/auth/components/Auth-Form";
import FormInputTypes from "../../types/form-input-type";
import { zodResolver } from "@hookform/resolvers/zod";
import ForgotPasswordTypes from "../../features/auth/types/Forgot-Password-Types";
import { forgotSchema } from "../../features/auth/schema/forgot-password-schema";
import { apiV1 } from "../../lib/api-v1";
import { toast } from "react-toastify";

const listForgotPasswordInput: FormInputTypes[] = [
  {
    typeInput: "email",
    placeHolder: "email ",
    inputName: "email",
  },
];

export default function ForgotPassword() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: zodResolver(forgotSchema) });

  async function submitData(data: ForgotPasswordTypes) {
    try {
      await apiV1.post("/forgot-password", data);
      toast.success("Reset link sent! Check your email.");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  }

  return (
    <AuthForm
      errors={errors}
      page="forgot password"
      handleSubmit={handleSubmit}
      hookForm={register}
      submitData={submitData}
      datas={listForgotPasswordInput}
    ></AuthForm>
  );
}
