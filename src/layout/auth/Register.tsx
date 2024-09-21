import { useForm } from "react-hook-form";
import AuthForm from "../../features/auth/components/Auth-Form";
import RegisterProps from "../../features/auth/types/Register-Types";
import FormInputTypes from "../../types/form-input-type";
import {
  registerSchema,
  RegisterSchema,
} from "../../features/auth/schema/register-schema";
import { zodResolver } from "@hookform/resolvers/zod";

const ListRegisterInput: FormInputTypes[] = [
  {
    typeInput: "text",
    placeHolder: "Full Name ",
    inputName: "fullName",
  },
  {
    typeInput: "email",
    placeHolder: "email ",
    inputName: "email",
  },
  {
    typeInput: "password",
    placeHolder: "password ",
    inputName: "password",
  },
];

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterProps>({ resolver: zodResolver(registerSchema) });

  function submitData(data: RegisterSchema): void {
    console.log(data);
  }

  return (
    <AuthForm
      page="register"
      handleSubmit={handleSubmit}
      submitData={submitData}
      hookForm={register}
      errors={errors}
      datas={ListRegisterInput}
    ></AuthForm>
  );
}
