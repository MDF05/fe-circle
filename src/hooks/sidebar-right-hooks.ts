import { useContext, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./use-store";
import ProfileConstUserEntity from "../entities/profile-entity-constraints-user";
import { EditProfileContext } from "../context/Modal-Edit-Profile";
import { getProfileById } from "../lib/get-profile-by-id";
import { asyncAuth } from "../stores/auth-async";
import { setFollowFollower } from "../stores/follow-follower-slice";
import cookies from "js-cookie";

export default function useSidebarRightHook() {
  const user = useAppSelector((state) => state.auth);
  const followFollower = useAppSelector((state) => state.followFollower);
  const [profile, setProfile] = useState<ProfileConstUserEntity>();
  const { isOpen } = useContext(EditProfileContext);
  const token = cookies.get("token");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user.profile) getProfileById(user?.profile?.id, setProfile);
    console.log(profile);
    (async function () {
      const data = await dispatch(asyncAuth(`${token}`)).unwrap();
      const res = data.data.data.profile._count;
      dispatch(setFollowFollower({ follower: res.follower, following: res.following }));
    })();
  }, [isOpen, token]);

  return {
    profile,
    followFollower,
  };
}
