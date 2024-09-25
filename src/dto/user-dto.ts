import UserEntity from "../entities/user-entity";
type UserDTO = Omit<UserEntity, "password">


interface ResponseUserDTO {
    data: {
        message: string,
        success: boolean,
        status: number,
        data: {
            user: UserDTO,
            token: string,
        }
    }
}




export type { ResponseUserDTO, UserDTO };