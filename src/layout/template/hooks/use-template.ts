import { useLocation } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/use-store";
import Cookies from "js-cookie";
import { asyncAuth } from "../../../stores/auth/auth-async";
import { useEffect } from "react";

export default function useTemplate() {
  const location: string = useLocation().pathname.replace("/", "");
  const dispatch = useAppDispatch();
  const token: string | undefined = Cookies.get("token");

  useEffect(() => {
    (async function () {
      await dispatch(asyncAuth(`${token}`)).unwrap();
    })();
  }, []);

  return { location, token };
}
