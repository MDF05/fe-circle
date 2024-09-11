import { BoxProps } from "@chakra-ui/react";

export default interface ProfileComponentProps extends BoxProps {
    page: string;
    cover: string;
    avatar: string;
    name: string;
    username: string;
    status: string;
    borderProfile: string;
}