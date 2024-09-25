import ProfileEntity from "./profile-entity";

export default interface threadsEntity {
    profile: ProfileEntity;
    replies: threadsEntity[],
    createdAt: string;
    id: string;
    image: string;
    like: string;
    postId: string;
    text: string;
    updatedAt: string;
    profileId: string;
    _count: {
        like: number,
        replies: number
    }
}