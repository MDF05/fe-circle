import { apiV1 } from "./api-v1";
import Cookies from "js-cookie";

export default async function removeLikeByLikeId(likeId: string | null, setCountLike: (coount : number) => void, setLike: (likeId : string | null) => void, countLike: number) {
    const token = Cookies.get("token");
    try {
        await apiV1.delete(`/like/${likeId}`, {
            headers: {
                Authorization: `Bearer ` + token,
            },
        });
        setCountLike(countLike - 1);
        setLike(null);
    } catch (err : unknown) {
        setLike(likeId);

        return err;
    }
}