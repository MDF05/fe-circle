import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import getFollowerByProfileId from "../../../lib/get-follower-by-profile-id";
import { FollowerEntity } from "../../../entities/follower-entity";

export default function useListFollower() {
    const { state } = useLocation();
    const [followList, setFollowList] = useState<FollowerEntity[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        getFollowerByProfileId(state.profileId, setFollowList);
    }, [state.profileId]);


    return { followList, navigate, state }
}