import { useForm } from "react-hook-form";
import AuthForm from "../../features/auth/components/Auth-Form";
import FormInputTypes from "../../types/form-input-type";
import LoginTypes from "../../features/auth/types/login-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../features/auth/schema/login-schema";
import Cookies from "js-cookie";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import { loginAsync } from "../../stores/auth/auth-async";
import { useAppDispatch } from "../../hooks/use-store";

const ListLoginInput: FormInputTypes[] = [
  {
    typeInput: "text",
    placeHolder: "email or username",
    inputName: "email",
  },
  {
    typeInput: "password",
    placeHolder: "password ",
    inputName: "password",
  },
];

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginTypes>({ resolver: zodResolver(loginSchema) });
  const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const Navigate = useNavigate();

  async function submitData(data: LoginTypes): Promise<void> {
    setLoading(true);
    try {
      const response = await dispatch(loginAsync(data)).unwrap();
      const token = response.data.token;

      Cookies.set("token", token, { expires: 1 });

      if (response.status)
        setTimeout(() => {
          Navigate("/");
        }, 2000);
    } catch (err: unknown) {
      if (err instanceof AxiosError) toast.error(err?.response?.data.message);
      else toast.error("undifined error");
    } finally {
      setLoading(false);
    }
  }

  return <AuthForm page="login" handleSubmit={handleSubmit} submitData={submitData} hookForm={register} errors={errors} datas={ListLoginInput} isLoading={loading}></AuthForm>;
}
