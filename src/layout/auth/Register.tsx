import { useForm } from "react-hook-form";
import AuthForm from "../../features/auth/components/Auth-Form";
import RegisterProps from "../../features/auth/types/register-types";
import FormInputTypes from "../../types/Form-Input-Types";
import { RegisterSchema } from "../../features/auth/schema/register";

const ListRegisterInput: FormInputTypes[] = [
  {
    typeInput: "text",
    placeHolder: "Full Name ",
    formName: "fullName",
    message: "please enter your full name !",
  },
  {
    typeInput: "email",
    placeHolder: "email ",
    formName: "email",
    message: "please enter your email !",
  },
  {
    typeInput: "password",
    placeHolder: "password ",
    formName: "password",
    message: "please enter your password !",
  },
];

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>();

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
