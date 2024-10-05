import { apiV1 } from "./api-v1";
import Cookies from "js-cookie";

export default async function removeLikeByLikeId(likeId: string | null, setCountLike: Function, setLike: Function, countLike: number) {
    const token = Cookies.get("token");
    try {
        await apiV1.delete(`/like/${likeId}`, {
            headers: {
                Authorization: `Bearer ` + token,
            },
        });
        setCountLike(countLike - 1);
        setLike(null);
    } catch (erry) {
        setLike(likeId);
    }
}