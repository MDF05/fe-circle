import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ModalHookForm } from "../types/modal-post";
import { useAppDispatch, useAppSelector } from "./use-store";
import { ModalContext } from "../context/Modal-Post-Context";
import { useLocation } from "react-router-dom";
import { apiV1 } from "../lib/api-v1";
import Cookies from "js-cookie";
import { getThreadAsync } from "../stores/threads/thread-async";

export default function useModalPostHook() {
  const { isOpen, onClose } = useContext(ModalContext);
  const { register, handleSubmit, watch, reset } = useForm<ModalHookForm>();
  const [prevImage, setPrevImage] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const user = useAppSelector((state) => state.auth);
  const watchFile = watch(["image"]);
  const { state } = useLocation();
  const token = Cookies.get("token");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (watchFile[0]) {
      const image = watchFile[0][0];
      image && setPrevImage(URL.createObjectURL(image));
    } else {
      setPrevImage(undefined);
    }
  }, [watchFile[0]]);

  async function submitEvent(event: ModalHookForm) {
    setLoading(true);
    try {
      const image: File = event.image[0];
      const text: string = event.text;
      const formData = new FormData();
      formData.append("text", text);
      image && formData.append("image", image);

      if (state?.id) formData.append("threadId", state.id);

      await apiV1.post<null, any, FormData>("/thread", formData, { headers: { Authorization: "Bearer " + token } });
      reset();
      onClose();
      await dispatch(getThreadAsync());
    } catch (err) {
      return err;
    } finally {
      setLoading(false);
    }
  }

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return {
    isOpen,
    onClose,
    register,
    handleSubmit,
    submitEvent,
    prevImage,
    initialRef,
    finalRef,
    user,
    watch,
    loading,
  };
}
