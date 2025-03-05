import { Box, Button, Input } from "@chakra-ui/react";
import { useAppSelector } from "../../../hooks/use-store";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { EditProfileContext } from "../../../context/Modal-Edit-Profile";
import { FieldValues, UseFormRegister } from "react-hook-form";

export function ButtonProfileSide({page,follow, register} : {page : string, follow : string, register : UseFormRegister<FieldValues>}) {
    const user = useAppSelector((state) => state.auth);
    const Profile = useAppSelector((state) => state.profile)?.profile;
    const { onOpen } = useContext(EditProfileContext);
    const followFollower = useAppSelector((state) => state.followFollower)

    console.log("follow" , followFollower)

    
  const Navigate = useNavigate();
  function handleClick() {
    if (location.pathname === "/my-profile") {
      onOpen();
    } else {
      Navigate("/my-profile");
      setTimeout(() => {
        const ButtonEditProfile = document.querySelector<HTMLButtonElement>(".modal-edit-profile");
        ButtonEditProfile?.click();
      }, 100);
    }
  }


    return (
        <Box>
            {page == "my-profile" || user?.id == Profile?.userId ? (
            <Button className="modal-edit-profile" variant="outline" colorScheme="white" rounded="full" onClick={handleClick}>
              Edit Profile
            </Button>
          ) : (
            <Box>
              {follow == "" ? (
                <Button type="submit" variant="outline" colorScheme="white" rounded="full">
                  <Input type="text" hidden {...register("follow")} />
                  Follow
                </Button>
              ) : (
                <Button type="reset" variant="outline" colorScheme="white" rounded="full">
                  <Input type="text" hidden {...register("unFollow")} />
                  Following
                </Button>
              )}
            </Box>
          )}
        </Box>
    )
}

