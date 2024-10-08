import { useForm } from "react-hook-form";
import threadsEntity from "../../../entities/thread-entity";
import postLikeByThreadId from "../../../lib/post-like-by-thread-id";
import removeLikeByLikeId from "../../../lib/remove-like-by-like-id";
import { useEffect, useState } from "react";
import getLikeByThreadId from "../../../lib/get-like-by-thread-id";

export default function useThread(thread: threadsEntity) {
    const { handleSubmit } = useForm();
    const [likeId, setLikeId] = useState<string | null>(null);
    const [countLike, setCountLike] = useState<number>(thread._count.like);

    useEffect(() => {
        getLikeByThreadId(thread.id, setLikeId);
    }, []);

    async function handleLike() {
        postLikeByThreadId(thread.id, setCountLike, setLikeId, countLike);
    }

    async function handleResetLike() {
        removeLikeByLikeId(likeId, setCountLike, setLikeId, countLike);
    }

    return { handleSubmit, handleLike, handleResetLike, countLike, likeId }
}