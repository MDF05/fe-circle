import { useLocation } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/use-store";
import Cookies from "js-cookie";
import { setFollowFollower } from "../../../stores/follow-follower-slice";
import { asyncAuth } from "../../../stores/auth/auth-async";
import { useEffect } from "react";

export default function useTemplate() {
  const location: string = useLocation().pathname.replace("/", "");
  const dispatch = useAppDispatch();
  const token: string | undefined = Cookies.get("token");

  useEffect(() => {
    (async function () {
      const data = await dispatch(asyncAuth(`${token}`)).unwrap();
      const res = data.data.data.profile._count;
      dispatch(setFollowFollower({ follower: res.follower, following: res.following }));
    })();
  }, []);

  return { location, token };
}
