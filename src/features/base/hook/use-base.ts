import { useContext } from "react";
import { useAppSelector } from "../../../hooks/use-store";
import useFormPostText from "./use-thread-text-form";
import { ModalContext } from "../../../context/Modal-Post-Context";

export default function useBase() {
  const { onOpen } = useContext(ModalContext);
  const { register, onSubmit, handleSubmit, errors, loading } = useFormPostText();
  const state = useAppSelector((state) => state.threads);

  const user = useAppSelector((state) => state.auth);


  return {
    handleSubmit,
    register,
    errors,
    user,
    onSubmit,
    onOpen,
    loading,
    threads: state.threads,
  };
}
