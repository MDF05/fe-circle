import { apiV1 } from "./api-v1";
import Cookies from 'js-cookie';

export default async function getFollowByProfileId(profileId: string, setFollowId: Function, setFollow?: Function): Promise<void> {
    const token = Cookies.get("token");
    try {
        const res = await apiV1.get(`/follow/${profileId}`, { headers: { Authorization: "Bearer " + token } });
        setFollowId(res.data.data.id);
        if (setFollow) setFollow(res.data.data);
    } catch (err) {
        setFollowId("");
    }
}