import { BoxProps } from "@chakra-ui/react";
import ProfileConstUserEntity from "../../../entities/profile-entity-constraints-user";

export default interface ProfileComponentProps extends BoxProps {
    page: string;
    borderProfile: string;
    Profile?: ProfileConstUserEntity,
    following?: string,
    follower?: string
}