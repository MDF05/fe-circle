export default interface ProfileConstUserEntity {
    id: String
    username: String
    fullName: String
    bio?: String
    cover?: String
    image?: String
    userId: String
    thread: []
    followerId?: string
    followingId?: string
    _count: {
        follower: number,
        following: number
    }

};