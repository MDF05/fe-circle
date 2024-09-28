
import ProfileConstUserEntity from './profile-entity-constraints-user';
interface UserEntity {
    profile: ProfileConstUserEntity
    id: string,
    fullName: string,
    email: string,
    password: string,
    socialConnectiion: boolean,
    role: string,
}


export default UserEntity
