import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../hooks/use-store";
import ProfileEntity from "../../../entities/profile-entity";
import getFollowByProfileId from "../../../lib/get-follow-by-profile-id";
import { apiV1 } from "../../../lib/api-v1";
import { setFollowFollower } from "../../../stores/follow-follower-slice";

export default function useFollow(profile: ProfileEntity) {
    const [followId, setFollowId] = useState<string>("");
    const {
        handleSubmit,
        formState: { isSubmitted },
    } = useForm();
    const dispatch: Function = useAppDispatch();
    const ff = useAppSelector((state) => state.followFollower);

    useEffect(() => {
        if (profile) getFollowByProfileId(profile.id, setFollowId);
    }, [profile, isSubmitted]);

    async function handleFollow() {
        try {
            const res = await apiV1.post(`/follow/${profile?.id}`, {});
            setFollowId(res.data.data.id);
            dispatch(
                setFollowFollower({
                    follower: ff.follower,
                    following: ff.following + 1,
                }),
            );
        } catch (err) {
            setFollowId("");
        }
    }

    async function handleReset() {
        try {
            await apiV1.delete(`/follow/${followId}`);
            setFollowId("");
            dispatch(
                setFollowFollower({
                    follower: ff.follower,
                    following: ff.following - 1,
                }),
            );
        } catch (err) {
            setFollowId("");
        }
    }

    return { handleReset, handleFollow, handleSubmit, followId }
}