export default interface ProfileConstUserEntity {
    id: string
    username: string
    fullName: string
    bio?: string
    cover?: string
    image?: string
    userId: string
    thread: []
    followerId?: string
    followingId?: string
    _count: {
        follower: number,
        following: number
    }

};
