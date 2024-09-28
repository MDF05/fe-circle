import { useContext, useEffect, useState } from "react";
import threadsEntity from "../../../entities/thread-entity";
import { useAppSelector } from "../../../hooks/use-store";
import useFormPostText from "../hooks/use-thread-text-form";
import { apiV1 } from "../../../lib/api-v1";
import { ModalContext } from "../../../context/Modal-Post-Context";

export default function useBase() {
    const [threads, setThreads] = useState<threadsEntity[]>([]);
    const { isOpen, onOpen } = useContext(ModalContext);
    const { register, onSubmit, handleSubmit, errors, isValid } = useFormPostText();
    const user = useAppSelector((state) => state.auth);

    useEffect(() => {
        (async function () {
            try {
                const threadsData = await apiV1.get("/thread");
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