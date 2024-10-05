import { FlexProps } from "@chakra-ui/react";
import { IconType } from "react-icons";

export interface LinkItemProps {
    name: string;
    icon: IconType;
    path: string;
}

export interface NavItemProps extends FlexProps {
    icon: IconType;
    path: string;
    children: React.ReactNode;
}

