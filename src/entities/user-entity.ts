
interface UserEntity {
    profile: {
        fullName: string;
        id: string;
        image: string;
        username: string;
    };
    id: string,
    fullName: string,
    email: string,
    password: string,
    socialConnectiion: boolean,
    role: string,
}


export default UserEntity
