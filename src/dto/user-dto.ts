import ProfileConstUserEntity from "../entities/profile-entity-constraints-user";
import UserEntity from "../entities/user-entity";
type UserDTO = Omit<UserEntity, "password">;

interface ResponseUserDTO {
  data: {
    message: string;
    success: boolean;
    status: number;
    data: {
      user: UserDTO;
      token: string;
    };
  };
}

export interface LoginDTO {
  token: string;
  user: {
    profile: ProfileConstUserEntity;
    id: string;
    fullName: string;
    email: string;
    password: string;
    socialConnectiion: boolean;
    role: string;
  };
}

export interface CheckToken {
  message: string;
  success: boolean;
  status: number;
  data: {
    profile: ProfileConstUserEntity;
    id: string;
    fullName: string;
    email: string;
    password: string;
    socialConnectiion: boolean;
    role: string;
  };
}

interface CheckTokenDTO {
  data: CheckToken;
}


export interface UserDto {
  bio : string,
cover : null | string;
fullName : string,
id : string,
image: null | string,
userId : string,
username : string,
}

export type { ResponseUserDTO, UserDTO, CheckTokenDTO };
