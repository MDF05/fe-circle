import { useForm } from "react-hook-form";
import AuthForm from "../../features/auth/components/Auth-Form";
import FormInputTypes from "../../types/form-input-type";
import LoginTypes from "../../features/auth/types/login-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../features/auth/schema/login-schema";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
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
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const dispatch = useAppDispatch();
  const Navigate = useNavigate();

  async function submitData(data: LoginTypes) {
    setLoading(true);
    try {
      const response = await dispatch(loginAsync({ ...data, captchaToken })).unwrap();
      const token = response.data.token;

      Cookies.set("token", token, { expires: 1 });

      if (response.status)
        setTimeout(() => {
          Navigate("/");
        }, 2000);
    } catch (err) {
      return err;
    } finally {
      setLoading(false);
    }
  }

  return <AuthForm page="login" handleSubmit={handleSubmit} submitData={submitData} hookForm={register} errors={errors} datas={ListLoginInput} isLoading={loading} setCaptchaToken={setCaptchaToken}></AuthForm>;
}
