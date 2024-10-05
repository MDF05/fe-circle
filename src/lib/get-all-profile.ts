import { apiV1 } from "./api-v1";
import Cookies from "js-cookie";

export default async function getAllProfile(setProfiles: Function, limit?: string,): Promise<void> {
    const token: string | undefined = Cookies.get("token")
    if (token) {
        try {
            const res = await apiV1.get(`/profile${limit ? `?limit=${limit}` : ""}`, {
                headers: { Authorization: "Bearer " + token },
            });
            setProfiles(res.data.data);
        } catch (err) {
            setProfiles([]);
        }
    }
}