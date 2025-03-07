import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ProfileEntity from "../../../entities/profile-entity";
import getFollowByProfileId from "../../../lib/get-follow-by-profile-id";
import { apiV1 } from "../../../lib/api-v1";
import { useAppDispatch } from "../../../hooks/use-store";
import { addFollowing, decreaseFollowing } from "../../../stores/follow-follower/follow-follower-slice";

export default function useFollow(profile: ProfileEntity) {
    const [followId, setFollowId] = useState<string>("");
    const {
        handleSubmit,
        formState: { isSubmitted },
    } = useForm();
    const [loading, setLoading]  = useState<boolean>(false)
    
    const dispatch = useAppDispatch();

    
    useEffect(() => {
        if (profile) getFollowByProfileId(profile.id, setFollowId);
    }, [profile, isSubmitted]);
    
    async function handleFollow() {
        setLoading(true)
        try {
            const res = await apiV1.post(`/follow/${profile?.id}`, {});
            setFollowId(res.data.data.id);
            dispatch(addFollowing())
        } catch (err : unknown) {
            setFollowId("");
            return err;
        }finally {
            setLoading(false)
        }
    }

    async function handleReset() {
        setLoading(true)
        try {
            await apiV1.delete(`/follow/${followId}`);
            setFollowId("");

            dispatch(decreaseFollowing())
           
        } catch (err : unknown) {
            setFollowId("");
            return err;
        }finally {
            setLoading(false)
        }
    }

    return { handleReset, handleFollow, handleSubmit, followId,loading }
}