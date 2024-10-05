import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  RegisterSchema,
  registerSchema,
} from "../../../features/auth/schema/register-schema";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ResponseUserDTO } from "../../../dto/user-dto";
import axios, { AxiosError } from "axios";

export default function useRegisterHooks() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({ resolver: zodResolver(registerSchema) });

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

  return {
    register,
    handleSubmit,
    errors,
    useForm,
    submitData,
    errorMessage,
    succesMessage,
  };
}
