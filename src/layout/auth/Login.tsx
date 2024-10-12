import { useForm } from "react-hook-form";
import AuthForm from "../../features/auth/components/Auth-Form";
import FormInputTypes from "../../types/form-input-type";
import LoginTypes from "../../features/auth/types/login-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../features/auth/schema/login-schema";
import Cookies from "js-cookie";
import  { AxiosError } from "axios";
import { ResponseUserDTO } from "../../dto/user-dto";
import { useDispatch } from "react-redux";
import { setUser } from "../../stores/auth-slice";
import { useNavigate } from "react-router-dom";
import { setFollowFollower } from "../../stores/follow-follower-slice";
import { toast } from "react-toastify";
import { apiV1 } from "../../lib/api-v1";
import { useState } from "react";

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
    formState: { errors, isLoading },
  } = useForm<LoginTypes>({ resolver: zodResolver(loginSchema) });
  const [loading, setLoading] = useState<boolean>(false)

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  async function submitData(data: LoginTypes): Promise<void> {
    setLoading(true)
    try {
      if(isLoading) toast.loading("loading.....")
      const response = await apiV1.post<null, ResponseUserDTO, LoginTypes>(
        "login",
        {
          email: data.email,
          password: data.password,
        },
      );

      const { user, token } = response.data.data;
      Cookies.set("token", token, { expires: 1 });

      localStorage.setItem("user",JSON.stringify(user))
      dispatch(setUser(user));
      dispatch(setFollowFollower(user.profile._count));

      if (response.data.success) Navigate("/");
    } catch (err : unknown) {
      if(err instanceof AxiosError) toast.error(err?.response?.data.message)
      else toast.error("undifined error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthForm
      page="login"
      handleSubmit={handleSubmit}
      submitData={submitData}
      hookForm={register}
      errors={errors}
      datas={ListLoginInput}
      isLoading={loading}
    ></AuthForm>
  );
}
