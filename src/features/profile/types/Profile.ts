import { BoxProps } from "@chakra-ui/react";
import ProfileConstUserEntity from "../../../entities/profile-entity-constraints-user";

export default interface ProfileComponentProps extends BoxProps {
    page: string;
    cover: string;
    avatar: string;
    name: string;
    username: string;
    status: string;
    borderProfile: string;
    Profile?: ProfileConstUserEntity
}