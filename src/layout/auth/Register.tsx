import AuthForm from "../../features/auth/components/Auth-Form";
import FormInputTypes from "../../types/form-input-type";
import useRegisterHooks from "./hooks/user-register-hooks";

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
    errors,
    handleSubmit,
    register,
    submitData,
    loading
  } = useRegisterHooks();

  return (
    <AuthForm
      page="register"
      handleSubmit={handleSubmit}
      submitData={submitData}
      hookForm={register}
      errors={errors}
      datas={ListRegisterInput}
      isLoading={loading}
    ></AuthForm>
  );
}
