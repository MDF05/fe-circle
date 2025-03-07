import { apiV1 } from "./api-v1";
import Cookies from "js-cookie";

export default async function postLikeByThreadId(threadId: string, setCountLike: Function, setLike: Function, countLike: number, setLoading : (loading : boolean) => void) {
    const token = Cookies.get("token");
    setLoading(true);
    try {
        const res = await apiV1.post(`/like/${threadId}`, {
            headers: {
                Authorization: `Bearer ` + token,
            },
        });
        setCountLike(countLike + 1);
        setLike(res.data.data.id);
    } catch (err) {
        setLike(null);
    }finally {
        setLoading(false)
    }
}