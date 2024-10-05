import { useContext, useEffect, useState } from "react";
import { useAppSelector } from "./use-store";
import ProfileConstUserEntity from "../entities/profile-entity-constraints-user";
import { EditProfileContext } from "../context/Modal-Edit-Profile";
import { getProfileById } from "../lib/get-profile-by-id";

export default function sidebarRightHook() {
    const user = useAppSelector((state) => state.auth);
    const followFollower = useAppSelector((state) => state.followFollower);
    const [profile, setProfile] = useState<ProfileConstUserEntity>();
    const { isOpen } = useContext(EditProfileContext);

    useEffect(() => {
        getProfileById(user.profile.id, setProfile);
    }, [isOpen]);


    return {
        profile, followFollower
    }
}