import ProfileEntity from "../entities/profile-entity";

export interface FollowerFollowingInitiate {
  followingCount: number;
  followerCount: number;
  loading : boolean;
  following : FollowerORFollowingDTO[];
  follower : FollowerORFollowingDTO[];
}

export interface FollowerORFollowingDTO {
  followingId : string;
  followerId : string;
  following? : ProfileEntity;
  follower? : ProfileEntity;
}


