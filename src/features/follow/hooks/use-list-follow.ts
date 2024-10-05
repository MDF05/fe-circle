import { useEffect, useState } from "react";
import ProfileEntity from "../../../entities/profile-entity";
import getAllProfile from "../../../lib/get-all-profile";

export function useListFollows(limit?: string) {
    const [profiles, setProfiles] = useState<ProfileEntity[]>([]);

    useEffect(() => {
        getAllProfile(setProfiles, limit);
    }, []);


    return {
        profiles,
    }
}