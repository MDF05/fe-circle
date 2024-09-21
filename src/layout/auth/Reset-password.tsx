import { useForm } from "react-hook-form";
import AuthForm from "../../features/auth/components/Auth-Form";
import FormInputTypes from "../../types/form-input-type";
import { zodResolver } from "@hookform/resolvers/zod";
import ResetPasswordTypes from "../../features/auth/types/Reset-Password-Types";
import { resetSchema } from "../../features/auth/schema/reset-password-schema";

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

  function submitData(data: ResetPasswordTypes) {
    console.log(data);
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
