import { useForm } from "react-hook-form";
import AuthForm from "../../features/auth/components/Auth-Form";
import FormInputTypes from "../../types/form-input-type";
import LoginTypes from "../../features/auth/types/login-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../features/auth/schema/login-schema";
import Cookies from "js-cookie";
import axios from "axios";
import { ResponseUserDTO } from "../../dto/user-dto";
import { useDispatch } from "react-redux";
import { setUser } from "../../stores/auth-slice";
import { useNavigate } from "react-router-dom";

const ListLoginInput: FormInputTypes[] = [
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

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginTypes>({ resolver: zodResolver(loginSchema) });

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  async function submitData(data: LoginTypes): Promise<void> {
    const response = await axios.post<null, ResponseUserDTO, LoginTypes>(
      "http://localhost:3000/api/v1/login",
      {
        email: data.email,
        password: data.password,
      },
    );

    const { user, token } = response.data.data;
    Cookies.set("token", token);
    dispatch(setUser(user));

    if (response.data.success) Navigate("/");
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
