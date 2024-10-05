import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { threadTextForm } from '../schema/thread-text-schema';
import ThreadTextTypes from '../types/thread-text';
import axios from "axios";
import { apiV1 } from "../../../lib/api-v1";


export default function useFormModalPostText() {
    const { register, handleSubmit, formState: { errors, isValid }, setError, reset } = useForm<ThreadTextTypes>({ resolver: zodResolver(threadTextForm) });

    const onSubmit: any = async (e: ThreadTextTypes) => {
        try {
            const response = await apiV1.post("/thread", { ...e })
            reset()
            return response
        } catch (err: unknown) {
            if (err instanceof axios.AxiosError) {
                setError("text", { type: "manual", message: err.response?.data.message });
            }
        }
    }


    return { register, handleSubmit, onSubmit, errors, reset, isValid }


}