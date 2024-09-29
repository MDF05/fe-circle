import ProfileConstUserEntity from "../entities/profile-entity-constraints-user";

export interface ModalHookForm {
    text: string;
    image: FileList;
}

export default interface ModalPostProps {
    Profile?: ProfileConstUserEntity

}
