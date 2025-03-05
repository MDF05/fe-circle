import { UserDTO } from "./user-dto"

export interface followingFollowerDTO {
  following : number,
  follower : number
}

export interface followerORFollowingDTO {
followerId: string,
following: UserDTO
followingId: string,
id: string,
}


