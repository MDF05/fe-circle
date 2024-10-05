import { apiV1 } from "./api-v1";
import Cookies from 'js-cookie';

export default async function getLikeByThreadId(threadId: string, setLike: Function): Promise<void> {
    const token = Cookies.get("token");
    try {
        const response = await apiV1.get(`/like/${threadId}`, {
            headers: {
                Authorization: `Bearer ` + token,
            },
        });
        setLike(response.data.data.id);
    } catch (err) {
        setLike(null);
    }
}