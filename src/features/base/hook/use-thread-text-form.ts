import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { threadTextForm } from "../schema/thread-text-schema";
import ThreadTextTypes from "../types/thread-text";
import axios from "axios";
import { apiV1 } from "../../../lib/api-v1";
import Cookies from "js-cookie";
import { useState } from "react";
import { useAppDispatch } from "../../../hooks/use-store";
import { getThreadAsync } from "../../../stores/threads/thread-async";

export default function useFormModalPostText() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
    reset,
  } = useForm<ThreadTextTypes>({ resolver: zodResolver(threadTextForm) });
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const onSubmit: any = async (e: ThreadTextTypes) => {
    setLoading(true);
    try {
      const res = await apiV1.post(
        "/thread",
        { ...e },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        },
      );

      reset();
      return res;
    } catch (err: unknown) {
      if (err instanceof axios.AxiosError) {
        setError("text", { type: "manual", message: err.response?.data.message });
      }
    } finally {
      dispatch(getThreadAsync());
      setLoading(false);
    }
  };

  return { register, handleSubmit, onSubmit, errors, reset, isValid, loading };
}
