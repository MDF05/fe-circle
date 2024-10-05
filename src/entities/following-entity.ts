import ProfileEntity from './profile-entity';

export interface FollowingEntity {
    id: string,
    followerId: string,
    followingId: string,
    follower: ProfileEntity
}