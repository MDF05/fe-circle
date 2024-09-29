import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../../context/Modal-Post-Context";
import { useLocation, useNavigate } from "react-router-dom";
import threadsEntity from "../../../entities/thread-entity";
import { apiV1 } from "../../../lib/api-v1";

export default function useDetailThreads() {
    const { onOpen, isOpen } = useContext(ModalContext);
    const { state, pathname } = useLocation();
    const [thread, setThread] = useState<threadsEntity>();
    const navigate = useNavigate();


    useEffect(() => {
        const threadsData = apiV1.get(`thread/${state.id}`)
        threadsData.then((response) => {
            setThread(response.data.data);
        });
    }, [isOpen, state]);


    return {
        thread,
        onOpen,
        navigate,
        pathname
    }

}