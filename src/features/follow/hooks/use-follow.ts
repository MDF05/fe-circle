import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {  useAppSelector } from "../../../hooks/use-store";
import ProfileEntity from "../../../entities/profile-entity";
import getFollowByProfileId from "../../../lib/get-follow-by-profile-id";
import { apiV1 } from "../../../lib/api-v1";

export default function useFollow(profile: ProfileEntity) {
    const [followId, setFollowId] = useState<string>("");
    const {
        handleSubmit,
        formState: { isSubmitted },
    } = useForm();
    // const dispatch: Function = useAppDispatch();
    const ff = useAppSelector((state) => state.followFollower);

    useEffect(() => {
        if (profile) getFollowByProfileId(profile.id, setFollowId);
    }, [profile, isSubmitted]);

    async function handleFollow() {
        try {
            const res = await apiV1.post(`/follow/${profile?.id}`, {});
            setFollowId(res.data.data.id);
            

            localStorage.setItem("followFollower", JSON.stringify({follower : ff.follower, following : ff.following + 1 }) )
            
        } catch (err : unknown) {
            setFollowId("");
            return err;
        }
    }

    async function handleReset() {
        try {
            await apiV1.delete(`/follow/${followId}`);
            setFollowId("");
           
            localStorage.setItem("followFollower", JSON.stringify({follower : ff.follower, following : ff.following - 1 }) )
        } catch (err : unknown) {
            setFollowId("");
            return err;
        }
    }

    return { handleReset, handleFollow, handleSubmit, followId }
}