import { useForm } from "react-hook-form";
import AuthForm from "../../features/auth/components/Auth-Form";
import FormInputTypes from "../../types/form-input-type";
import { zodResolver } from "@hookform/resolvers/zod";
import ForgotPasswordTypes from "../../features/auth/types/Forgot-Password-Types";
import { forgotSchema } from "../../features/auth/schema/forgot-password-schema";

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

  function submitData(data: ForgotPasswordTypes) {
    console.log(data);
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
