import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../../context/Modal-Post-Context";
import { useLocation, useNavigate } from "react-router-dom";
import { apiV1 } from "../../../lib/api-v1";
import { useForm } from "react-hook-form";
import { threadTextForm } from "../../../features/base/schema/thread-text-schema";
import ThreadTextTypes from "../../../features/base/types/thread-text";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppSelector } from "../../../hooks/use-store";
import { ThreadDTO } from "../../../dto/thread-DTO";

export default function useDetailThreads() {
  const { onOpen, isOpen } = useContext(ModalContext);
  const { state, pathname } = useLocation();
  const [thread, setThread] = useState<ThreadDTO>();
  const {
    register,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm<ThreadTextTypes>({ resolver: zodResolver(threadTextForm) });
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.auth);

  useEffect(() => {
    (async function () {
      const response = await apiV1.get(`thread/${state.id}`);
      setThread(response.data.data);
    })();
  }, [isOpen, state, isValid]);

  async function handleReplies(event: ThreadTextTypes) {
    try {
      await apiV1.post("/thread", { ...event, threadId: state.id });
      reset();
    } catch (err) {
      return err;
    }
  }

  return {
    thread,
    onOpen,
    navigate,
    pathname,
    handleSubmit,
    handleReplies,
    register,
    user,
  };
}
