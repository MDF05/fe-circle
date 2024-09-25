import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { threadSchema } from './../schema/thread-text-schema';
import ThreadTextTypes from './../types/thread-text';
import axios from "axios";
import { useAppSelector } from "../../../hooks/use-store";
import { useState } from "react";


export default function usePostThreadText() {
    const { register, handleSubmit, formState: { errors, isSubmitted }, setError } = useForm<ThreadTextTypes>({ resolver: zodResolver(threadSchema) });
    const user = useAppSelector((state) => state.auth);

    const onSubmit: any = async (e: ThreadTextTypes) => {
        try {
            const response = await axios.post("http://localhost:3000/api/v1/thread", { ...e, profileId: user.profile.id })

            return response
        } catch (err: unknown) {
            if (err instanceof axios.AxiosError) {
                setError("text", { type: "manual", message: err.response?.data.message });
            }
        }
    }


    return { register, handleSubmit, onSubmit, errors, isSubmitted }


}