import { useForm } from "react-hook-form";
import AuthForm from "../../features/auth/components/Auth-Form";
import FormInputTypes from "../../types/Form-Input-Types";
import LoginTypes from "./../../features/auth/types/login-types";

const ListLoginInput: FormInputTypes[] = [
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
  } = useForm<LoginTypes>();

  function submitData(data: LoginTypes): void {
    console.log(data.email);
  }

  return (
    <AuthForm
      page="login"
      handleSubmit={handleSubmit}
      submitData={submitData}
      hookForm={register}
      errors={errors}
      datas={ListLoginInput}
    ></AuthForm>
  );
}
