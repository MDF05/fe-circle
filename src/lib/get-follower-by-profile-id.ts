import { apiV1 } from "./api-v1";

export default async function getFollowerByProfileId(profileId: string, setFollow: Function) {
    try {
        const res = await apiV1.get(`follow/follower/${profileId}`);
        setFollow(res.data.data);
    } catch (e) {
        return;
    }
}