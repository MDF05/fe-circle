import { Location, NavigateFunction } from "react-router-dom";

export default function handleModal(
    onOpen: Function,
    navigate: NavigateFunction,
    location: Location<string>,
) {
    if (location.pathname == "/") {
        onOpen();
    } else {
        navigate("/");
        setTimeout(() => {
            const button = document.querySelector<HTMLButtonElement>(".button-post");
            button?.click();
        }, 100);
    }
};