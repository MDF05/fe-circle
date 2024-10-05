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
import { removeUser, setUser } from "../../stores/auth-slice";
import { useNavigate } from "react-router-dom";
import { setFollowFollower } from "../../stores/follow-follower-slice";

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
    try {
      const response = await axios.post<null, ResponseUserDTO, LoginTypes>(
        "http://localhost:3000/api/v1/login",
        {
          email: data.email,
          password: data.password,
        },
      );

      const { user, token } = response.data.data;
      Cookies.set("token", token, { expires: 1 });
      dispatch(setUser(user));
      dispatch(setFollowFollower(user.profile._count));

      if (response.data.success) Navigate("/");
    } catch (err) {
      console.log(err);
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
    ></AuthForm>
  );
}
