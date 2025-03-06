import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { EditProfileContext } from "./../../../context/Modal-Edit-Profile";
import { apiV1 } from "./../../../lib/api-v1";
import ProfileConstUserEntity from "../../../entities/profile-entity-constraints-user";
import { useAppDispatch } from "../../../hooks/use-store";
import { getProfileByIdAsync } from "../../../stores/profile/profile-async";

export default function useEditProfile(Profile: ProfileConstUserEntity) {
  const { isOpen, onClose } = useContext(EditProfileContext);
  const { register, handleSubmit, watch, reset, setValue } = useForm();
  const dispatch = useAppDispatch();

  useEffect(() => {
    setValue("fullName", Profile?.fullName);
    setValue("image", Profile?.image);
    setValue("cover", Profile?.cover);
    setValue("bio", Profile?.bio);
    setValue("image", Profile?.image);
    setValue("username", Profile?.username);
  }, [Profile]);

  const [image, setImage] = useState<string | undefined>();
  const [cover, setCover] = useState<string | undefined>();

  const watchImage = watch(["image", "cover"]);

  useEffect(() => {
    if (watchImage[0] && typeof watchImage[0] !== "string") {
      const image = watchImage[0][0];
      if (image) setImage(URL.createObjectURL(image));
    } else {
      setImage(undefined);
    }
    if (watchImage[1] && typeof watchImage[1] !== "string") {
      const cover = watchImage[1][0];
      if (cover) setCover(URL.createObjectURL(cover));
    } else {
      setCover(undefined);
    }
  }, [watchImage, reset]);

  async function submitProfile(event: any) {
    try {
      const formData = new FormData();
      formData.append("fullName", event.fullName);
      formData.append("bio", event.bio);
      formData.append("username", event.username);
      if (typeof event.image !== "string" && event.image !== null) formData.append("image", event.image[0]);
      if (typeof event.cover !== "string" && event.image !== null) formData.append("cover", event.cover[0]);

      await apiV1.put("/profile", formData);
      await dispatch(getProfileByIdAsync(Profile.id));

      onClose();
    } catch (err) {
      return err;
    }
  }

  return { submitProfile, image, cover, register, handleSubmit, isOpen, onClose, reset };
}
