import ProfileEntity from './profile-entity';

export interface FollowerEntity {
    id: string,
    followerId: string,
    followingId: string,
    following: ProfileEntity
}