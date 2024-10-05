import { useForm } from "react-hook-form";
import AuthForm from "../../features/auth/components/Auth-Form";
import RegisterProps from "../../features/auth/types/Register-Types";
import FormInputTypes from "../../types/form-input-type";
import {
  registerSchema,
  RegisterSchema,
} from "../../features/auth/schema/register-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { ResponseUserDTO } from "../../dto/user-dto";
import { useNavigate } from "react-router-dom";

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
  const [succesMessage, setSuccesMessage] = useState<string | undefined>(
    undefined,
  );
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined,
  );
  const Navigate = useNavigate();

  async function submitData(data: RegisterSchema): Promise<void> {
    try {
      const responses = await axios.post<null, ResponseUserDTO, RegisterSchema>(
        "http://localhost:3000/api/v1/register",
        data,
      );
      setSuccesMessage(responses.data.message);
      setTimeout(() => Navigate("/login"), 3000);
    } catch (err: unknown) {
      if (err instanceof AxiosError)
        setErrorMessage(err.response?.data.message);
      else setErrorMessage("unknown error");
    }
  }
  return (
    <AuthForm
      page="register"
      handleSubmit={handleSubmit}
      submitData={submitData}
      hookForm={register}
      errors={errors}
      datas={ListRegisterInput}
      succesMessage={succesMessage}
      errorMessage={errorMessage}
    ></AuthForm>
  );
}
