import { useForm } from "react-hook-form";
import postLikeByThreadId from "../../../lib/post-like-by-thread-id";
import removeLikeByLikeId from "../../../lib/remove-like-by-like-id";
import { useEffect, useState } from "react";
import getLikeByThreadId from "../../../lib/get-like-by-thread-id";
import { useLocation } from "react-router-dom";
import { ThreadDTO } from "../../../dto/thread-DTO";

export default function useThread(thread: ThreadDTO) {
  const { handleSubmit } = useForm();
  const [likeId, setLikeId] = useState<string | null>(null);
  const [countLike, setCountLike] = useState<number>(thread?._count?.like);
  const { pathname } = useLocation();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true)
    try {
      getLikeByThreadId(thread.id, setLikeId);
    }catch(err : unknown) {
      console.log(err)
    }finally {
      setLoading(false)
    }
  }, [thread]);

  async function handleLike() {
    postLikeByThreadId(thread.id, setCountLike, setLikeId, countLike,setLoading);
  }

  async function handleResetLike() {
    removeLikeByLikeId(likeId, setCountLike, setLikeId, countLike, setLoading);
  }

  return { handleSubmit, handleLike, handleResetLike, countLike, likeId, pathname, loading };
}
