import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  RegisterSchema,
  registerSchema,
} from "../../../features/auth/schema/register-schema";
import { useNavigate } from "react-router-dom";
import { ResponseUserDTO } from "../../../dto/user-dto";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { apiV1 } from "../../../lib/api-v1";
import { useState } from "react";

export default function useRegisterHooks() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({ resolver: zodResolver(registerSchema) });
  const [loading, setLoading] = useState<boolean>(false)
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const Navigate = useNavigate();

  async function submitData(data: RegisterSchema): Promise<void> {
    setLoading(true)

    try {
      const responses = await apiV1.post<null, ResponseUserDTO, RegisterSchema & { captchaToken?: string | null }>(
        "/register",
        { ...data, captchaToken },
      );

      toast.success(responses.data.message)
      setTimeout(() => Navigate("/login"), 3000);
    } catch (err: unknown) {
      if (err instanceof AxiosError)
        toast.error(err.response?.data.message);
      else toast.error("unknown error");
    } finally {
      setLoading(false)
    }
  }

  return {
    register,
    handleSubmit,
    errors,
    useForm,
    submitData,
    loading,
    setCaptchaToken
  };
}
