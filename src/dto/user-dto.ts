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

interface CheckTokenDTO {
  data: {
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
  };
}

export type { ResponseUserDTO, UserDTO, CheckTokenDTO };
