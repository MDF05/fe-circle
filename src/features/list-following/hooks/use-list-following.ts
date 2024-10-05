import { useLocation, useNavigate } from "react-router-dom";
import { FollowingEntity } from "../../../entities/following-entity";
import { useEffect, useState } from "react";
import getFollowingByProfileId from "../../../lib/get-following-by-profile-id";

export default function useListFollowing() {
    const { state } = useLocation();
    const [followList, setFollowList] = useState<FollowingEntity[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        getFollowingByProfileId(state.profileId, setFollowList);
    }, [state.profileId]);


    return { followList, navigate, state }
}