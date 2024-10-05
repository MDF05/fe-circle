import { apiV1 } from "./api-v1";
import Cookies from 'js-cookie';

export async function getProfileById(profileId: string, setProfile: Function) {
    const token = Cookies.get("token");
    try {
        const res = await apiV1.get(`/profile/${profileId}`, {
            headers: {
                Authorization: `Bearer ` + token,
            }
        });
        return setProfile(res.data.data);
    } catch (err) {
        return;
    }
}