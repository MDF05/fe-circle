import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { EditProfileContext } from './../../../context/Modal-Edit-Profile';
import { apiV1 } from './../../../lib/api-v1';

export default function useEditProfile(Profile: any) {
    const { isOpen, onClose } = useContext(EditProfileContext);
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { },
    } = useForm({
        defaultValues: {
            fullName: Profile?.fullName,
            bio: Profile?.bio,
            username: Profile?.username,
            image: Profile?.image,
            cover: Profile?.cover,
        },
    });

    const [image, setImage] = useState<string | undefined>();
    const [cover, setCover] = useState<string | undefined>();

    const watchImage = watch(["image", "cover"]);

    useEffect(() => {
        if (watchImage[0] && typeof watchImage[0] !== "string") {
            const image: any = watchImage[0][0];
            image && setImage(URL.createObjectURL(image));
        } else {
            setImage(undefined);
        }
        if (watchImage[1] && typeof watchImage[1] !== "string") {
            const cover: any = watchImage[1][0];
            cover && setCover(URL.createObjectURL(cover));
        } else {
            setCover(undefined);
        }
    }, [watchImage[0], watchImage[1], reset]);

    async function submitProfile(event: any) {
        try {
            const formData = new FormData();
            formData.append("fullName", event.fullName);
            formData.append("bio", event.bio);
            formData.append("username", event.username);
            typeof event.image !== "string" &&
                formData.append("image", event.image[0]);
            typeof event.cover !== "string" &&
                formData.append("cover", event.cover[0]);

            await apiV1.put("/profile", formData);
            onClose();
        } catch (err) {
            console.error("Error saving profile: ", err);
        }
    }


    return { submitProfile, image, cover, register, handleSubmit, isOpen, onClose, reset }
} 