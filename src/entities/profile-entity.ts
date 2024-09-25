
import threadsEntity from './thread-entity';
import UserEntity from './user-entity';
export default interface ProfileEntity {
    id: string,
    username: string,
    fullName: string,
    bio: string,
    cover: string,
    image: string,
    UserId: string,
    user: UserEntity,
    thread: threadsEntity[]
}