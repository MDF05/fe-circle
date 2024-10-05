import { useContext, useEffect, useState } from "react";
import threadsEntity from "../../../entities/thread-entity";
import { useAppSelector } from "../../../hooks/use-store";
import useFormPostText from "./use-thread-text-form";
import { apiV1 } from "../../../lib/api-v1";
import { ModalContext } from "../../../context/Modal-Post-Context";
import Cookies from 'js-cookie';

export default function useBase() {
    const [threads, setThreads] = useState<threadsEntity[]>([]);
    const { isOpen, onOpen } = useContext(ModalContext);
    const { register, onSubmit, handleSubmit, errors, isValid } = useFormPostText();
    const user = useAppSelector((state) => state.auth);
    const token = Cookies.get("token")

    useEffect(() => {
        (async function () {
            try {
                const threadsData = await apiV1.get("/thread", { headers: { Authorization: "Bearer " + token } });
                setThreads(threadsData.data.data)

            } catch (err) {
                setThreads([] as threadsEntity[]);
            }

        })()

    }, [isValid, isOpen]);


    return {
        threads,
        handleSubmit,
        register,
        errors,
        user,
        onSubmit,
        onOpen,
    };

}